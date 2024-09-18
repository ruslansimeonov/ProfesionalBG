// pages/index.tsx
import * as React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Layout from '../components/Layout';

const Home: React.FC = () => {

  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
    </Layout>
  );
};

export default Home;
