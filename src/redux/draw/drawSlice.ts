import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { drawApi } from "../../api/axios";

interface DrawInterface {
  id: Number;
  nameId: Number;
  drawOne: Array<Number>;
  drawTwo: Array<Number>;
  drawThree: Array<Number>;
  sportsmansArray: Array<Object>;
}

interface DrawsInterface {
  draws: DrawInterface;
  isLoading: boolean;
  isLoadingActive: boolean;
  error: string;
}

export const drawSliceSaveThunk = createAsyncThunk(
  "draw/drawSliceSaveThunk",
  async (draw) => {
    const drawSave = (await drawApi.saveDraw(draw)).data;
    return drawSave;
  }
);

export const drawSliceGetThunk = createAsyncThunk(
  "draw/drawSliceGetThunk",
  async (drawOption) => {
    const draw = (await drawApi.getDraw(drawOption)).data;
    return draw;
  }
);

export const activeDrawThunk = createAsyncThunk(
  "draw/activeDrawThunk",
  async (draw) => {
    const drawData = (await drawApi.activeDraw(draw)).data;
    return drawData;
  }
);

export const resetDrawThunk = createAsyncThunk(
  "draw/resetDrawThunk",
  async (draw) => {
    const drawData = (await drawApi.resetDraw(draw)).data;
    return drawData;
  }
);

export const changeManuallyDrawThunk = createAsyncThunk(
  "draw/changeManuallyDrawThunk",
  async (draw) => {
    const drawData = (await drawApi.changeManuallyDraw(draw)).data;
    return drawData;
  }
);

const initialState: DrawsInterface = {
  draws: {
    id: 0,
    nameId: 0,
    drawOne: [],
    drawTwo: [],
    drawThree: [],
    sportsmansArray: [],
  },
  isLoading: false,
  isLoadingActive: false,
  error: "",
};

export const drawSlice = createSlice({
  name: "draw",
  initialState,
  reducers: {
    changeManuallyDraw(
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
    builder.addCase(drawSliceSaveThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(drawSliceSaveThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.draws = action.payload;
    });
    builder.addCase(drawSliceGetThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(drawSliceGetThunk.fulfilled, (state, action) => {
      state.draws = action.payload;
      state.isLoading = false;
    });
    builder.addCase(activeDrawThunk.pending, (state, action) => {
      state.isLoadingActive = true;
    });
    builder.addCase(activeDrawThunk.fulfilled, (state, action) => {
      state.draws = action.payload;
      state.isLoadingActive = false;
    });
    builder.addCase(resetDrawThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(resetDrawThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.draws = action.payload;
    });
    builder.addCase(changeManuallyDrawThunk.pending, (state, action) => {
      // state.isLoading = true;
    });
    builder.addCase(changeManuallyDrawThunk.fulfilled, (state, action) => {
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

export const { changeManuallyDraw } = drawSlice.actions;

export default drawSlice.reducer;
