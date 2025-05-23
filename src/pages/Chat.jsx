import React from 'react';
import { Container, Typography } from '@mui/material';

const Chat = () => {
  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Chat
      </Typography>
      <Typography variant="body1">
        Start chatting with others.
      </Typography>
    </Container>
  );
};

export default Chat;