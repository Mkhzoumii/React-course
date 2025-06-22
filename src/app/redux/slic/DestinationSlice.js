import { createSlice } from "@reduxjs/toolkit";
const initialState = () => {
  return {
    destinations: [
      {
        name: "mkhzoumi",
        days: "7",
        fact: "very smart",
      },
      {
        name: "humamm",
        days: "79",
        fact: "very very  smart",
      },
      {
        name: "waleed",
        days: "10",
        fact: "good",
      },
    ],
    destinationSelected: null,
  };
};
const destinationSlic = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {
    destinationClicked: (state, action) => {
      state.destinationSelected = action.payload;
      console.log(action);
    },
    resetDestination: (state,action) => {
      state.destinationSelected = null;
      console.log(action);
    },
  },
});
export const { resetDestination } = destinationSlic.actions;
export const { destinationClicked } = destinationSlic.actions;
export const destinationReducer = destinationSlic.reducer;
