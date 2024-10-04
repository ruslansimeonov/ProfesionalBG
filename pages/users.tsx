import * as React from 'react';
import Layout from '../components/Layout';

export default function Users() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/retrieveUsersFromSheets');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

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
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.join(', ')}</li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </Layout>
  );
}
