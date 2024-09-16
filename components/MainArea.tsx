// components/MainArea.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const MainArea: React.FC = () => (
  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Toolbar />
    <h1>Welcome to the Main Area</h1>
    <p>This is where your main content will be displayed.</p>
  </Box>
);

export default MainArea;
