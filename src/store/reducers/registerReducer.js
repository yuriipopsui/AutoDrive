import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const userRegister = createAsyncThunk(
  'register/userRegister',
  (userData) => {
    console.log(userData);
    const res = axios.post('/auth/register', userData.userData).then(res => res.data);
    return res;
  });

const initialState = {
  user: null,
  isLoading: false,
}

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
        console.log(state.status);
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = 'Succeded';
        state.isLoading = false;
        state.user = action.payload;
        console.log(state.status);
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.status = 'Failed';
        state.isLoading = false;
        state.user = null;
        state.error = action.error.message;
      })
  }
});

export default registerSlice.reducer;