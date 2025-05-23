import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Navbar />

      <Box
        component="main"
        sx={{
          width: '100%',
          flexGrow: 1,
          paddingTop: { xs: '70px', sm: '90px', md: '115px' },
          background: 'inherit',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;