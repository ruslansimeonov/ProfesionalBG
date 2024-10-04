// transformUsers.ts
import { UserSheets } from '../interfaces/UserSheets';

export function transformUsers(data: (string | number)[][]): UserSheets[] {
  return data.map((user) => ({
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
}
