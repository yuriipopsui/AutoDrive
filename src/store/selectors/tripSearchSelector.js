
export const tripSearchSelector = (state) => {
  console.log(state);
  return state.requestTrip.requests;
}