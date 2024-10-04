// types/next-auth.d.ts (or src/next-auth.d.ts)

import  { DefaultSession, DefaultUser } from 'next-auth';

// Extend the NextAuth session and token types to include custom fields
declare module 'next-auth' {
  interface Session {
    user: {
      id?: string;
      email?: string;
      name?: string;
      // Add additional fields to the session object
    } & DefaultSession['user'];
    accessToken?: string;
  }

  interface User extends DefaultUser {
    // Add any custom fields for the user here
    id: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    // Add any custom fields to the JWT token
    accessToken?: string;
  }
}
