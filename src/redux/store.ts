import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import teamsSlice from "./teams/teamsSlice";
import referencesBtnsSlice from "./referencesBtns/referencesBtns";

import tournamentNameSlice from "./tournamentName/tournamentNameSlice";
import refereesAndCoachesSlice from "./refereesAndCoaches/refereesAndCoachesSlice";
import refereeSlice from "./references/refereesSlice";
import figureSlice from "./references/figureSlice";
import ageGroupSlice from "./references/ageGroupSlice";
import mandatoryProgramRefereeSlice from "./mandatoryProgramReferee/mandatoryProgramRefereeSlice";
import mandatoryAnyProgramRefereeSlice from "./mandatoryAnyProgramReferee/mandatoryAnyProgramRefereeSlice";
import soloSportsmensSlice from "./soloSportsmens/soloSportsmensSlice";
import drawSlice from "./draw/drawSlice";
import ageSubgroupSlice from "./references/ageSubgroupSlice";
import sportCategorySlice from "./references/sportCategorySlice";
import subgroupFiguresSlice from "./subgroupFigures/subgroupFiguresSlice";
import ratingsSlice from "./ratings/ratingsSlice";
import drawAnyProgramSlice from "./drawAnyProgram/drawAnyProgramSlice";
import anyTeamProgramSlice from "./anyTeamProgram/anyTeamProgramSlice";
import ratingsAnyProgramSlice from "./ratingsAnyProgram/ratingsAnyProgramSlice";

export const store = configureStore({
  reducer: {
    teamsSlice,
    referencesBtnsSlice,
    refereeSlice,
    figureSlice,
    ageGroupSlice,
    ageSubgroupSlice,
    tournamentNameSlice,
    refereesAndCoachesSlice,
    mandatoryProgramRefereeSlice,
    soloSportsmensSlice,
    drawSlice,
    sportCategorySlice,
    subgroupFiguresSlice,
    ratingsSlice,
    mandatoryAnyProgramRefereeSlice,
    drawAnyProgramSlice,
    anyTeamProgramSlice,
    ratingsAnyProgramSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
