import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link1 from '@mui/material/Link';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from 'redux/auth/authOperations';
import {
  selectAuthentificated,
  selectUserLoading,
} from 'redux/auth/authSelectors';
import { Loader } from 'components/Loader/Loader';

const defaultTheme = createTheme();

export default function Login() {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);
  const isLoading = useSelector(selectUserLoading);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      loginUserThunk({
        email: data.get('email'),
        password: data.get('password'),
      })
    );
  };

  if (authentificated) return <Navigate to="/" />;

  return (
    <ThemeProvider theme={defaultTheme}>
      {isLoading && <Loader />}
      <Container component="main" maxWidth="xs" sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              color="secondary"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              color="secondary"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              color="secondary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link1
                  component={Link}
                  to="/register"
                  variant="body2"
                  color="secondary"
                >
                  Don't have an account? Sign Up
                </Link1>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
