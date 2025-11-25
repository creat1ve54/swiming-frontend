import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  arrayBodyGroup: [
    {
      id: 1,
      text: ["El1a", "2,5"],
    },
    {
      id: 2,
      text: ["El1b", "2,3"],
    },
    {
      id: 3,
      text: ["El2a", "2,6"],
    },
    {
      id: 4,
      text: ["El2b", "2,3"],
    },
    {
      id: 5,
      text: ["El3a", "2,6"],
    },
    {
      id: 6,
      text: ["El3b", "2,3"],
    },
    {
      id: 7,
      text: ["El4", "2,9"],
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

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    changeBodyGroup(state, action: PayloadAction<[]>) {
      state.arrayBodyGroup = action.payload;
    },
  },
});

export const { changeBodyGroup } = groupSlice.actions;

export default groupSlice.reducer;
