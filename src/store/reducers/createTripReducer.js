import { createAction, createReducer } from '@reduxjs/toolkit';
import data from '../../data/db.json';

const initialState = {
  requests: [...data.requests]
}

export const createTrip = createAction('CREATE_ROAD_REQUEST');


export const passengerReducer = createReducer(initialState, {
  [createTrip]: function (state, action) {
    return { ...state, requests: [...state.requests, action.payload] };
  }
});
