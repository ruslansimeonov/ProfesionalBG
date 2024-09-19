// pages/auth/signin.tsx
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const SignInPage: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { error } = router.query;

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session, router]);

  const errorMessage = error === 'AccessDenied'
    ? 'Access Denied: You are not authorized to access this application.'
    : error
    ? 'An unexpected error occurred during sign-in.'
    : '';

  if (status === 'loading') {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Sign In</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </Layout>
  );
};

export default SignInPage;
