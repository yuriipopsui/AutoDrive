import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const userAuth = createAsyncThunk(
  'auth/userAuth',
  async (userData) => {
    const res = await axios.post('/auth/login', userData.userData).then(res => res.data);

    return res;
  });



const initialState = {
  user: null,
  isAuth: false,
  isLoading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.isAuth = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userAuth.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
        console.log(state.status);
      })
      .addCase(userAuth.fulfilled, (state, action) => {
        state.status = 'Succeeded';
        state.isAuth = true;
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
        console.log(state.status);
      })
      .addCase(userAuth.rejected, (state, action) => {
        state.status = 'failed';
        state.isAuth = false;
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;

