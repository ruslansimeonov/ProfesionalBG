// components/UserList.tsx
import * as React from 'react';
import { Grid2, Pagination } from '@mui/material';
import UserCard from './UserCard';
import { UserSheets } from '../interfaces/UserSheets';

interface UserListProps {
  users: UserSheets[];
  page: number;
  itemsPerPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const UserList: React.FC<UserListProps> = ({
  users,
  page,
  itemsPerPage,
  onPageChange,
}) => {
  const paginatedUsers = users.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <>
      <Grid2 container spacing={4}>
        {paginatedUsers.map((user) => (
          <UserCard key={user.socialSecurityNumber} user={user} />
        ))}
      </Grid2>
      <Pagination
        count={Math.ceil(users.length / itemsPerPage)}
        page={page}
        onChange={onPageChange}
        color="primary"
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      />
    </>
  );
};

export default UserList;
