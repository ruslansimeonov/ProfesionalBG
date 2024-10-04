import * as React from 'react';
import Layout from '../components/Layout';
import { UserSheets } from '../interfaces/UserSheets';
import { transformUsers } from '../helperFunctions/transformUsers';
import UserList from '../components/UserList'; // Import the UserList component

type FetchError = {
  message: string;
};

const ITEMS_PER_PAGE = 9;

export default function Users() {
  const [users, setUsers] = React.useState<UserSheets[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/retrieveUsersFromSheets');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data: { users: (string | number)[][] } = await response.json(); // Assuming the sheet data is an array of arrays

        // Transform the array data into UserSheets type
        const transformedUsers = transformUsers(data.users);

        setUsers(transformedUsers);
      } catch (error) {
        const fetchError = error as FetchError;
        setError(fetchError.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  if (loading) {
    return (
      <Layout>
        <h1>Users</h1>
        <p>Loading...</p>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <h1>Users</h1>
        <p>Error: {error}</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Users</h1>
      {users.length > 0 ? (
        <UserList
          users={users}
          page={page}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={handleChangePage}
        />
      ) : (
        <p>No users found.</p>
      )}
    </Layout>
  );
}
