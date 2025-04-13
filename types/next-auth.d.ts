import "next-auth";

declare module "next-auth" {
  interface User {
    platformToken?: string;
  }

  interface Session {
    user?: {
      platformToken?: string;
    } & DefaultSession["user"];
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    platformToken?: string;
  }
}
