import { createSlice } from '@reduxjs/toolkit';
import { Credentials } from '../../types/types';
import { logIn, logOut, register } from './authThunks';

interface InitialState {
  user: null | Credentials;
  token: string;
}

const initialState: InitialState = {
  user: null,
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.user = null;
      state.token = '';
    });
  },
});

export const authReducer = authSlice.reducer;
