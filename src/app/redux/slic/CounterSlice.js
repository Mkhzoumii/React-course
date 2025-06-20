import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState, 
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
     incrementMultiplier: (state,actions) => {
      state.count += Number(actions.payload);
    },
    decrementMultiplier: (state,actions) => {
      state.count -= Number(actions.payload);
    },
  },
});

export const { increment, decrement,incrementMultiplier,decrementMultiplier } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
