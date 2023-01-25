import { Button } from '@chakra-ui/react';
import { deleteContact } from '../../../redux/contactsSlice/contactsThunks';
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { Contact } from '../../../types/types';
import { Li } from './ContactsListItem.styled';

interface ContactsListItemProps {
  contact: Contact;
}

const ContactsListItem = ({ contact }: ContactsListItemProps) => {
  const dispatch = useAppDispatch();

  const onClickDelete = (id: string) => {
    dispatch(deleteContact(id));
  };
  return (
    <Li>
      <p>
        {contact.name} {contact.number}
      </p>
      <Button
        colorScheme="red"
        size="xs"
        type="button"
        onClick={() => onClickDelete(contact.id)}
      >
        Delete
      </Button>
    </Li>
  );
};

export default ContactsListItem;
