import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { driversReducer } from './reducers/driversReducer';
// import { authReducer } from './reducers/authReducer';
import { requestTripReducer } from './reducers/requestTripReducer';


const rootReducer = combineReducers({
  requestTrip: requestTripReducer
});



const store = configureStore({
  reducer: rootReducer
});

export default store;