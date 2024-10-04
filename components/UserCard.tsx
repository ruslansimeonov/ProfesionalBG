// components/UserCard.tsx
import * as React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid2,
  Avatar,
  Button,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { UserSheets } from '../interfaces/UserSheets';

interface UserCardProps {
  user: UserSheets;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
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
                <strong>Permanent Residence:</strong> {user.permanentAddress}
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
                <strong>City of Enrollment:</strong> {user.cityToSignUp}
                <br />
              </>
            )}
            {user.courseToSignUp && (
              <>
                <strong>Course Enrollment:</strong> {user.courseToSignUp}
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
                <strong>Copy of Existing Certificate of Legal Capacity:</strong>
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
  );
};

export default UserCard;
