import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ageGroupAPI } from "../../api/axios";

const initialState = {
  arrayHeaderAgeGroup: [
    {
      id: 1,
      title: "Наименование(для протоколов)",
    },
    {
      id: 2,
      title: "Краткое наименование",
    },
  ],
  ageGroup: [],
  isLoading: false,
  error: "",
};

export const ageGroupThunk = createAsyncThunk(
  "ageGroup/ageGroupThunk",
  async () => {
    const ageGroup = (await ageGroupAPI.getAgeGroup()).data;
    return ageGroup;
  }
);

export const ageGroupSlice = createSlice({
  name: "ageGroup",
  initialState,
  reducers: {
    // changeBodyAgeGroup(state, action: PayloadAction<[]>) {
    //   state.arrayBodyAgeGroup = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(ageGroupThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(ageGroupThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.ageGroup.length = 0;
      state.ageGroup = action.payload;
    });
  },
});

export const {
  // changeBodyAgeGroup
} = ageGroupSlice.actions;

export default ageGroupSlice.reducer;
