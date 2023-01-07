import { createAction, createReducer } from "@reduxjs/toolkit";
import data from '../../data/db.json';

const initialState = {
  offers: JSON.parse(localStorage.getItem("localOffers")) || [...data.offers]
}

export const offerTrip = createAction('CREATE_TRIP_DRIVER');


export const driverReducer = createReducer(initialState, {
  [offerTrip]: function (state, action) {
    localStorage.setItem("localOffers", JSON.stringify([...state.offers, action.payload]));
    return { ...state, offers: [...state.offers, action.payload] };
  }
})

