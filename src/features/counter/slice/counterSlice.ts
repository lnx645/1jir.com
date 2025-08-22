import { RootState } from "@/libs/store";
import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "counter",
  initialState: {
    value: 222332,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export  const selectCount = (state:RootState)=>state.counter.value

export const {increment} = countSlice.actions;