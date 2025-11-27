import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  tournament: {
    tournamentName: "Соревнования муниципального образования город Краснодар по синхронному плаванию «Классификационный турнир»",
    dateAndPlaceOfRealization: "28-30 ноября 2025 г., Краснодарский край, г. Краснодар",
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
