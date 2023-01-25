import ContactsListItem from './ContactsListItem';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks/hooks';

const Ul = styled.ul`
  padding-left: 3rem;
`;

const Warning = styled.p`
  padding-left: 3rem;
`;

const Loading = styled.p`
  padding-left: 3rem;
`;


const ContactsList = () => {
  const { contacts, filter } = useAppSelector(state => state.contacts);
  const {items, isLoading} = contacts

  const filteredList = items.filter(contact => {
    const normalizeName = contact.name.trim().toLowerCase();
    const normalizeFilter = filter.trim().toLowerCase();
    return normalizeName.includes(normalizeFilter);
  });

  if (isLoading) {
    return <Loading>Loading...</Loading>
  }

  if (!filteredList.length) {
    return <Warning>Contacts not found</Warning>;
  }

  return (
    <Ul>
      {filteredList.map(contact => (
        <ContactsListItem key={contact.id} contact={contact} />
      ))}
    </Ul>
  );
};

export default ContactsList;
