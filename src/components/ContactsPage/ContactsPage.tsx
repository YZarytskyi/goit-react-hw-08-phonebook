import { useEffect } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { ContactsTitle, Container } from './ContactsPage.styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { Navigate } from 'react-router-dom';
import { fetchContacts } from '../../redux/contactsSlice/contactsThunks';

const ContactsPage = () => {
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Container>
      <ContactsForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactsList />
    </Container>
  );
};

export default ContactsPage;
