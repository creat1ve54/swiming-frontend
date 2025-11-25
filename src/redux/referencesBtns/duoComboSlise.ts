import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  arrayBodyDuoCombo: [
    {
      id: 1,
      text: ["El1a", "2,7"],
    },
    {
      id: 2,
      text: ["El1b", "2,5"],
    },
    {
      id: 3,
      text: ["El2a", "2,4"],
    },
    {
      id: 4,
      text: ["El2b", "2,2"],
    },
    {
      id: 5,
      text: ["El3", "3,3"],
    },
    {
      id: 6,
      text: ["El4a", "3,0"],
    },
    {
      id: 7,
      text: ["El4b", "2,6"],
    },
    {
      id: 8,
      text: ["El5a", "2,4"],
    },
    {
      id: 9,
      text: ["El5b", "2,1"],
    },
  ],
};

export const duoComboSlice = createSlice({
  name: "duoCombo",
  initialState,
  reducers: {
    changeBodyDuoCombo(state, action: PayloadAction<[]>) {
      state.arrayBodyDuoCombo = action.payload;
    },
  },
});

export const { changeBodyDuoCombo } = duoComboSlice.actions;

export default duoComboSlice.reducer;
