import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { sportCategoryAPI } from "../../api/axios";

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
  sportCategory: [],
  isLoading: false,
  error: "",
};

export const sportCategoryThunk = createAsyncThunk(
  "ageGroup/sportCategoryThunk",
  async () => {
    const sportCategory = (await sportCategoryAPI.getSportCategory()).data;
    return sportCategory;
  }
);

export const sportCategorySlice = createSlice({
  name: "sportCategory",
  initialState,
  reducers: {
    // changeBodyAgeGroup(state, action: PayloadAction<[]>) {
    //   state.arrayBodyAgeGroup = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(sportCategoryThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(sportCategoryThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.sportCategory.length = 0;
      state.sportCategory = action.payload;
    });
  },
});

export const {
  // changeBodyAgeGroup
} = sportCategorySlice.actions;

export default sportCategorySlice.reducer;
