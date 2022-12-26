import { createAction, createReducer } from "@reduxjs/toolkit";
import data from '../../data/db.json';

const initialState = {
  offers: [...data.offers]
}

export const offerTrip = createAction('CREATE_TRIP_DRIVER');


export const driverReducer = createReducer(initialState, {
  [offerTrip]: function (state, action) {
    return { ...state, offers: [...state.offers, action.payload] }
  }
})

