import React from 'react';
import { Container, Typography } from '@mui/material';

const Wallet = () => {
  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Wallet
      </Typography>
      <Typography variant="body1">
        Manage your payments and transactions.
      </Typography>
    </Container>
  );
};

export default Wallet;