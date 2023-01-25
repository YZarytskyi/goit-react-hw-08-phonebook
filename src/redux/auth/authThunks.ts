import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CreateUser, LoginParams, LoginResponse } from '../../types/types';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk<any, CreateUser>('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error: any) {
    return error.message;
  }
});

export const logIn = createAsyncThunk<LoginResponse, LoginParams>('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error: any) {
    return error.message;
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error: any) {
    return error.message;
  }
});











// export const fetchContacts = createAsyncThunk<Contact[]>(
//   'contacts/fetchAll',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await getAllContacts();
//       return response;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   }
// );

// export const addContact = createAsyncThunk<Contact, Contact>(
//   'contacts/addContact',
//   async (contact, { rejectWithValue }) => {
//     try {
//       const response = await addNewContact(contact);
//       return response;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk<Contact, string>(
//   'contacts/deleteContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await deleteSelectedContact(id);
//       return response;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   }
// );
