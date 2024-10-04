// pages/index.tsx
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Layout from '../components/Layout';

interface HomeProps {
  userName: string;
}

const Home: React.FC<HomeProps> = ({ userName }) => (
  <Layout>
    <h1>Welcome, {userName}</h1>
    <p>This is the home page content.</p>
  </Layout>
);

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const authorizedEmails = (process.env.AUTHORIZED_EMAILS || '').split(',');


  if (!session || !session.user || !session.user.email) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  if (!authorizedEmails.includes(session.user.email)) {
    return {
      redirect: {
        destination: '/auth/unauthorized',
        permanent: false,
      },
    };
  }

  return {
    props: {
      userName: session.user.name,
    },
  };
};
