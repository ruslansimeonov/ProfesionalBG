import * as React from 'react';
import Layout from '../components/Layout';
import {
  Card,
  CardContent,
  Typography,
  Grid2,
  Avatar,
  Button,
  IconButton,
} from '@mui/material'; // Correct import for Grid2
import Pagination from '@mui/material/Pagination';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { UserSheets } from '../interfaces/UserSheets';

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
        const data: { users: UserSheets[] } = await response.json();
        console.log(data);
        console.log(data.users);

        // Transform the array data into UserSheets type
        const transformedUsers: UserSheets[] = data.users.map((user) => ({
          firstName: user[0],
          middleName: user[1],
          lastName: user[2],
          socialSecurityNumber: Number(user[3]),
          placeOfWork: user[4],
          birthPlace: user[5],
          permanentAddress: user[6],
          phoneNumber: user[7],
          emailAddress: user[8],
          cityToSignUp: user[9],
          courseToSignUp: user[10],
          trusteeName: user[11],
          photoForDocumentLink: user[12],
          driverLicenseLink: user[13],
          idCardLink: user[14],
          medicalCertificateLink: user[15],
          educationDocumentLink: user[16],
          medicalPsychiatristLink: user[17],
          copyOfExsistingLicenseLink: user[18],
          dateOfSignUp: user[19],
          signatureLink: user[20],
        }));

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

  const paginatedUsers = users.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

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
        <>
          <Grid2 container spacing={4}>
            {paginatedUsers.map((user) => (
              <Grid2 size={4}>
                <Card>
                  <CardContent>
                    <Grid2 container spacing={2} alignItems="center">
                      <Grid2>
                        <Avatar
                          src={user.photoForDocumentLink || ''}
                          alt={`${user.firstName} ${user.lastName}`}
                          sx={{ width: 56, height: 56 }}
                        >
                          {!user.photoForDocumentLink && <AccountCircleIcon />}
                        </Avatar>
                      </Grid2>
                      <Grid2>
                        <Typography variant="h5" component="div">
                          {user.firstName} {user.middleName} {user.lastName}
                        </Typography>
                      </Grid2>
                    </Grid2>
                    <Typography variant="body2" color="text.secondary">
                      <strong>EGN:</strong> {user.socialSecurityNumber}
                      <br />
                      <strong>Place of Work:</strong> {user.placeOfWork}
                      <br />
                      <strong>Place of Birth:</strong> {user.birthPlace}
                      <br />
                      <strong>Permanent Residence:</strong>{' '}
                      {user.permanentAddress}
                      <br />
                      <strong>Telephone Number:</strong> {user.phoneNumber}
                      <br />
                      <strong>Email:</strong> {user.emailAddress}
                      <br />
                      <strong>City of Enrollment:</strong> {user.cityToSignUp}
                      <br />
                      <strong>Course Enrollment:</strong> {user.courseToSignUp}
                      <br />
                      <strong>Trustee:</strong> {user.trusteeName}
                      <br />
                      <strong>Driver's License:</strong>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<DescriptionIcon />}
                        href={user.driverLicenseLink}
                        target="_blank"
                        style={{ marginLeft: '10px' }}
                      >
                        View
                      </Button>
                      <br />
                      <strong>Photo ID Card:</strong>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<PhotoCameraIcon />}
                        href={user.idCardLink}
                        target="_blank"
                        style={{ marginLeft: '10px' }}
                      >
                        View
                      </Button>
                      <br />
                      <strong>Medical Certificate:</strong>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<LocalHospitalIcon />}
                        href={user.medicalCertificateLink}
                        target="_blank"
                        style={{ marginLeft: '10px' }}
                      >
                        View
                      </Button>
                      <br />
                      <strong>Education Document:</strong>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<SchoolIcon />}
                        href={user.educationDocumentLink}
                        target="_blank"
                        style={{ marginLeft: '10px' }}
                      >
                        View
                      </Button>
                      <br />
                      <strong>Medical by Psychiatrist:</strong>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<MedicalServicesIcon />}
                        href={user.medicalPsychiatristLink}
                        target="_blank"
                        style={{ marginLeft: '10px' }}
                      >
                        View
                      </Button>
                      <br />
                      <strong>
                        Copy of Existing Certificate of Legal Capacity:
                      </strong>{' '}
                      {user.copyOfExsistingLicenseLink}
                      <br />
                      <strong>Date:</strong> {user.dateOfSignUp}
                      <br />
                      <strong>Signature:</strong> {user.signatureLink}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
          <Pagination
            count={Math.ceil(users.length / ITEMS_PER_PAGE)}
            page={page}
            onChange={handleChangePage}
            color="primary"
            style={{
              marginTop: '20px',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </>
      ) : (
        <p>No users found.</p>
      )}
    </Layout>
  );
}
