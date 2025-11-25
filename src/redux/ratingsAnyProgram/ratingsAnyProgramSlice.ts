import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ratingsAnyProgramAPI } from "../../api/axios";

interface RatingsSportsmansInterface {
  id: Number;
  MPScoreAnyProgramArray: [];
  MPOneScoreIpressionAnyArray: [];
  drawsNumber: Number;
  sportsman: Object;
  sportsmanId: Number;
  sinxr: Number;
}

interface RatingsInterface {
  ratingsSportsmansAnyProgram: [];
  activeRatingsSportsmansAnyProgram: RatingsSportsmansInterface;
  isLoading: boolean;
  error: string;
}

export const ratingsSlicAnyProgrameGetThunk = createAsyncThunk(
  "draw/ratingsSliceAnyProgramGetThunk",
  async (ratings) => {
    const ratingsSportsmansNew = (
      await ratingsAnyProgramAPI.getRatings(ratings)
    ).data;
    return ratingsSportsmansNew;
  }
);

export const saveActiveRatingsAnyProgramThunk = createAsyncThunk(
  "draw/saveActiveRatingsAnyProgramThunk",
  async (data) => {
    const ratingsSportsmansNew = (
      await ratingsAnyProgramAPI.saveActiveRatings(data)
    ).data;
    console.log(ratingsSportsmansNew);
    return ratingsSportsmansNew;
  }
);

export const saveActiveAnyProgramDDThunk = createAsyncThunk(
  "draw/saveActiveAnyProgramDDThunk",
  async (data) => {
    const ratingsSportsmansNew = (
      await ratingsAnyProgramAPI.saveActiveDDThunk(data)
    ).data;
    console.log(ratingsSportsmansNew);
    return ratingsSportsmansNew;
  }
);

export const saveActiveAnyProgramSinxrThunk = createAsyncThunk(
  "draw/saveActiveAnyProgramSinxrThunk",
  async (data) => {
    const ratingsSportsmansNew = (
      await ratingsAnyProgramAPI.saveActiveSinxrThunk(data)
    ).data;
    console.log(ratingsSportsmansNew);
    return ratingsSportsmansNew;
  }
);

export const saveActiveRatingsAnyProgramImpressionThunk = createAsyncThunk(
  "draw/saveActiveRatingsAnyProgramImpressionThunk",
  async (data) => {
    const ratingsSportsmansNew = (
      await ratingsAnyProgramAPI.saveActiveRatingsImpression(data)
    ).data;
    console.log(ratingsSportsmansNew);
    return ratingsSportsmansNew;
  }
);

export const saveActiveRatingsAnyProgramElementThunk = createAsyncThunk(
  "draw/saveActiveRatingsAnyProgramElementThunk",
  async (data) => {
    const ratingsSportsmansNew = (
      await ratingsAnyProgramAPI.saveActiveRatingsElement(data)
    ).data;
    console.log(ratingsSportsmansNew);
    return ratingsSportsmansNew;
  }
);

export const saveActiveRatingsAnyProgramElementImoressionThunk =
  createAsyncThunk(
    "draw/saveActiveRatingsAnyProgramElementImoressionThunk",
    async (data) => {
      const ratingsSportsmansNew = (
        await ratingsAnyProgramAPI.saveActiveRatingsElementImpression(data)
      ).data;
      console.log(ratingsSportsmansNew);
      return ratingsSportsmansNew;
    }
  );

const initialState: RatingsInterface = {
  ratingsSportsmansAnyProgram: [],
  activeRatingsSportsmansAnyProgram: {
    id: 0,
    drawsNumber: 0,
    MPScoreAnyProgramArray: [],
    MPOneScoreIpressionAnyArray: [],
    sportsman: [],
    sportsmanId: 0,
    sinxr: 0,
  },
  isLoading: false,
  error: "",
};

export const ratingsAnyProgramSlice = createSlice({
  name: "ratingsAnyProgram",
  initialState,
  reducers: {
    activeRatingsSportsmansChange(
      state: any,
      action: PayloadAction<{ activeSportsman: {} }>
    ) {
      state.activeRatingsSportsmansAnyProgram = action.payload.activeSportsman;
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
      state.activeRatingsSportsmansAnyProgram?.MPScoreAnyProgramArray.forEach(
        (item: any) => {
          if (item.id === action.payload.id) {
            item.scores[`${action.payload.field}`] = action.payload.text;
          }
        }
      );

      state.ratingsSportsmansAnyProgram.forEach((item: any) => {
        if (item.id === action.payload.idActive) {
          item.MPScoreAnyProgramArray = state.activeRatingsSportsmansAnyProgram;
        }
      });
    },
    DDChange(
      state,
      action: PayloadAction<{
        id: number;
        idActive: number;
        text: any;
        // field: number;
      }>
    ) {
      state.activeRatingsSportsmansAnyProgram?.MPScoreAnyProgramArray.forEach(
        (item: any) => {
          if (item.id === action.payload.id) {
            item.DD = action.payload.text;
          }
        }
      );

      state.ratingsSportsmansAnyProgram.forEach((item: any) => {
        if (item.id === action.payload.idActive) {
          item.MPScoreAnyProgramArray = state.activeRatingsSportsmansAnyProgram;
        }
      });
    },
    sinxrChange(
      state,
      action: PayloadAction<{
        id: number;
        idActive: number;
        text: any;
        // field: number;
      }>
    ) {
      state.activeRatingsSportsmansAnyProgram.sinxr = action.payload.text;

      state.ratingsSportsmansAnyProgram.forEach((item: any) => {
        if (item.id === action.payload.idActive) {
          item.MPScoreAnyProgramArray = state.activeRatingsSportsmansAnyProgram;
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
      state.activeRatingsSportsmansAnyProgram?.MPScoreAnyProgramArray.forEach(
        (item: any) => {
          if (item.id === action.payload.id) {
            item[`${action.payload.field}`] = action.payload.text;
          }
        }
      );

      state.ratingsSportsmansAnyProgram.forEach((item: any) => {
        if (item.id === action.payload.idActive) {
          item.MPScoreAnyProgramArray = state.activeRatingsSportsmansAnyProgram;
        }
      });
    },
    scoreChangeImpression(
      state,
      action: PayloadAction<{
        id: number;
        idActive: number;
        text: any;
        field: number;
      }>
    ) {
      state.activeRatingsSportsmansAnyProgram?.MPOneScoreIpressionAnyArray.forEach(
        (item: any) => {
          if (item.id === action.payload.id) {
            item.scores[`${action.payload.field}`] = action.payload.text;
          }
        }
      );

      state.ratingsSportsmansAnyProgram.forEach((item: any) => {
        if (item.id === action.payload.idActive) {
          item.MPOneScoreIpressionAnyArray =
            state.activeRatingsSportsmansAnyProgram;
        }
      });
    },
    fineChangeImpression(
      state,
      action: PayloadAction<{
        id: number;
        idActive: number;
        text: any;
        field: string;
      }>
    ) {
      state.activeRatingsSportsmansAnyProgram?.MPOneScoreIpressionAnyArray.forEach(
        (item: any) => {
          if (item.id === action.payload.id) {
            item[`${action.payload.field}`] = action.payload.text;
          }
        }
      );

      state.ratingsSportsmansAnyProgram.forEach((item: any) => {
        if (item.id === action.payload.idActive) {
          item.MPOneScoreIpressionAnyArray =
            state.activeRatingsSportsmansAnyProgram;
        }
      });
    },
    resetRatingsSportsmans(
      state,
      action
    ) {
      state.ratingsSportsmansAnyProgram = [];
    },
    // elementChange(state,
    //   action: PayloadAction<{
    //     id: number;
    //     idActive: number;
    //     text: any;
    //     field: string;
    //   }>){
    //     state.activeRatingsSportsmans?.MPScoreAnyProgramArray.forEach((item: any) => {
    //       if (item.id === action.payload.id) {
    //         item.scores[`${action.payload.field}`] = action.payload.text;
    //       }
    //     });

    //     state.ratingsSportsmans.forEach((item: any) => {
    //       if (item.id === action.payload.idActive) {
    //         item.MPScoreAnyProgramArray = state.activeRatingsSportsmans;
    //       }
    //     });
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(ratingsSlicAnyProgrameGetThunk.pending, (state, action) => {
      state.isLoading = true;
      // state.ratingsSportsmansAnyProgram = [];
    });
    builder.addCase(
      ratingsSlicAnyProgrameGetThunk.fulfilled,
      (state, action) => {
        state.isLoading = false;
        if (!action.payload.error) {
          state.ratingsSportsmansAnyProgram = action.payload;
        } else {
          state.error = action.payload.error;
        }
      }
    );
  },
});

export const {
  scoreChange,
  fineChange,
  scoreChangeImpression,
  fineChangeImpression,
  activeRatingsSportsmansChange,
  DDChange,
  sinxrChange,
  resetRatingsSportsmans
} = ratingsAnyProgramSlice.actions;

export default ratingsAnyProgramSlice.reducer;
