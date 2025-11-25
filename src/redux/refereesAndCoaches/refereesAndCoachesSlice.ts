import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { randomUUID } from "crypto";
import { refereesAndCoachesApi } from "../../api/axios";

export interface RefereesAndCoachesArrayInterface {
  id: number;
  surname: string;
  firstname: string;
  surnameAndFirstName: string;
  region: string;
  category: string;
}

export interface refereesAndCoachesInterface {
  refereesAndCoaches: RefereesAndCoachesArrayInterface[];
  isLoading: boolean;
  error: string;
}

const initialState: refereesAndCoachesInterface = {
  refereesAndCoaches: [],
  isLoading: false,
  error: "",
};

export const refereesAndCoachesSliceThunk = createAsyncThunk(
  "refereesAndCoaches/sportsmansSliceThunk",
  async () => {
    const refereesAndCoache = (
      await refereesAndCoachesApi.getRefereesAndCoaches()
    ).data;

    return refereesAndCoache;
  }
);

export const refereesAndCoacheSlicePutThunk = createAsyncThunk(
  "refereesAndCoaches/refereesAndCoachesSlicePutThunk",
  async (refereesAndCoache, { dispatch }) => {
    const refereesAndCoacheNew = (
      await refereesAndCoachesApi.putRefereesAndCoaches(refereesAndCoache)
    ).data;

    return refereesAndCoacheNew;
  }
);

export const refereesAndCoachesSliceCreateThunk = createAsyncThunk(
  "refereesAndCoaches/refereesAndCoachesSliceCreateThunk",
  async (refereesAndCoaches) => {
    const refereesAndCoachesNew = (
      await refereesAndCoachesApi.createRefereesAndCoaches(refereesAndCoaches)
    ).data;
    return refereesAndCoachesNew;
  }
);

export const refereesAndCoachesSliceDeleteThunk = createAsyncThunk(
  "refereesAndCoaches/refereesAndCoachesSliceDeleteThunk",
  async (id) => {
    const refereesAndCoacheNewNew = (
      await refereesAndCoachesApi.deleteRefereesAndCoaches(id)
    ).data;
    return refereesAndCoacheNewNew;
  }
);

export const refereesAndCoachesSlice = createSlice({
  name: "refereesAndCoaches",
  initialState,
  reducers: {
    surnameChange(state, action: PayloadAction<{ id: number; text: any }>) {
      state.refereesAndCoaches.forEach((refereeAndCoache) => {
        if (refereeAndCoache.id == action.payload.id) {
          refereeAndCoache.surname = action.payload.text;
        }
      });
    },
    firstNameChange(state, action: PayloadAction<{ id: number; text: any }>) {
      state.refereesAndCoaches.forEach((refereeAndCoache) => {
        if (refereeAndCoache.id == action.payload.id) {
          refereeAndCoache.firstname = action.payload.text;
        }
      });
    },
    regionChange(state, action: PayloadAction<{ id: number; text: any }>) {
      state.refereesAndCoaches.forEach((refereeAndCoache) => {
        if (refereeAndCoache.id == action.payload.id) {
          refereeAndCoache.region = action.payload.text;
        }
      });
    },
    categoryChange(state, action: PayloadAction<{ id: number; text: any }>) {
      state.refereesAndCoaches.forEach((refereeAndCoache) => {
        if (refereeAndCoache.id == action.payload.id) {
          refereeAndCoache.category = action.payload.text;
        }
      });
    },
    createReferee(state, action: PayloadAction<{ referee: Object }>) {
      console.log(state);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(refereesAndCoachesSliceThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(refereesAndCoachesSliceThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.refereesAndCoaches.length = 0;
      state.refereesAndCoaches = action.payload;
    });
    builder.addCase(refereesAndCoacheSlicePutThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      refereesAndCoacheSlicePutThunk.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.refereesAndCoaches.length = 0;
        state.refereesAndCoaches = action.payload;
      }
    );
    builder.addCase(
      refereesAndCoachesSliceCreateThunk.pending,
      (state, action) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      refereesAndCoachesSliceCreateThunk.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.refereesAndCoaches.push(action.payload);
      }
    );
    builder.addCase(
      refereesAndCoachesSliceDeleteThunk.pending,
      (state, action) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      refereesAndCoachesSliceDeleteThunk.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.refereesAndCoaches = state.refereesAndCoaches.filter(
          (refereeAndCoache) => {
            return refereeAndCoache.id !== action.payload;
          }
        );
      }
    );
  },
});

export const { surnameChange, firstNameChange, categoryChange, regionChange } =
  refereesAndCoachesSlice.actions;

export default refereesAndCoachesSlice.reducer;
