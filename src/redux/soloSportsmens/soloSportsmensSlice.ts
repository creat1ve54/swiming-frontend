import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { soloSportsmensAPI } from "../../api/axios";
// import { elementsOfTechnicalProgramsAPI, elementsProgramAPI } from "../../api/axios";

// export interface ReferencesBtnsArrayInterface {
//   id: number;
//   nameElementsProgram: string;
// }

// export interface ReferencesBtnsElementsProgramsInterface {
//   id: number;
//   nameElementProgram: string;
//   ratio: number;
//   elementsOfTechnicalProgramId: number;
// }

// export interface ReferencesBtnsInterface {
//   elementsOfTechnicalPrograms: ReferencesBtnsArrayInterface[];
//   elementsPrograms: ReferencesBtnsElementsProgramsInterface[];
//   isLoading: boolean;
//   error: string;
// }

const initialState = {
  soloSportsmens: [],
  isLoading: false,
  error: "",
};

export const soloSportsmensThunk = createAsyncThunk(
  "soloSportsmens/soloSportsmensThunk",
  async () => {
    const soloSportsmen = (await soloSportsmensAPI.getSoloSportsmens()).data;

    return soloSportsmen;
  }
);

// export const elementsProgramThunk = createAsyncThunk(
//   "referencesBtns/elementsProgramThunk",
//   async () => {
//     const elementsProgramThunk = (
//       await elementsProgramAPI.getElementProgram()
//     ).data;
//     return elementsProgramThunk;
//   }
// );

export const soloSportsmensSlice = createSlice({
  name: "soloSportsmens",
  initialState,
  reducers: {
    // changeBodyDuo(state, action: PayloadAction<[]>) {
    //   state.arrayBodyDuo = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(soloSportsmensThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(soloSportsmensThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.soloSportsmens.length = 0;
      state.soloSportsmens = action.payload;
    });
    // builder.addCase(elementsProgramThunk.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(elementsProgramThunk.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.elementsPrograms.length = 0;
    //   state.elementsPrograms = action.payload;
    // });
  },
});

export const {} = soloSportsmensSlice.actions;

export default soloSportsmensSlice.reducer;
