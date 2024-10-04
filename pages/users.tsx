import * as React from 'react';
import Layout from '../components/Layout';
import {
  Card,
  CardContent,
  Typography,
  Grid2,
  Avatar,
  Button,
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
        const data: { users: (string | number)[][] } = await response.json(); // Assuming the sheet data is an array of arrays
        console.log(data);
        console.log(data.users);

        // Transform the array data into UserSheets type
        const transformedUsers: UserSheets[] = data.users.map((user) => ({
          firstName: user[0] as string,
          middleName: user[1] as string,
          lastName: user[2] as string,
          socialSecurityNumber: Number(user[3]),
          placeOfWork: user[4] as string,
          birthPlace: user[5] as string,
          permanentAddress: user[6] as string,
          phoneNumber: user[7] as string,
          emailAddress: user[8] as string,
          cityToSignUp: user[9] as string,
          courseToSignUp: user[10] as string,
          trusteeName: user[11] as string,
          photoForDocumentLink: user[12] as string,
          driverLicenseLink: user[13] as string,
          idCardLink: user[14] as string,
          medicalCertificateLink: user[15] as string,
          educationDocumentLink: user[16] as string,
          medicalPsychiatristLink: user[17] as string,
          copyOfExsistingLicenseLink: user[18] as string,
          dateOfSignUp: user[19] as string,
          signatureLink: user[20] as string,
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
              <Grid2 size={4} key={user.socialSecurityNumber}>
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
                      {user.socialSecurityNumber && (
                        <>
                          <strong>EGN:</strong> {user.socialSecurityNumber}
                          <br />
                        </>
                      )}
                      {user.placeOfWork && (
                        <>
                          <strong>Place of Work:</strong> {user.placeOfWork}
                          <br />
                        </>
                      )}
                      {user.birthPlace && (
                        <>
                          <strong>Place of Birth:</strong> {user.birthPlace}
                          <br />
                        </>
                      )}
                      {user.permanentAddress && (
                        <>
                          <strong>Permanent Residence:</strong>{' '}
                          {user.permanentAddress}
                          <br />
                        </>
                      )}
                      {user.phoneNumber && (
                        <>
                          <strong>Telephone Number:</strong> {user.phoneNumber}
                          <br />
                        </>
                      )}
                      {user.emailAddress && (
                        <>
                          <strong>Email:</strong> {user.emailAddress}
                          <br />
                        </>
                      )}
                      {user.cityToSignUp && (
                        <>
                          <strong>City of Enrollment:</strong>{' '}
                          {user.cityToSignUp}
                          <br />
                        </>
                      )}
                      {user.courseToSignUp && (
                        <>
                          <strong>Course Enrollment:</strong>{' '}
                          {user.courseToSignUp}
                          <br />
                        </>
                      )}
                      {user.trusteeName && (
                        <>
                          <strong>Trustee:</strong> {user.trusteeName}
                          <br />
                        </>
                      )}
                      {user.driverLicenseLink && (
                        <>
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
                        </>
                      )}
                      {user.idCardLink && (
                        <>
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
                        </>
                      )}
                      {user.medicalCertificateLink && (
                        <>
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
                        </>
                      )}
                      {user.educationDocumentLink && (
                        <>
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
                        </>
                      )}
                      {user.medicalPsychiatristLink && (
                        <>
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
                        </>
                      )}
                      {user.copyOfExsistingLicenseLink && (
                        <>
                          <strong>
                            Copy of Existing Certificate of Legal Capacity:
                          </strong>
                          <Button
                            variant="contained"
                            color="primary"
                            startIcon={<DescriptionIcon />}
                            href={user.copyOfExsistingLicenseLink}
                            target="_blank"
                            style={{ marginLeft: '10px' }}
                          >
                            View
                          </Button>
                          <br />
                        </>
                      )}
                      {user.dateOfSignUp && (
                        <>
                          <strong>Date:</strong> {user.dateOfSignUp}
                          <br />
                        </>
                      )}
                      {user.signatureLink && (
                        <>
                          <strong>Signature:</strong> {user.signatureLink}
                          <br />
                        </>
                      )}
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
