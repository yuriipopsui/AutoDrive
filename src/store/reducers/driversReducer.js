import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const initialState = {
  offers: []
}

export const getTrips = createAction('GET_TRIPS');
export const offerTrip = createAction('CREATE_TRIP_DRIVER');

export const driverReducer = createReducer(initialState, {
  [getTrips]: (state, { payload }) => {
    return { ...state, offers: payload }
  },
  [offerTrip]: function (state, action) {
    return { ...state, offers: [...state.offers, action.payload.trip] };
  }
});

export const getTripsOperation = () => (dispatch) => {
  axios.get(`/trips`).then(res => { dispatch(getTrips(res.data)) })
}
export const createTripOperation = (data) => (dispatch) => {
  axios.post(`/trips/create`, data).then(res => { dispatch(offerTrip(res.data)) });
}

export const getFilteredTrips = (filter, set) => (dispatch) => {
  axios.post(`/trips/find`, filter).then(res => {
    dispatch(offerTrip(res.data))
    set(res.data)
  }).catch((e) => {
    console.log(e);
    return console.log(e.response.data.message);
  })
}

