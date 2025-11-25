import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { randomUUID } from "crypto";
import { sportsmansAPI, teamsAPI } from "../../api/axios";

export interface SportsmansInterface {
  id: number;
  surname: string;
  firstname: string;
  surnameAndFirstname: string;
  years: string;
  sportCategory: string;
  ageGroup: string;
  ageSubgroup: string;
  requiredProgramm: boolean;
  outOfCompetition: boolean;
  mandatoryProgramSolo: boolean;
  mandatoryProgramDuo: boolean;
  mandatoryProgramDuoR: boolean;
  mandatoryProgramDuoMixed: boolean;
  mandatoryProgramDuoMixedR: boolean;
  mandatoryProgramDuoGroup: boolean;
  mandatoryProgramDuoGroupR: boolean;
  mandatoryProgramCombi: boolean;
  mandatoryProgramCombiR: boolean;
  coach: string;
  teamId: number;
}

export interface SportsmanCreateInterface {
  surname: string;
  firstname: string;
  surnameAndFirstname: string;
  years: string;
  sportCategory: string;
  ageGroup: Object;
  ageSubgroup: Object;
  requiredProgramm: boolean;
  outOfCompetition: boolean;
  mandatoryProgramSolo: boolean;
  mandatoryProgramDuo: boolean;
  mandatoryProgramDuoR: boolean;
  mandatoryProgramDuoMixed: boolean;
  mandatoryProgramDuoMixedR: boolean;
  mandatoryProgramDuoGroup: boolean;
  mandatoryProgramDuoGroupR: boolean;
  mandatoryProgramCombi: boolean;
  mandatoryProgramCombiR: boolean;
  coach: string;
  teamId: number;
}

interface TeamInterface {
  id: number;
  nameTeam: string;
}

interface TeamsInterface {
  teams: TeamInterface[];
  // sportsmans: SportsmansInterface[];
  sportsmans: [];
  isLoading: boolean;
  error: string;
}

const initialState: TeamsInterface = {
  teams: [],
  sportsmans: [],
  isLoading: false,
  error: "",
};

export const teamsSliceThunk = createAsyncThunk(
  "teamsAndSportmans/teamsSliceThunk",
  async () => {
    const teams = (await teamsAPI.getTeams()).data;
    return teams;
  }
);

export const sportsmansSliceThunk = createAsyncThunk(
  "teamsAndSportmans/sportsmansSliceThunk",
  async () => {
    const sportsmans = (await sportsmansAPI.getSportsmans()).data;
    return sportsmans;
  }
);

export const teamSlicePutThunk = createAsyncThunk(
  "teamsAndSportmans/teamsSlicePutThunk",
  async (team, { dispatch }) => {
    const teams = (await teamsAPI.putTeams(team)).data;
    // dispatch(teamsSliceThunk());
    return teams;
  }
);

export const sportsmansSlicePutThunk = createAsyncThunk(
  "teamsAndSportmans/sportsmansSlicePutThunk",
  async (sportsmansAndTeam, { dispatch }) => {
    const sportsmansNew = (await sportsmansAPI.putSportsmans(sportsmansAndTeam))
      .data;
    return sportsmansNew;
  }
);

export const sportsmanSliceCreateThunk = createAsyncThunk(
  "teamsAndSportmans/sportsmanSliceCreateThunk",
  async (sportsman) => {
    const sportsmansNew = (await sportsmansAPI.createSportsmans(sportsman))
      .data;
    return sportsmansNew;
  }
);

export const teamSliceCreateThunk = createAsyncThunk(
  "teamsAndSportmans/teamSliceCreateThunk",
  async (team) => {
    const teamNew = (await teamsAPI.createTeams(team)).data;
    return teamNew;
  }
);

export const sportsmanSliceDeleteThunk = createAsyncThunk(
  "teamsAndSportmans/sportsmanSliceDeleteThunk",
  async (id) => {
    const sportsmansNew = (await sportsmansAPI.deleteSportsman(id)).data;
    return sportsmansNew;
  }
);

export const teamSliceDeleteThunk = createAsyncThunk(
  "teamsAndSportmans/teamSliceDeleteThunk",
  async (id) => {
    const team = (await teamsAPI.deleteTeam(id)).data;
    return team;
  }
);

export const teamsAndSportmansSlice = createSlice({
  name: "teamsAndSportmans",
  initialState,
  reducers: {
    teamsChange(state, action: PayloadAction<TeamInterface>) {
      state.teams.forEach((team) => {
        if (team.id == action.payload.id) {
          team.nameTeam = action.payload.nameTeam;
        }
      });
    },
    surnameChange(state, action: PayloadAction<{ id: number; text: any }>) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.surname = action.payload.text;
        }
      });
    },
    firstnameChange(state, action: PayloadAction<{ id: number; text: any }>) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.firstname = action.payload.text;
        }
      });
    },
    yearsChange(state, action: PayloadAction<{ id: number; text: any }>) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.years = action.payload.text;
        }
      });
    },
    sportCategoryChange(
      state,
      action: PayloadAction<{ id: number; text: any }>
    ) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.sportCategoryId = action.payload.text.id;
          sportsman.sportCategory = action.payload.text;
        }
      });
    },
    ageGroupChange(state, action: PayloadAction<{ id: number; text: any }>) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.ageGroupId = action.payload.text.id;
          sportsman.ageGroup = action.payload.text;
        }
      });
    },
    ageSubgroupChange(state, action: PayloadAction<{ id: number; text: any }>) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.ageSubgroupId = action.payload.text.id;
          sportsman.drawId = action.payload.text.id;
          sportsman.ageSubgroup = action.payload.text;
        }
      });
    },
    requiredProgrammChange(
      state,
      action: PayloadAction<{ id: number; text: any }>
    ) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.requiredProgramm = action.payload.text;
        }
      });
    },
    outOfCompetitionChange(
      state,
      action: PayloadAction<{ id: number; text: any }>
    ) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.outOfCompetition = action.payload.text;
        }
      });
    },

    mandatoryProgramSoloChange(
      state,
      action: PayloadAction<{ id: number; text: any }>
    ) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.mandatoryProgramSolo = action.payload.text;
        }
      });
    },
    mandatoryProgramDuoChange(
      state,
      action: PayloadAction<{ id: number; text: any }>
    ) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.mandatoryProgramDuo = action.payload.text;
        }
      });
    },
    mandatoryProgramDuoRChange(
      state,
      action: PayloadAction<{ id: number; text: any }>
    ) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.mandatoryProgramDuoR = action.payload.text;
        }
      });
    },
    mandatoryProgramDuoMixedChange(
      state,
      action: PayloadAction<{ id: number; text: any }>
    ) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.mandatoryProgramDuoMixed = action.payload.text;
        }
      });
    },
    mandatoryProgramDuoMixedRChange(
      state,
      action: PayloadAction<{ id: number; text: any }>
    ) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.mandatoryProgramDuoMixedR = action.payload.text;
        }
      });
    },
    mandatoryProgramGroupChange(
      state,
      action: PayloadAction<{ id: number; text: any }>
    ) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.mandatoryProgramGroup = action.payload.text;
        }
      });
    },
    mandatoryProgramGroupRChange(
      state,
      action: PayloadAction<{ id: number; text: any }>
    ) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.mandatoryProgramGroupR = action.payload.text;
        }
      });
    },
    mandatoryProgramCombiChange(
      state,
      action: PayloadAction<{ id: number; text: any }>
    ) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.mandatoryProgramCombi = action.payload.text;
        }
      });
    },
    mandatoryProgramCombiRChange(
      state,
      action: PayloadAction<{ id: number; text: any }>
    ) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.mandatoryProgramCombiR = action.payload.text;
        }
      });
    },
    coachChange(state, action: PayloadAction<{ id: number; text: any }>) {
      state.sportsmans.forEach((sportsman: any) => {
        if (sportsman.id == action.payload.id) {
          sportsman.refereeId = action.payload.text.id;
          sportsman.referee = action.payload.text;
        }
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(teamsSliceThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(teamsSliceThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      const { teams } = action.payload;
      state.teams.length = 0;
      state.teams = teams;
    });
    builder.addCase(sportsmansSliceThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(sportsmansSliceThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.sportsmans.length = 0;
      state.sportsmans = action.payload;
    });
    builder.addCase(teamSlicePutThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(teamSlicePutThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.teams.forEach((team) => {
        if (team.id == action.payload.id) {
          team.nameTeam = action.payload.nameTeam;
        }
      });
    });
    builder.addCase(sportsmansSlicePutThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(sportsmansSlicePutThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.sportsmans.length = 0;
      // state.sportsmans = action.payload.sportsmans;
    });
    builder.addCase(sportsmanSliceCreateThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      sportsmanSliceCreateThunk.fulfilled,
      (state: any, action: any) => {
        state.isLoading = false;
        state.sportsmans.push(action.payload);
      }
    );
    builder.addCase(sportsmanSliceDeleteThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      sportsmanSliceDeleteThunk.fulfilled,
      (state: any, action) => {
        state.isLoading = false;
        state.sportsmans = state.sportsmans.filter((sportsman: any) => {
          return sportsman.id !== action.payload;
        });
      }
    );
    builder.addCase(teamSliceCreateThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(teamSliceCreateThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.teams.push(action.payload);

      // state.sportsmans = state.sportsmans.filter((sportsman) => {
      //   return sportsman.id !== action.payload;
      // });
    });
    builder.addCase(teamSliceDeleteThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(teamSliceDeleteThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.teams = state.teams.filter((team) => {
        return team.id !== action.payload;
      });
    });
  },
});

export const {
  teamsChange,
  surnameChange,
  firstnameChange,
  yearsChange,
  sportCategoryChange,
  ageGroupChange,
  ageSubgroupChange,
  coachChange,
  outOfCompetitionChange,
  mandatoryProgramSoloChange,
  mandatoryProgramDuoChange,
  mandatoryProgramDuoRChange,
  mandatoryProgramDuoMixedChange,
  mandatoryProgramDuoMixedRChange,
  mandatoryProgramGroupChange,
  mandatoryProgramGroupRChange,
  mandatoryProgramCombiChange,
  mandatoryProgramCombiRChange,
  requiredProgrammChange,
} = teamsAndSportmansSlice.actions;

export default teamsAndSportmansSlice.reducer;
