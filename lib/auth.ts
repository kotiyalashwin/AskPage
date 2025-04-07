import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { prisma } from "./db";
import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";
import { CredentialSchema } from "@/schemas/auth";

type CredentialsData = {
  password: string;
  name?: string;
  email: string;
};

export const authOptions: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvider({
      name: "Credentials",
      credentials: {
        name: {},
        email: { required: true, type: "text" },
        password: { required: true, type: "password" },
      },
      async authorize(credentials) {
        const { success } = CredentialSchema.safeParse(credentials);
        const { email, password } = credentials as CredentialsData;
        if (!success) {
          return null;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const existingUser = await prisma.user.findFirst({
          where: {
            email: email,
          },
        });

        if (existingUser && existingUser.password) {
          const passValidation = await bcrypt.compare(
            password,
            existingUser?.password
          );

          if (passValidation) {
            console.log("success login");
            return {
              id: existingUser.id.toString(),
              email: existingUser.email,
            };
          }
          return null;
        }

        try {
          const user = await prisma.user.create({
            data: {
              email: email,
              password: hashedPassword,
              provider: "Credentials",
            },
          });

          return {
            id: user.id.toString(),
            email: user.email,
          };
        } catch (e) {
          console.log(e);
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!user.email) return false;

      const existing = await prisma.user.findUnique({
        where: {
          email: user.email,
        },
      });

      if (!existing) {
        await prisma.user.create({
          data: {
            email: user.email,
            provider: "Google",
          },
        });
      }

      return true;
    },

    async session({ session, token }) {
      if (!session.user.email) return session;

      const current = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      if (current) {
        session.user.id = String(current.id);
      }

      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
