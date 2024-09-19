// pages/auth/error.tsx
import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const ErrorPage: React.FC = () => {
  const router = useRouter();
  const { error } = router.query;

  const errorMessage = error === 'AccessDenied'
    ? 'Access Denied: You are not authorized to access this application.'
    : 'An unexpected error occurred.';

  return (
    <Layout>
      <h1>Error</h1>
      <p style={{ color: 'red' }}>{errorMessage}</p>
      <button onClick={() => router.push('/auth/signin')}>Go back to Sign In</button>
    </Layout>
  );
};

export default ErrorPage;
