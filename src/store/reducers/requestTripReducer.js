import { createAction, createReducer } from '@reduxjs/toolkit';
import data from '../../data/db.json';

const initialState = {
  requests: [...data.requests]
}

const createRoadRequest = createAction('CREATE_ROAD_REQUEST');


export const requestTripReducer = createReducer(initialState, {
  [createRoadRequest]: function (state) {

  }
})