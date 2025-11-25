import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { drawAnyProgramApi } from "../../api/axios";

interface DrawAnyProgramInterface {
  id: Number;
  nameId: Number;
  drawOne: Array<Number>;
  drawTwo: Array<Number>;
  drawThree: Array<Number>;
  teamsArray: Array<Object>;
}

interface DrawsAnyProgramInterface {
  draws: DrawAnyProgramInterface;
  isLoading: boolean;
  isLoadingActive: boolean;
  error: string;
}

export const drawAnyProgramSliceSaveThunk = createAsyncThunk(
  "drawAnyProgramSlice/drawSliceSaveThunk",
  async (draw) => {
    const drawSave = (await drawAnyProgramApi.saveDraw(draw)).data;
    return drawSave;
  }
);

export const drawAnyProgramSliceGetThunk = createAsyncThunk(
  "drawAnyProgramSlice/drawSliceGetThunk",
  async (drawOption) => {

    const draw = (await drawAnyProgramApi.getDraw(drawOption)).data;
    return draw;
  }
);

export const activeDrawAnyProgramThunk = createAsyncThunk(
  "drawAnyProgramSlice/activeDrawThunk",
  async (draw) => {
    const drawData = (await drawAnyProgramApi.activeDraw(draw)).data;
    return drawData;
  }
);

export const resetDrawAnyProgramThunk = createAsyncThunk(
  "drawAnyProgramSlice/resetDrawThunk",
  async (draw) => {
    const drawData = (await drawAnyProgramApi.resetDraw(draw)).data;
    return drawData;
  }
);

export const changeManuallyDrawAnyProgramThunk = createAsyncThunk(
  "drawAnyProgramSlice/changeManuallyDrawThunk",
  async (draw) => {
    const drawData = (await drawAnyProgramApi.changeManuallyDraw(draw)).data;
    return drawData;
  }
);

const initialState: DrawsAnyProgramInterface = {
  draws: {
    id: 0,
    nameId: 0,
    drawOne: [],
    drawTwo: [],
    drawThree: [],
    teamsArray: [],
  },
  isLoading: false,
  isLoadingActive: false,
  error: "",
};

export const drawAnyProgramSlice = createSlice({
  name: "drawAnyProgramSlice",
  initialState,
  reducers: {
    changeManuallyDrawAnyProgram(
      state,
      action: PayloadAction<{
        drawChange: "drawOne" | "drawTwo" | "drawThree";
        drawPositionChange: number;
        drawValueChange: number;
      }>
    ) {
      state.draws[`${action.payload.drawChange}`].forEach((el, index) => {
        if (index === action.payload.drawPositionChange) {
          el = action.payload.drawValueChange;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(drawAnyProgramSliceSaveThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(drawAnyProgramSliceSaveThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.draws = action.payload;
    });
    builder.addCase(drawAnyProgramSliceGetThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(drawAnyProgramSliceGetThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.draws = action.payload;
    });
    builder.addCase(activeDrawAnyProgramThunk.pending, (state, action) => {
      state.isLoadingActive = true;
    });
    builder.addCase(activeDrawAnyProgramThunk.fulfilled, (state, action) => {
      state.isLoadingActive = false;
      state.draws = action.payload;
    });
    builder.addCase(resetDrawAnyProgramThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(resetDrawAnyProgramThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.draws = action.payload;
    });
    builder.addCase(changeManuallyDrawAnyProgramThunk.pending, (state, action) => {
      // state.isLoading = true;
    });
    builder.addCase(changeManuallyDrawAnyProgramThunk.fulfilled, (state, action) => {
      // state.isLoading = false;
      state.draws = action.payload.draw;
      if (action.payload.message) {
        state.error = action.payload?.message;
      } else {
        state.error = "";
      }
    });
  },
});

export const { changeManuallyDrawAnyProgram } = drawAnyProgramSlice.actions;

export default drawAnyProgramSlice.reducer;
