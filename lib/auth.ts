import NextAuth, { AuthError } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./db";
import type { NextAuthConfig } from "next-auth";
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
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
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
        const hashedPassword = await bcrypt.hash(password, 10);
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
          const passValidation = await bcrypt.compare(
            hashedPassword,
            existingUser?.password
          );

          if (passValidation) {
            console.log("success login");
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
    async signIn({ user, account, profile }) {
      //user looks like this
      // {
      //   id: string,
      //   name: 'Peter Jacxsens',
      //   email: string,
      //   image: string
      // },
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

    //customize the token send to the browser
    async jwt({ user, account, token }) {
      //we add the provider type to the toen
      token.provier = account?.provider;

      return token;
    },
    //what the auth() will return us
    async session({ session, token }) {
      if (!session.user.email) return session;

      const current = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      //this adds the id of the user to the session
      // so auth() will give something like {... , id : 1},
      // using this ID we can do some DB calls for data using server actions
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
