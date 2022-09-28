import { configureStore } from '@reduxjs/toolkit';
import { driversReducer } from './reducers/driversReducer';


export default configureStore({
  reducer: {
    drivers: driversReducer
  }
})