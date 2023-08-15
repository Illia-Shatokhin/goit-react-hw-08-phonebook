import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/contactsOperations';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const ContactCard = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: getRandomHexColor() }} aria-label="recipe">
            {name[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton
            onClick={() => handleDeleteContact(id)}
            sx={{
              transition: 'color 250ms linear',
              '&:hover': { color: 'red' },
            }}
            aria-label="delete"
          >
            <DeleteForeverIcon />
          </IconButton>
        }
        title={name}
        subheader={number}
      />
    </Card>
  );
};
