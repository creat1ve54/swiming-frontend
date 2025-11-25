import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ageSubgroupAPI } from "../../api/axios";

const initialState = {
  // arrayHeaderAgeGroup: [
  //   {
  //     id: 1,
  //     title: "Наименование(для протоколов)",
  //   },
  //   {
  //     id: 2,
  //     title: "Краткое наименование",
  //   },
  // ],
  ageSubgroup: [],
  isLoading: false,
  error: "",
};

export const ageSubgroupThunk = createAsyncThunk(
  "ageGroup/ageSubgroupThunk",
  async () => {
    const ageSubgroup = (await ageSubgroupAPI.getAgeSubroup()).data;
    return ageSubgroup;
  }
);

export const ageSubgroupSlice = createSlice({
  name: "ageSubgroup",
  initialState,
  reducers: {
    // changeBodyAgeGroup(state, action: PayloadAction<[]>) {
    //   state.arrayBodyAgeGroup = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(ageSubgroupThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(ageSubgroupThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.ageSubgroup.length = 0;
      state.ageSubgroup = action.payload;
    });
  },
});

export const {
  // changeBodyAgeGroup
} = ageSubgroupSlice.actions;

export default ageSubgroupSlice.reducer;
