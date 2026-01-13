import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { tournamentNameAPI } from "../../api/axios";

const initialState = {
  tournament: {
    tournamentName: "",
    dateAndPlaceOfRealization: "",
  },
  isLoading: false,
  error: "",
};

export const tournamentNameThunk = createAsyncThunk(
  "tournamentName/tournamentNameThunk",
  async () => {
    const tournamentResp = (await tournamentNameAPI.getTournamentName()).data;
    return tournamentResp;
  }
);

export const tournamentNamePutThunk = createAsyncThunk(
  "tournamentName/tournamentNamePutThunk",
  async (tournament) => {    
    const tournamentResp = (
      await tournamentNameAPI.putTournamentName(tournament)
    ).data;
    return tournamentResp;
  }
);

export const tournamentNameSlice = createSlice({
  name: "tournament",
  initialState,
  reducers: {
    changeTournamentName(state, action: PayloadAction<string>) {
      state.tournament.tournamentName = action.payload;
    },
    changeTournamentDate(state, action: PayloadAction<string>) {
      state.tournament.dateAndPlaceOfRealization = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(tournamentNameThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(tournamentNameThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      const tournament = action.payload;
      state.tournament.tournamentName = tournament.name;
      state.tournament.dateAndPlaceOfRealization = tournament.date;
    });
  },
});

export const { changeTournamentName, changeTournamentDate } =
  tournamentNameSlice.actions;

export default tournamentNameSlice.reducer;
