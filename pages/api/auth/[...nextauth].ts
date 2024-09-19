// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { authorizedEmails } from '../../../authorizedUsers';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user }) {
      if (user.email && authorizedEmails.includes(user.email)) {
        return true;
      }
      // Return false to deny access
      return false;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error', // Redirect to error page on failure
  },
});
