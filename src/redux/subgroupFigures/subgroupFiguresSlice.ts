import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { subgroupFiguresAPI } from "../../api/axios";
import { FiguresInterface } from "../references/figureSlice";

export interface SubgroupFiguresInterface {
  id: number;
  subgroupId: number;
  figureName: string;
  brigadeNumber: number;
  figure: FiguresInterface;
  figureId: number;
}

export interface SubgroupFiguresInitialInterface {
  subgroupFigures: SubgroupFiguresInterface[];
  subgroupFiguresResult: number;
  isLoading: boolean;
  error: string;
}

const initialState: SubgroupFiguresInitialInterface = {
  subgroupFigures: [],
  subgroupFiguresResult: 0,
  isLoading: false,
  error: "",
};

export const saveSubgroupFiguresThunk = createAsyncThunk(
  "subgroupFigures/saveSubgroupFiguresThunk",
  async (subgroupFigureNew: SubgroupFiguresInterface) => {
    const subgroupFigures: SubgroupFiguresInterface[] = (
      await subgroupFiguresAPI.saveSubgroupFigures(subgroupFigureNew)
    ).data;
    return subgroupFigures;
  }
);

export const getSubgroupFiguresThunk = createAsyncThunk(
  "subgroupFigures/getSubgroupFiguresThunk",
  async (nameId: number) => {
    const subgroupFigures: SubgroupFiguresInterface[] = (
      await subgroupFiguresAPI.getSubgroupFigures(nameId)
    ).data;
    return subgroupFigures;
  }
);

export const subgroupFiguresSlice = createSlice({
  name: "subgroupFigures",
  initialState,
  reducers: {
    brigadeChange(state, action) {
      state.subgroupFigures.forEach((figure) => {
        if (figure.id == action.payload.id) {
          if(action.payload.value > 4) {
            figure.brigadeNumber = 4;
          } else {
            figure.brigadeNumber = action.payload.value;
          }
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSubgroupFiguresThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getSubgroupFiguresThunk.fulfilled, (state, action: any) => {
      state.isLoading = false;
      state.subgroupFigures.length = 0;
      state.subgroupFigures = action.payload.subgroupFigures;
      state.subgroupFiguresResult = action.payload.resultRatio;
    });
    builder.addCase(saveSubgroupFiguresThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      saveSubgroupFiguresThunk.fulfilled,
      (state, action: any) => {
        state.isLoading = false;
        state.subgroupFigures.length = 0;
        state.subgroupFigures = action.payload.subgroupFigures;
        state.subgroupFiguresResult = action.payload.resultRatio;
      }
    );
  },
});

export const {brigadeChange} = subgroupFiguresSlice.actions;

export default subgroupFiguresSlice.reducer;
