import ContactsList from './ContactsList/ContactsList';
import ContactsForm from './ContactsForm/ContactsForm';
import Filter from './Filter/Filter';
import { ContactsTitle, PageTitle } from './App.styled';
import { useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks/hooks';
import { fetchContacts } from '../redux/contactsSlice/contactsSlice';


const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [])

  return (
    <div>
      <PageTitle>Phonebook</PageTitle>
      <ContactsForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
