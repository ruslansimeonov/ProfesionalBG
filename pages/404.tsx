// pages/404.tsx
import * as React from 'react';
import Layout from '../components/Layout';
import { Typography } from '@mui/material';

const Custom404: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h1" component="h1" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry, the page you're looking for does not exist.
      </Typography>
    </Layout>
  );
};

export default Custom404;
