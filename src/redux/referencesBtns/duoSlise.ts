import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  arrayBodyDuo: [
    {
      id: 1,
      text: ["El1a", "3,0"],
    },
    {
      id: 2,
      text: ["El1b", "2,5"],
    },
    {
      id: 3,
      text: ["El2a", "2,8"],
    },
    {
      id: 4,
      text: ["El2b", "2,4"],
    },
    {
      id: 5,
      text: ["El3a", "2,9"],
    },
    {
      id: 6,
      text: ["El3b", "2,6"],
    },
    {
      id: 7,
      text: ["El4a", "3,3"],
    },
    {
      id: 8,
      text: ["El4b", "2,7"],
    },
    {
      id: 9,
      text: ["El5a", "2,3"],
    },
    {
      id: 10,
      text: ["El5b", "2,1"],
    },
  ],
};

export const duoSlice = createSlice({
  name: "duo",
  initialState,
  reducers: {
    changeBodyDuo(state, action: PayloadAction<[]>) {
      state.arrayBodyDuo = action.payload;
    },
  },
});

export const { changeBodyDuo } = duoSlice.actions;

export default duoSlice.reducer;
