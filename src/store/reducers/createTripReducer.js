import { createAction, createReducer } from '@reduxjs/toolkit';
import data from '../../data/db.json';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const initialState = {
  requests: [...data.requests],
  find: {}
}

export const createTrip = createAction('CREATE_ROAD_REQUEST');
export const findTrip = createAction('FIND_TRIP');
export const setFindTripObject = createAction('SET_TRIP_OBJECT');


export const passengerReducer = createReducer(initialState, {

  [createTrip]: function (state, action) {
    console.log(state);
    return { ...state, requests: [...state.requests, action.payload] };
  },
  [findTrip]: function (state, action) {
    return { ...state, find: action.payload };
  }
});


