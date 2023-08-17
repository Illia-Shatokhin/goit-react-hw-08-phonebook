import { Container, CssBaseline, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  selectAuthentificated,
  selectUserData,
} from 'redux/auth/authSelectors';

const Home = () => {
  const authentificated = useSelector(selectAuthentificated);
  const userData = useSelector(selectUserData);
  return (
    <>
      <CssBaseline />
      <Container
        component="main"
        sx={{ mt: 8, mb: 2, flexGrow: 1 }}
        maxWidth="md"
      >
        <Typography variant="h2" component="h2" gutterBottom>
          {authentificated ? `Hello ${userData.name}` : 'Welcome to PhoneBook'}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {
            'You can register and maintain your private contact book on this site. '
          }
          {'You can add and remove contacts from your private contact list'}
        </Typography>
        <Typography variant="body1">
          Technology used: (React, React Hooks, React Router, PropTypes, Redux,
          Redux Toolkit, Redux Persist, Material UI)
        </Typography>
      </Container>{' '}
    </>
  );
};

export default Home;
