import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ratingsAPI } from "../../api/axios";

interface RatingsSportsmansInterface {
  id: Number;
  MPScoreArray: [];
  drawsNumber: Number;
  sportsman: Object;
  sportsmanId: Number;
}

interface RatingsInterface {
  ratingsSportsmans: [];
  activeRatingsSportsmans: RatingsSportsmansInterface;
  isLoading: boolean;
  error: string;
}

export const ratingsSliceGetThunk = createAsyncThunk(
  "draw/ratingsSliceGetThunk",
  async (nameId) => {
    const ratingsSportsmansNew = (await ratingsAPI.getRatings(nameId)).data;
    return ratingsSportsmansNew;
  }
);

export const saveActiveRatingsThunk = createAsyncThunk(
  "draw/saveActiveRatingsThunk",
  async (data) => {
    const ratingsSportsmansNew = (await ratingsAPI.saveActiveRatings(data)).data;
    console.log(ratingsSportsmansNew);
    return ratingsSportsmansNew;
  }
);

const initialState: RatingsInterface = {
  ratingsSportsmans: [],
  activeRatingsSportsmans: {
    id: 0,
    drawsNumber: 0,
    MPScoreArray: [],
    sportsman: [],
    sportsmanId: 0,
  },
  isLoading: false,
  error: "",
};

export const ratingsSlice = createSlice({
  name: "ratings",
  initialState,
  reducers: {
    activeRatingsSportsmansChange(
      state: any,
      action: PayloadAction<{ activeSportsman: {} }>
    ) {
      state.activeRatingsSportsmans = action.payload.activeSportsman;
    },
    scoreChange(
      state,
      action: PayloadAction<{
        id: number;
        idActive: number;
        text: any;
        field: number;
      }>
    ) {
      state.activeRatingsSportsmans?.MPScoreArray.forEach((item: any) => {
        if (item.id === action.payload.id) {
          item.scores[`${action.payload.field}`] = action.payload.text;
        }
      });

      state.ratingsSportsmans.forEach((item: any) => {
        if (item.id === action.payload.idActive) {
          item.MPOneScoreArray = state.activeRatingsSportsmans;
        }
      });
    },
    fineChange(
      state,
      action: PayloadAction<{
        id: number;
        idActive: number;
        text: any;
        field: string;
      }>
    ) {
      state.activeRatingsSportsmans?.MPScoreArray.forEach((item: any) => {
        if (item.id === action.payload.id) {
          item[`${action.payload.field}`] = action.payload.text;
        }
      });

      state.ratingsSportsmans.forEach((item: any) => {
        if (item.id === action.payload.idActive) {
          item.MPOneScoreArray = state.activeRatingsSportsmans;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ratingsSliceGetThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(ratingsSliceGetThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      if(!action.payload.error) {
        state.ratingsSportsmans = action.payload;
      } else {
        state.error = action.payload.error;
      }
    });
  },
});

export const { scoreChange, fineChange, activeRatingsSportsmansChange } =
  ratingsSlice.actions;

export default ratingsSlice.reducer;
