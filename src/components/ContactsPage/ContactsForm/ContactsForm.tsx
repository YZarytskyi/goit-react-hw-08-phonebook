import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Contact } from '../../../types/types';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { Form, Input, Label } from './ContactsForm.styled';
import { addContact } from '../../../redux/contactsSlice/contactsThunks';
import { Button } from '@chakra-ui/react';

const ContactsForm = () => {
  const contacts = useAppSelector(state => state.contacts.contacts);
  const dispatch = useAppDispatch();

  const [contactName, setContactName] = useState<string>('');
  const [contactNumber, setContactNumber] = useState<string>('');

  const onChangeInput: React.FormEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target as HTMLInputElement;
    if (name === 'name') {
      setContactName(value);
      return;
    }
    setContactNumber(value);
  };

  const onSubmitAddContact: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const existingNames = contacts.items.map(el => el.name);

    if (existingNames.includes(contactName)) {
      alert(`${contactName} is already in contacts.`);
      return;
    }

    const newContact: Contact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };
    dispatch(addContact(newContact));
    setContactName('');
    setContactNumber('');
  };

  return (
    <Form onSubmit={onSubmitAddContact}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={contactName}
          onChange={onChangeInput}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={contactNumber}
          onChange={onChangeInput}
        />
      </Label>
      <Button colorScheme="teal" size="md" type="submit">
        Add contact
      </Button>
    </Form>
  );
};

export default ContactsForm;
