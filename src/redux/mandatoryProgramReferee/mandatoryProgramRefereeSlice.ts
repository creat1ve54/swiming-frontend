import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { mandatoryProgramRefereeApi } from "../../api/axios";

const initialState = {
  brigades: [],
  listReferee: [],
  mainBrigade: [],
  mainProgram: [],
  isLoading: false,
};

export const brigadesThunk = createAsyncThunk(
  "mandatoryProgramReferee/brigadesThunk",
  async () => {
    const brigades = (await mandatoryProgramRefereeApi.getBrigades()).data;
    return brigades;
  }
);

export const listRefereeThunk = createAsyncThunk(
  "mandatoryProgramReferee/listRefereeThunk",
  async () => {
    const listReferee = (await mandatoryProgramRefereeApi.getListReferee())
      .data;
    return listReferee;
  }
);

export const listRefereeCreateThunk = createAsyncThunk(
  "mandatoryProgramReferee/listRefereeCreateThunk",
  async (refereeInfo) => {
    const listReferee = (
      await mandatoryProgramRefereeApi.createReferee(refereeInfo)
    ).data;
    return listReferee;
  }
);

export const listRefereeUpdatePostThunk = createAsyncThunk(
  "mandatoryProgramReferee/listRefereeUpdatePostThunk",
  async (postInfo) => {
    const listReferee = (await mandatoryProgramRefereeApi.updatePost(postInfo))
      .data;
    return listReferee;
  }
);

export const listRefereeUpdateRefereeThunk = createAsyncThunk(
  "mandatoryProgramReferee/listRefereeUpdateRefereeThunk",
  async (refereeInfo) => {
    const listReferee = (
      await mandatoryProgramRefereeApi.updateReferee(refereeInfo)
    ).data;
    return listReferee;
  }
);

export const updateRefereesBrigadesThunk = createAsyncThunk(
  "mandatoryProgramReferee/updateRefereesBrigadesThunk",
  async (refereesBrigadesInfo) => {
    const listReferee = (
      await mandatoryProgramRefereeApi.updateRefereesBrigades(
        refereesBrigadesInfo
      )
    ).data;
    return listReferee;
  }
);

export const listRefereeDeleteRefereeThunk = createAsyncThunk(
  "mandatoryProgramReferee/listRefereeDeleteRefereeThunk",
  async (id) => {
    const listReferee = (await mandatoryProgramRefereeApi.deleteReferee(id))
      .data;
    return listReferee;
  }
);

export const mainBrigadeThunk = createAsyncThunk(
  "mandatoryProgramReferee/mainBrigadeThunk",
  async () => {
    const mainBrigade = (await mandatoryProgramRefereeApi.getMainBrigade())
      .data;

    return mainBrigade;
  }
);

export const mainProgramThunk = createAsyncThunk(
  "mandatoryProgramReferee/mainProgramThunk",
  async () => {
    const mainProgram = (await mandatoryProgramRefereeApi.getMainProgram())
      .data;

    return mainProgram;
  }
);

export const mainProgramDocumentThunk = createAsyncThunk(
  "mandatoryProgramReferee/mainProgramDocumentThunk",
  async () => {
    const mainProgram = (await mandatoryProgramRefereeApi.getMainProgramDocument())
      .data;
    return mainProgram;
  }
);

export const mandatoryProgramRefereeSlice = createSlice({
  name: "mandatoryProgramReferee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(brigadesThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(brigadesThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.brigades.length = 0;
      state.brigades = action.payload;
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
    builder.addCase(mainProgramThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(mainProgramThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.mainProgram.length = 0;
      state.mainProgram = action.payload;
    });
    builder.addCase(mainProgramDocumentThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(mainProgramDocumentThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.mainProgram.length = 0;
      state.mainProgram = action.payload;
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
    builder.addCase(updateRefereesBrigadesThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateRefereesBrigadesThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.mainProgram.length = 0;
      // state.mainProgram = action.payload;
    });
  },
});

export const {
  // changePost,
  // changeMandatoryProgramReferee
} = mandatoryProgramRefereeSlice.actions;

export default mandatoryProgramRefereeSlice.reducer;
