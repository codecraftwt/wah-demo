import React from 'react';
import { Container, Typography } from '@mui/material';

const Communities = () => {
  return (
    <Container sx={{ padding: '20px' ,height:"50%"  }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Communities
      </Typography>
      <Typography variant="body1">
        Connect with your communities.
      </Typography>
    </Container>
  );
};

export default Communities;