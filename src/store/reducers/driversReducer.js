import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const initialState = {
  offers: [],
  tripInfo: {}
}

export const getTrips = createAction('GET_TRIPS');
export const offerTrip = createAction('CREATE_TRIP_DRIVER');
export const getTripInfo = createAction('GET_TRIP_INFO');

export const driverReducer = createReducer(initialState, {
  [getTrips]: (state, { payload }) => {
    return { ...state, offers: payload }
  },
  [offerTrip]: function (state, action) {
    return { ...state, offers: [...state.offers, action.payload.trip] };
  },
  [getTripInfo]: function (state, action) {
    return { ...state, tripInfo: action.payload }
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

export const getTripInfoOperation = (tripId, set) => (dispatch) => {
  axios.get(`/trips/trip/${tripId}`).then(res => {
    dispatch(getTripInfo(res.data));
    set(res.data);
    // console.log(res.data._id)
  })
}



