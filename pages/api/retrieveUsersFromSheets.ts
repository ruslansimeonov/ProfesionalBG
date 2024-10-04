import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

const RANGE = 'Лист1'; // Adjust the range as needed

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: session.accessToken });

  const sheets = google.sheets({ version: 'v4', auth });

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values;
    if (rows && rows.length > 1) {
      // Skip the first row
      const dataWithoutHeader = rows.slice(1);
      return res.status(200).json({ users: dataWithoutHeader });
    } else {
      return res.status(404).json({ error: 'No data found' });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: 'Error retrieving data from Google Sheets' });
  }
}