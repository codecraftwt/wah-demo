import React from 'react';
import { Container, Typography } from '@mui/material';

const MyStuff = () => {
  return (
    <Container sx={{ padding: '20px', height:"50%"  }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My Stuff
      </Typography>
      <Typography variant="body1">
        Your personal items and collections.
      </Typography>
    </Container>
  );
};

export default MyStuff;