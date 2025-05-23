import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Wah App
      </Typography>
      <Typography variant="body1">
        This is the home page of React + MUI application.
      </Typography>
    </Container>
  );
};

export default Home;