// pages/about.tsx
import * as React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Layout from '../components/Layout';

const About: React.FC = () => {


  return (
    <Layout>
      <h1>About Us</h1>
      <p>This is the about page content.</p>
    </Layout>
  );
};

export default About;
