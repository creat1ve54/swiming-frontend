import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { anyTeamProgramAPI } from "../../api/axios";

interface AnyTeamProgramInterface {
  id: Number;
  anyTeamProgram: Number;
  anyTeamProgramYears: Number;
  teamId: Number;
  team: Object;
  sportsmansArray: Array<Object>;
}

interface TeamInterface {
  id: number;
  nameTeam: string;
}

interface AnyTeamProgramSInterface {
  anyTeamPrograms: AnyTeamProgramInterface | null;
  teams: TeamInterface[];
  isLoading: boolean;
  error: string;
}

const initialState: AnyTeamProgramSInterface = {
  anyTeamPrograms: null,
  teams: [],
  isLoading: false,
  error: "",
};

export const anyTeamProgramSliceGetThunk = createAsyncThunk(
  "anyTeamProgram/anyTeamProgramSliceGetThunk",
  async (getAnyTeamProgramTeams) => {
    const anyTeamPrograms = (
      await anyTeamProgramAPI.getAnyTeamProgram(getAnyTeamProgramTeams)
    ).data;
    return anyTeamPrograms;
  }
);

export const anyTeamProgramSliceGetTeamsThunk = createAsyncThunk(
  "anyTeamProgram/anyTeamProgramSliceGetTeamsThunk",
  async (getAnyTeamProgramTeams) => {
    const anyTeamPrograms = (
      await anyTeamProgramAPI.getAnyTeamProgramTeams(getAnyTeamProgramTeams)
    ).data;
    return anyTeamPrograms;
  }
);

export const anyTeamProgramSlicePutThunk = createAsyncThunk(
  "anyTeamProgram/anyTeamProgramSlicePutThunk",
  async (putAnyTeamProgramItem) => {
    const anyTeamPrograms = (
      await anyTeamProgramAPI.putAnyTeamProgram(putAnyTeamProgramItem)
    ).data;
    return anyTeamPrograms;
  }
);

export const anyTeamProgramSlicePutSportsmanOutOfCompetitionThunk =
  createAsyncThunk(
    "anyTeamProgram/anyTeamProgramSlicePutSportsmanOutOfCompetitionThunk",
    async (putAnyTeamProgramSportsman) => {
      const anyTeamPrograms = (
        await anyTeamProgramAPI.putAnyTeamProgramSportsmanOutOfCompetition(
          putAnyTeamProgramSportsman
        )
      ).data;
      return anyTeamPrograms;
    }
  );

export const anyTeamProgramSlicePutSportsmanThunk = createAsyncThunk(
  "anyTeamProgram/anyTeamProgramSlicePutSportsmanThunk",
  async (putAnyTeamProgramSportsman) => {
    const anyTeamPrograms = (
      await anyTeamProgramAPI.putAnyTeamProgramSportsman(
        putAnyTeamProgramSportsman
      )
    ).data;
    return anyTeamPrograms;
  }
);

export const anyTeamProgramSlicePutOutOfCompetitionThunk = createAsyncThunk(
  "anyTeamProgram/anyTeamProgramSlicePutOutOfCompetitionThunk",
  async (putAnyTeamProgramSportsman) => {
    const anyTeamPrograms = (
      await anyTeamProgramAPI.putAnyTeamProgramOutOfCompetition(
        putAnyTeamProgramSportsman
      )
    ).data;
    return anyTeamPrograms;
  }
);

export const anyTeamProgramSlicePostSportsmanThunk = createAsyncThunk(
  "anyTeamProgram/anyTeamProgramSlicePostSportsmanThunk",
  async (anyTeamProgram) => {
    const anyTeamPrograms = (
      await anyTeamProgramAPI.postAnyTeamProgramSportsman(anyTeamProgram)
    ).data;
    return anyTeamPrograms;
  }
);

export const anyTeamProgramSliceCreateThunk = createAsyncThunk(
  "anyTeamProgram/anyTeamProgramSliceCreateThunk",
  async (anyTeamProgram) => {
    const anyTeamPrograms = (
      await anyTeamProgramAPI.createAnyTeamProgram(anyTeamProgram)
    ).data;
    return anyTeamPrograms;
  }
);

export const anyTeamProgramSliceDeleteTeamThunk = createAsyncThunk(
  "anyTeamProgram/anyTeamProgramSliceDeleteTeamThunk",
  async (id) => {
    const anyTeamPrograms = (
      await anyTeamProgramAPI.deleteAnyTeamProgramTeams(id)
    ).data;
    return anyTeamPrograms;
  }
);

export const anyTeamProgramSliceDeleteSportsmanThunk = createAsyncThunk(
  "anyTeamProgram/anyTeamProgramSliceDeleteSportsmanThunk",
  async (sportsman) => {
    const anyTeamPrograms = (
      await anyTeamProgramAPI.deleteAnyTeamProgramSportsman(sportsman)
    ).data;
    return anyTeamPrograms;
  }
);

export const anyTeamProgramSlice = createSlice({
  name: "anyTeamProgram",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(anyTeamProgramSliceGetThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(anyTeamProgramSliceGetThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.anyTeamPrograms = action.payload;
    });
    builder.addCase(
      anyTeamProgramSliceGetTeamsThunk.pending,
      (state, action) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      anyTeamProgramSliceGetTeamsThunk.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.teams = action.payload;
      }
    );
    builder.addCase(anyTeamProgramSliceCreateThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      anyTeamProgramSliceCreateThunk.fulfilled,
      (state, action) => {
        state.isLoading = false;
      }
    );
    builder.addCase(anyTeamProgramSlicePutThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(anyTeamProgramSlicePutThunk.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(
      anyTeamProgramSlicePutSportsmanThunk.pending,
      (state, action) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      anyTeamProgramSlicePutSportsmanThunk.fulfilled,
      (state, action) => {
        state.isLoading = false;
      }
    );
    builder.addCase(
      anyTeamProgramSlicePutOutOfCompetitionThunk.pending,
      (state, action) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      anyTeamProgramSlicePutOutOfCompetitionThunk.fulfilled,
      (state, action) => {
        state.isLoading = false;
      }
    );
    builder.addCase(
      anyTeamProgramSlicePostSportsmanThunk.pending,
      (state, action) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      anyTeamProgramSlicePostSportsmanThunk.fulfilled,
      (state, action) => {
        state.isLoading = false;
      }
    );
    builder.addCase(
      anyTeamProgramSliceDeleteSportsmanThunk.pending,
      (state, action) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      anyTeamProgramSliceDeleteSportsmanThunk.fulfilled,
      (state, action) => {
        state.isLoading = false;
      }
    );
    builder.addCase(
      anyTeamProgramSliceDeleteTeamThunk.pending,
      (state, action) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      anyTeamProgramSliceDeleteTeamThunk.fulfilled,
      (state, action) => {
        state.isLoading = false;
      }
    );
  },
});

export const {} = anyTeamProgramSlice.actions;

export default anyTeamProgramSlice.reducer;
