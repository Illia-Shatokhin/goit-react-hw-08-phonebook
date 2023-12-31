import { Link, Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
  createTheme,
} from '@mui/material';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import MenuIcon from '@mui/icons-material/Menu';
import { logoutUserThunk } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthentificated,
  selectUserData,
  selectUserLoading,
} from 'redux/auth/authSelectors';
import { Loader } from 'components/Loader/Loader';
import Link1 from '@mui/material/Link';

const defaultTheme = createTheme();

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link1
        color="inherit"
        href="https://drive.google.com/file/d/1GWUKMOOekTHPtXH0rxCzNNrQ5s_o37iK/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        Illia Shatokhin
      </Link1>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const SharedLayout = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);
  const userData = useSelector(selectUserData);
  const isLoading = useSelector(selectUserLoading);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogOut = () => {
    handleCloseUserMenu();
    dispatch(logoutUserThunk());
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: 'secondary.main' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ContactEmergencyIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="h1"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '1.9rem',
              }}
            >
              Phonebook
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button component={Link} to={`/`}>
                    Home
                  </Button>
                </MenuItem>
                {authentificated ? (
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Button component={Link} to={`/contacts`}>
                      Contacts
                    </Button>
                  </MenuItem>
                ) : (
                  <div>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Button component={Link} to={`/register`}>
                        Register
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Button component={Link} to={`/login`}>
                        Login
                      </Button>
                    </MenuItem>
                  </div>
                )}
              </Menu>
            </Box>
            <ContactEmergencyIcon
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Phonebook
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
              component="nav"
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link}
                to="/"
              >
                Home
              </Button>
              {authentificated ? (
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  component={Link}
                  to="/contacts"
                >
                  Contacts
                </Button>
              ) : (
                <>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    component={Link}
                    to="/register"
                  >
                    Register
                  </Button>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    component={Link}
                    to="/login"
                  >
                    Login
                  </Button>
                </>
              )}
            </Box>

            {authentificated && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    color="red"
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                  >
                    <Avatar
                      variant="rounded"
                      sx={{ bgcolor: getRandomHexColor() }}
                    >
                      {userData.name[0].toUpperCase()}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem disabled onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{userData.email}</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogOut}>
                    <Typography onClick={handleLogOut} textAlign="center">
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {isLoading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ThemeProvider theme={defaultTheme}>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            textAlign: 'center',
            backgroundColor: theme =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              Information about developer can be found here.
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
};
