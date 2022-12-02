import { configureStore } from '@reduxjs/toolkit';
import { driversReducer } from './reducers/driversReducer';
import { authReducer } from './reducers/authReducer';


export default configureStore({
  reducer: {
    // drivers: driversReducer,
    // auth: authReducer
  }
})