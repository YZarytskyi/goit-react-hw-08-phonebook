import { RootState } from './../store';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Contact } from '../../types/types';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};

export const fetchContacts = createAsyncThunk<Contact[]>(
  'contacts/fetchAll',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {auth: {token: accessToken}} = getState() as RootState;
      if (token) {
        token.set(accessToken);
      }
      const { data } = await axios.get('/contacts');
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addContact = createAsyncThunk<Contact, Contact>(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteContact = createAsyncThunk<Contact, string>(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
