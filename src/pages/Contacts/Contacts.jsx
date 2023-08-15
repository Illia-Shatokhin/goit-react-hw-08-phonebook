import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  Modal,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthentificated,
  selectUserLoading,
} from 'redux/auth/authSelectors';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { useEffect, useState } from 'react';
import {
  selectContactsError,
  selectContactsIsLoading,
  selectUserContacts,
} from 'redux/contacts/contactsSelectors';
import {
  addContactThunk,
  requestContactsThunk,
} from 'redux/contacts/contactsOperations';
import { ContactCard } from 'components/ContactCard/ContactCard';

const defaultTheme = createTheme();
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Contacts = () => {
  const authentificated = useSelector(selectAuthentificated);
  const contacts = useSelector(selectUserContacts);
  const isLoadingContacts = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const isLoadingUser = useSelector(selectUserLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return;

    dispatch(requestContactsThunk());
  }, [authentificated, dispatch]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const userData = {
      number: form.elements.number.value,
      name: `${form.elements.firstName.value} ${form.elements.lastName.value}`,
    };
    dispatch(addContactThunk(userData));
    form.reset();

    handleClose();
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  return (
    <section>
      <div>
        <Button
          onClick={handleOpen}
          color="secondary"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Open modal
          <AddIcon />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ThemeProvider theme={defaultTheme}>
              {isLoadingUser && <Loader />}
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
                    <AddIcCallIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Add new contact
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          color="secondary"
                          autoComplete="given-name"
                          name="firstName"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          color="secondary"
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="family-name"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          color="secondary"
                          required
                          fullWidth
                          id="number"
                          label="Number"
                          name="number"
                          autoComplete="number"
                        />
                      </Grid>
                    </Grid>
                    <Button
                      color="secondary"
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      ADD
                      <AddIcon />
                    </Button>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </Box>
        </Modal>
      </div>
      {isLoadingContacts && <Loader />}
      {error && <p>Error - {error}</p>}
      {showContacts &&
        contacts.map(contact => (
          <ContactCard
            name={contact.name}
            number={contact.number}
            id={contact.id}
            key={contact.id}
          />
        ))}
    </section>
  );
};
export default Contacts;
