import { Container, CssBaseline, Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Container
        component="main"
        sx={{ mt: 8, mb: 2, flexGrow: 1 }}
        maxWidth="sm"
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container>{' '}
    </>
  );
};

export default Home;
