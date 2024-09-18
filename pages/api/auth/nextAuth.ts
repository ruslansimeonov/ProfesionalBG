// pages/api/auth/[...nextauth].ts

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // You can add other providers like GitHub, Facebook, etc.
  ],

  // JWT and session configuration
  session: {
    strategy: 'jwt',
  },

  // Optional: Add callbacks to modify session or JWT token
  callbacks: {
    async session({ session, token, user }) {
      // Include accessToken in the session object
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, account }) {
      // Add the access token to the token object
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },

  // Optional: Pages configuration (custom sign-in, error, etc.)
  pages: {
    signIn: '/auth/signin', // Custom sign-in page route
  },
});
