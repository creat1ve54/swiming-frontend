import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { figuresAPI } from "../../api/axios";

export interface FiguresInterface {
  id: number;
  kod: string;
  name: string;
  nameEng: string;
  ratio: number;
}

export interface HeaderFigureInterface {
  id: number;
  title: string;
}

export interface FiguresInitialInterface {
  arrayHeaderFigure: HeaderFigureInterface[];
  figures: FiguresInterface[];
  isLoading: Boolean;
}

const initialState: FiguresInitialInterface = {
  arrayHeaderFigure: [
    {
      id: 1,
      title: "Код",
    },
    {
      id: 2,
      title: "Краткое наименование",
    },
    {
      id: 3,
      title: "Анг Наименование",
    },
    {
      id: 4,
      title: "Коэффицент",
    },
  ],
  figures: [],
  isLoading: false,
};

export const figuresThunk = createAsyncThunk(
  "figure/figuresThunk",
  async () => {
    const figures = (await figuresAPI.getFigures()).data;
    return figures;
  }
);

export const figureSlice = createSlice({
  name: "figure",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(figuresThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(figuresThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.figures.length = 0;
      state.figures = action.payload;
    });
  },
});

export const {} = figureSlice.actions;

export default figureSlice.reducer;
