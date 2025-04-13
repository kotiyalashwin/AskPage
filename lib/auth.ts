import NextAuth, { AuthError } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "../db/db";
import type { NextAuthConfig } from "next-auth";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { CredentialSchema } from "@/schemas/auth";

interface CredentialsData {
  email: string;
  password: string;
}

class customError extends AuthError {
  constructor(message: string) {
    super();
    this.message = message;
  }
}

export const authOptions: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { required: true, type: "text", name: "email" },
        password: { required: true, type: "password", name: "password" },
      },
      async authorize(credentials) {
        const { success } = CredentialSchema.safeParse(credentials);
        const { email, password } = credentials as CredentialsData;
        if (!success) {
          throw new customError("Invalid Credentials");
        }
        const existingUser = await prisma.user.findFirst({
          where: {
            email: email,
          },
        });
        if (!existingUser) {
          throw new customError("No Account Found");
          // throw new Error(JSON.stringify({ code: 404, message: "blabla" }));
        }
        if (existingUser && existingUser.password) {
          //always compare the user entered pass with the bd pass do not hash again
          const passValidation = await bcrypt.compare(
            password,
            existingUser.password
          );
          // console.log(passValidation);
          if (passValidation) {
            return {
              id: existingUser.id.toString(),
              email: existingUser.email,
            };
          }
          // throw new Error(JSON.stringify({ code: 401 }));
          throw new customError("Invalid Credentials");
        }
        throw new customError("Failed!!");
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      // console.log(user);
      if (account?.provider === "google") {
        // 2. Check if user exists in DB
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });

        // 3. Create new user if not found
        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email!,
              provider: "Google",
              plan: { connect: { name: "Free" } }, // Assign default plan
            },
          });
        }
      }
      const platformToken = crypto.randomBytes(32).toString("hex");
      user.platformToken = platformToken;

      await prisma.user.update({
        where: { email: user.email as string },
        data: { platformToken },
      });
      // if (!user.platformToken) {
      //   const platformToken = crypto.randomBytes(32).toString("hex"); // 64-char hex
      //   console.log(platformToken);
      //   user.platformToken = platformToken;
      //   await prisma.user.update({
      //     where: { id: Number(user.id) },
      //     data: { platformToken },
      //   });
      // }
      return true;
    },
    //customize the token send to the browser
    async jwt({ token, user, account }) {
      if (account?.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: {
            email: user.email as string,
          },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              planId: "plan_free",
              email: user.email as string,
              provider: "Google",
            },
          });
        }
      }
      if (user) {
        token.platformToken = user.platformToken;
      }
      return token;
    },
    //what the auth() will return us
    async session({ session, token }) {
      if (session.user) {
        session.user.platformToken = token.platformToken;
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
