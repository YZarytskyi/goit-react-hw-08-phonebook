import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../../types/types';
import {
  getAllContacts,
  addNewContact,
  deleteSelectedContact,
} from '../../api/contactsApi';

interface ContactsState {
  contacts: {
    items: Array<Contact>;
    isLoading: boolean;
    error: any;
  };
  filter: string;
}

const initialState: ContactsState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const fetchContacts = createAsyncThunk<Contact[]>(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllContacts();
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addContact = createAsyncThunk<Contact, Contact>(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await addNewContact(contact);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteContact = createAsyncThunk<Contact, string>(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteSelectedContact(id);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.contacts.error = payload;
        state.contacts.isLoading = false;
      });
    builder
      .addCase(addContact.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.items = [...state.contacts.items, payload];
        state.contacts.isLoading = false;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.contacts.error = payload;
        state.contacts.isLoading = false;
      });
    builder
      .addCase(deleteContact.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(el => el.id !== payload.id);
        state.contacts.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.contacts.error = payload;
        state.contacts.isLoading = false;
      });
  },
});

export const { setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
