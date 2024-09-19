// pages/_app.tsx
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import React from 'react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <SessionProvider session={pageProps.session}>
    <Component {...pageProps} />
  </SessionProvider>
);

export default MyApp;
