import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
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
});
