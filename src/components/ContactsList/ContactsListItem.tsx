import { useAppDispatch } from '../../redux/hooks/hooks';
import { deleteContact } from '../../redux/contactsSlice/contactsSlice';
import { Contact } from '../../types/types';
import { Button, Li } from './ContactsListItem.styled';

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
      <Button type="button" onClick={() => onClickDelete(contact.id)}>
        Delete
      </Button>
    </Li>
  );
};

export default ContactsListItem;
