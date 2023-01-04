import { createAction, createReducer } from '@reduxjs/toolkit';
import data from '../../data/db.json';

const initialState = {
  requests: [...data.requests],
  find: {
    startPoint: '',
    endPoint: '',
    date: '',
    time: '',
  }
}

export const createTrip = createAction('CREATE_ROAD_REQUEST');
export const findTrip = createAction('FIND_TRIP');


export const passengerReducer = createReducer(initialState, {
  [createTrip]: function (state, action) {
    console.log(state);
    return { ...state, requests: [...state.requests, action.payload] };
  },
  [findTrip]: function (state, action) {
    console.log(action);
    return { ...state, find: action.payload };
  }
});
