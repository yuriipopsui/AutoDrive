import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { driverReducer } from './reducers/driversReducer';
import { passengerReducer } from './reducers/createTripReducer';
import authReducer from './reducers/authReducer';
import registerReducer from './reducers/registerReducer';


const rootReducer = combineReducers({
  requestTrip: passengerReducer,
  offerTrip: driverReducer,
  auth: authReducer,
  register: registerReducer
});



const store = configureStore({
  reducer: rootReducer
});

console.log(store.getState());
export default store;