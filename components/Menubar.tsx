// components/Menubar.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Menubar: React.FC = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" noWrap component="div">
        My App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Menubar;
