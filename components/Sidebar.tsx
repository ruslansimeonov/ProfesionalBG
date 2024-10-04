// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Users', href: '/users' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index}>
            <Link href={item.href} passHref>
              <ListItemText primary={item.text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
