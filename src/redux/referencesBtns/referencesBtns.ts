import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { elementsOfTechnicalProgramsAPI, elementsProgramAPI } from "../../api/axios";

export interface ReferencesBtnsArrayInterface {
  id: number;
  nameElementsProgram: string;
}

export interface ReferencesBtnsElementsProgramsInterface {
  id: number;
  nameElementProgram: string;
  ratio: number;
  elementsOfTechnicalProgramId: number;
}

export interface ReferencesBtnsInterface {
  elementsOfTechnicalPrograms: ReferencesBtnsArrayInterface[];
  elementsPrograms: ReferencesBtnsElementsProgramsInterface[];
  isLoading: boolean;
  error: string;
}

const initialState: ReferencesBtnsInterface = {
  //   arrayBodyDuo: [
  //     {
  //       id: 1,
  //       text: ["El1a", "3,0"],
  //     },
  //     {
  //       id: 2,
  //       text: ["El1b", "2,5"],
  //     },
  //     {
  //       id: 3,
  //       text: ["El2a", "2,8"],
  //     },
  //     {
  //       id: 4,
  //       text: ["El2b", "2,4"],
  //     },
  //     {
  //       id: 5,
  //       text: ["El3a", "2,9"],
  //     },
  //     {
  //       id: 6,
  //       text: ["El3b", "2,6"],
  //     },
  //     {
  //       id: 7,
  //       text: ["El4a", "3,3"],
  //     },
  //     {
  //       id: 8,
  //       text: ["El4b", "2,7"],
  //     },
  //     {
  //       id: 9,
  //       text: ["El5a", "2,3"],
  //     },
  //     {
  //       id: 10,
  //       text: ["El5b", "2,1"],
  //     },
  //   ],
  elementsOfTechnicalPrograms: [],
  elementsPrograms: [],
  isLoading: false,
  error: "",
};

export const elementsOfTechnicalProgramsThunk = createAsyncThunk(
  "referencesBtns/referencesBtnsThunk",
  async (groupId) => {
    const elementsOfTechnicalPrograms = (
      await elementsOfTechnicalProgramsAPI.getElementsOfTechnicalPrograms(groupId)
    ).data;
    return elementsOfTechnicalPrograms;
  }
);

export const elementsProgramThunk = createAsyncThunk(
  "referencesBtns/elementsProgramThunk",
  async (elements) => {
    const elementsProgramThunk = (
      await elementsProgramAPI.getElementProgram(elements)
    ).data;
    return elementsProgramThunk;
  }
);

export const referencesBtnsSlice = createSlice({
  name: "referencesBtns",
  initialState,
  reducers: {
    // changeBodyDuo(state, action: PayloadAction<[]>) {
    //   state.arrayBodyDuo = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(elementsOfTechnicalProgramsThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(elementsOfTechnicalProgramsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.elementsOfTechnicalPrograms.length = 0;
      state.elementsOfTechnicalPrograms = action.payload;
    });
    builder.addCase(elementsProgramThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(elementsProgramThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.elementsPrograms.length = 0;
      state.elementsPrograms = action.payload;
    });
  },
});

export const {
  // changeBodyDuo
} = referencesBtnsSlice.actions;

export default referencesBtnsSlice.reducer;
