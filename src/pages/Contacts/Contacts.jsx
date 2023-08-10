import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { Button, Typography } from '@mui/material';
import css from './Contacts.module.css';

const Contacts = () => {
  return (
    <>
      <div className={css.formOutline}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography
            sx={{
              marginLeft: '8px',
              marginBottom: '16px',
            }}
            component="p"
            color="secondary"
          >
            New Contact
          </Typography>
          <div>
            <TextField color="secondary" required label="Name" />
            <TextField color="secondary" required label="Number" />
          </div>
          <Button
            sx={{
              marginLeft: '8px',
            }}
            color="secondary"
            type="submit"
            variant="contained"
            endIcon={<AddIcon />}
          >
            Add
          </Button>
        </Box>
      </div>
      <div className={css.contactsContainer}>
        <Typography
          sx={{
            marginLeft: '24px',
            marginBottom: '16px',
          }}
          component="p"
          color="secondary"
        >
          Contacts
        </Typography>
        <TextField
          color="secondary"
          label="Find contacts by name"
          variant="outlined"
        />
      </div>
    </>
  );
};
export default Contacts;
