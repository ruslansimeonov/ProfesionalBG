// pages/auth/unauthorized.tsx
import React from 'react';
import Layout from '../../../components/Layout';

const UnauthorizedPage: React.FC = () => (
  <Layout>
    <h1>Access Denied</h1>
    <p>You are not authorized to access this application.</p>
  </Layout>
);

export default UnauthorizedPage;
