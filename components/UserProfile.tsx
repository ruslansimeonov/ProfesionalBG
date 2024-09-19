import { useSession, signIn, signOut } from 'next-auth/react';
import Button from '@mui/material/Button';

const UserProfile: React.FC = () => {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div>
      {session ? (
        <>
          <p>Welcome, {session.user?.name}!</p>
          <Button variant="contained" color="primary" onClick={() => signOut()}>
            Sign out
          </Button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <Button variant="contained" color="primary" onClick={() => signIn()}>
            Log in
          </Button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
