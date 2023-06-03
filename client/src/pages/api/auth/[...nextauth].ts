import NextAuth from "next-auth";
import type { NextAuthOptions, DefaultSession } from "next-auth";
import auth from "@/firebase/admin";

import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    user: {
      // Firebaseの認証情報
      uid: string;
      emailVerified?: boolean;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    // Firebaseの認証情報
    uid: string;
    emailVerified: boolean;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize: async ({ idToken }: any, _req) => {
        if (idToken) {
          try {
            const decoded = await auth.verifyIdToken(idToken);

            return { ...decoded } as any;
          } catch (err) {
            console.error(err);
          }
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      return session;
    },
  },
};

export default NextAuth(authOptions);
