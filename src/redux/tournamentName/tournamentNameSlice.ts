import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  tournament: {
    tournamentName: "КРАЕВЫЕ СОРЕВНОВАНИЯ 'НОВОЕ ПОКОЛЕНИЕ' ПАМЯТИ ЗВЯГИНЦЕВЫХ ТАТЬЯНЫ МИХАЙЛОВНЫ И НИКОЛАЯ НИКОЛАЕВИЧА",
    dateAndPlaceOfRealization: "1-5 октября 2025 г., Краснодарский край, г. Краснодар",
  },
};

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
});

export const { changeTournamentName, changeTournamentDate } =
  tournamentNameSlice.actions;

export default tournamentNameSlice.reducer;
