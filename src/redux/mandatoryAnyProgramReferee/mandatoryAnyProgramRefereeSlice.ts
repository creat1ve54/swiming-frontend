import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { mandatoryAnyProgramRefereeApi } from "../../api/axios";

const initialState = {
  composition: [],
  listReferee: [],
  mainBrigade: [],
  mainAnyProgram: [],
  isLoading: false,
};

export const compositionsThunk = createAsyncThunk(
  "mandatoryAnyProgramReferee/compositionsThunk",
  async () => {
    const composition = (await mandatoryAnyProgramRefereeApi.getComposition()).data;
    return composition;
  }
);

export const listRefereeThunk = createAsyncThunk(
  "mandatoryAnyProgramRefereeApi/listRefereeThunk",
  async () => {
    const listReferee = (await mandatoryAnyProgramRefereeApi.getListReferee())
      .data;
    return listReferee;
  }
);

export const listRefereeCreateThunk = createAsyncThunk(
  "mandatoryAnyProgramRefereeApi/listRefereeCreateThunk",
  async (refereeInfo) => {
    const listReferee = (
      await mandatoryAnyProgramRefereeApi.createReferee(refereeInfo)
    ).data;
    return listReferee;
  }
);

export const listRefereeUpdatePostThunk = createAsyncThunk(
  "mandatoryAnyProgramRefereeApi/listRefereeUpdatePostThunk",
  async (postInfo) => {
    const listReferee = (await mandatoryAnyProgramRefereeApi.updatePost(postInfo))
      .data;
    return listReferee;
  }
);

export const listRefereeUpdateRefereeThunk = createAsyncThunk(
  "mandatoryAnyProgramRefereeApi/listRefereeUpdateRefereeThunk",
  async (refereeInfo) => {
    const listReferee = (
      await mandatoryAnyProgramRefereeApi.updateReferee(refereeInfo)
    ).data;
    return listReferee;
  }
);

export const updateRefereesAnyProgramBrigadesThunk = createAsyncThunk(
  "mandatoryAnyProgramRefereeApi/updateRefereesAnyProgramBrigadesThunk",
  async (refereesBrigadesInfo) => {
    const listReferee = (
      await mandatoryAnyProgramRefereeApi.updateRefereesAnyProgramBrigades(
        refereesBrigadesInfo
      )
    ).data;
    return listReferee;
  }
);

export const listRefereeDeleteRefereeThunk = createAsyncThunk(
  "mandatoryAnyProgramRefereeApi/listRefereeDeleteRefereeThunk",
  async (id) => {
    const listReferee = (await mandatoryAnyProgramRefereeApi.deleteReferee(id))
      .data;
    return listReferee;
  }
);

export const mainBrigadeThunk = createAsyncThunk(
  "mandatoryAnyProgramRefereeApi/mainBrigadeThunk",
  async () => {
    const mainBrigade = (await mandatoryAnyProgramRefereeApi.getMainBrigade())
      .data;

    return mainBrigade;
  }
);

export const mainAnyProgramThunk = createAsyncThunk(
  "mandatoryAnyProgramRefereeApi/mainAnyProgramThunk",
  async () => {    
    const mainAnyProgram = (await mandatoryAnyProgramRefereeApi.getMainAnyProgram())
      .data;     

    return mainAnyProgram;
  }
);

export const mainAnyProgramDocumentThunk = createAsyncThunk(
  "mandatoryAnyProgramRefereeApi/mainAnyProgramDocumentThunk",
  async () => {
    const mainAnyProgram = (await mandatoryAnyProgramRefereeApi.getMainAnyProgramDocument())
      .data;
    return mainAnyProgram;
  }
);

export const mandatoryAnyProgramRefereeSlice = createSlice({
  name: "mandatoryAnyProgramReferee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(compositionsThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(compositionsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.composition.length = 0;
      state.composition = action.payload;
    });
    builder.addCase(listRefereeThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(listRefereeThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listReferee.length = 0;
      state.listReferee = action.payload;
    });
    builder.addCase(listRefereeCreateThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(listRefereeCreateThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listReferee.length = 0;
      state.listReferee = action.payload;
    });
    builder.addCase(listRefereeDeleteRefereeThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      listRefereeDeleteRefereeThunk.fulfilled,
      (state, action) => {
        state.isLoading = false;
        // state.listReferee.length = 0;
        // state.listReferee = action.payload;
      }
    );
    builder.addCase(mainBrigadeThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(mainBrigadeThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.mainBrigade.length = 0;
      state.mainBrigade = action.payload;
    });
    builder.addCase(mainAnyProgramThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(mainAnyProgramThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.mainAnyProgram.length = 0;
      state.mainAnyProgram = action.payload;
    });
    builder.addCase(mainAnyProgramDocumentThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(mainAnyProgramDocumentThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.mainAnyProgram.length = 0;
      state.mainAnyProgram = action.payload;
    });
    builder.addCase(listRefereeUpdatePostThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(listRefereeUpdatePostThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log(action);

      // state.mainProgram.length = 0;
      // state.mainProgram = action.payload;
    });
    builder.addCase(listRefereeUpdateRefereeThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      listRefereeUpdateRefereeThunk.fulfilled,
      (state, action) => {
        state.isLoading = false;
        // state.mainProgram.length = 0;
        // state.mainProgram = action.payload;
      }
    );
    builder.addCase(updateRefereesAnyProgramBrigadesThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateRefereesAnyProgramBrigadesThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.mainProgram.length = 0;
      // state.mainProgram = action.payload;
    });
  },
});

export const {
  // changePost,
  // changeMandatoryProgramReferee
} = mandatoryAnyProgramRefereeSlice.actions;

export default mandatoryAnyProgramRefereeSlice.reducer;
