import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { dutiesOfJudgesAPI } from "../../api/axios";

const initialState = {
  arrayHeaderReferee: [
    {
      id: 1,
      title: "Наименование",
    },
    {
      id: 2,
      title: "Краткое наименование",
    },
  ],
  arrayBodyReferee: [
    {
      id: 1,
      text: ["Рефери", "Ref"],
    },
    {
      id: 2,
      text: ["Ассистент рефери", "AR"],
    },
    {
      id: 3,
      text: ["Наблюдатель", "Obs"],
    },
    {
      id: 4,
      text: ["Главный секретарь", "CR"],
    },
    {
      id: 5,
      text: ["Секретарь", "хроном."],
    },
    {
      id: 6,
      text: ["Заместитель главного секретаря", "тех.ас."],
    },
    {
      id: 7,
      text: ["Главный судья", "гл.судья"],
    },
    {
      id: 8,
      text: ["Старший судья", "ст.судья."],
    },
  ],
  referees: [],
  isLoading: false,
};

export const refereesThunk = createAsyncThunk("figure/figureThunk", async () => {
  const referees = (await dutiesOfJudgesAPI.getDutiesOfJudges()).data;
  return referees;
});

export const referySlice = createSlice({
  name: "refery",
  initialState,
  reducers: {
    // changeBodyReferee(state, action: PayloadAction<[]>) {
    //   state.arrayBodyReferee = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(refereesThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(refereesThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.referees.length = 0;
      state.referees = action.payload;
    });
  },
});

export const {
  // changeBodyReferee
} = referySlice.actions;

export default referySlice.reducer;
