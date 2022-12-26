import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { driverReducer } from './reducers/driversReducer';
// import { authReducer } from './reducers/authReducer';
import { passengerReducer } from './reducers/createTripReducer';


const rootReducer = combineReducers({
  requestTrip: passengerReducer,
  offerTrip: driverReducer
});



const store = configureStore({
  reducer: rootReducer
});

export default store;