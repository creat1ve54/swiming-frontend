import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../app/pages/Main";
import Error from "../app/pages/Error";
import Teams from "../app/pages/Teams";
import References from "../app/pages/References";
import MandotoryProgramList from "../app/pages/MandotoryProgramList";
import ComponentToPrint from "../app/components/ComponentToPrint";
import RefereesAndCoaches from "../app/pages/RefereesAndCoaches";
import MandatoryProgram from "../app/pages/MandatoryProgram";
import Juniors from "../app/pages/Juniors";
import TheJudgingTeam from "../app/pages/TheJudgingTeam";
import JuniorsSportmans from "../app/pages/JuniorsSportmans";
import TheDraw from "../app/pages/TheDraw";
import Ratings from "../app/pages/Ratings";
import ResutDocuments from "../app/pages/ResutDocuments";
import ArbitraryProgram from "../app/pages/ArbitraryProgram";
import AnyProgramTeam from "../app/pages/AnyProgramTeam";
import TheJudgingTeamAnyProgram from "../app/pages/TheJudgingTeamAnyProgram";
import TheDrawAnyProgram from "../app/pages/TheDrawAnyProgram";
import RatingsAnyProgaram from "../app/pages/RatingsAnyProgram";
import ResutAnyProgramDocuments from "../app/pages/ResutAnyProgramDocuments";
import CardNumbers from "../app/pages/CardNumbers";
import StartNumbers from "../app/pages/CardNumbers";
import Programms from "../app/pages/Programms";
import ReferencesInfo from "../app/pages/ReferencesInfo";
import ReferencesProgrammBtnInfo from "../app/pages/ReferencesProgrammBtnInfo";
import ReferencesProgrammInfo from "../app/pages/ReferencesProgrammInfo";
import Participants from "../app/pages/Participants";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="*" element={<Error />}></Route>
      <Route path="/teams" element={<Teams />}></Route>
      <Route path="/programms" element={<Programms />}></Route>
      <Route
        path="/programms/mandatory-program/*"
        element={<MandatoryProgram />}
      ></Route>
      <Route
        path="/programms/mandatory-program/the-judging-team/:name"
        element={<TheJudgingTeam />}
      ></Route>
      <Route
        path="/programms/mandatory-program/mandatory-program-list/:name"
        element={<MandotoryProgramList />}
      ></Route>
      <Route
        path="/programms/mandatory-program/the-draw/:name"
        element={<TheDraw />}
      ></Route>
      <Route
        path="/programms/mandatory-program/ratings/:name"
        element={<Ratings />}
      ></Route>
      <Route
        path="/programms/mandatory-program/result-documents/:name"
        element={<ResutDocuments />}
      ></Route>
      <Route
        path="/programms/arbitrary-program/*"
        element={<ArbitraryProgram />}
      ></Route>
      <Route
        path="/programms/arbitrary-program/any-team-program/:name"
        element={<AnyProgramTeam />}
      ></Route>
      <Route
        path="/programms/arbitrary-program/the-judging-team-any-program/:name"
        element={<TheJudgingTeamAnyProgram />}
      ></Route>
      <Route
        path="/programms/arbitrary-program/the-draw-any-program/:name"
        element={<TheDrawAnyProgram />}
      ></Route>
      <Route
        path="/programms/arbitrary-program/ratings-any-program/:name"
        element={<RatingsAnyProgaram />}
      ></Route>
      <Route
        path="/programms/arbitrary-program/ratings-any-program-documents/:name"
        element={<ResutAnyProgramDocuments />}
      ></Route>
      <Route path="/programms/juniors" element={<Juniors />}></Route>
      <Route path="/references" element={<References />}></Route>
      <Route
        path="/references/references-info"
        element={<ReferencesInfo />}
      ></Route>
      <Route
        path="/references/references-programm-btn-info"
        element={<ReferencesProgrammBtnInfo />}
      ></Route>
      <Route
        path="/references/references-programm-btn-info/references-programm-info"
        element={<ReferencesProgrammInfo />}
      ></Route>
      <Route
        path="/referees-and-coaches"
        element={<RefereesAndCoaches />}
      ></Route>
      <Route path="/participants/*" element={<Participants />}></Route>

      <Route path="/participants/teams" element={<Teams />}></Route>
      <Route
        path="/participants/referees-and-coaches"
        element={<RefereesAndCoaches />}
      ></Route>
      <Route
        path="/mandatory-program-list"
        element={<MandotoryProgramList />}
      ></Route>
      <Route path="/ratings" element={<Ratings />}></Route>
      <Route path="/the-judging-team" element={<TheJudgingTeam />}></Route>
      <Route path="/juniors-sportmans" element={<JuniorsSportmans />}></Route>
      <Route path="/the-draw" element={<TheDraw />}></Route>
      <Route
        path="/the-draw-any-program"
        element={<TheDrawAnyProgram />}
      ></Route>
      <Route path="/result-documents" element={<ResutDocuments />}></Route>
      <Route path="/any-team-program" element={<AnyProgramTeam />}></Route>
      <Route
        path="/the-judging-team-any-program"
        element={<TheJudgingTeamAnyProgram />}
      ></Route>
      <Route
        path="/ratings-any-program"
        element={<RatingsAnyProgaram />}
      ></Route>
      <Route
        path="/ratings-any-program-documents"
        element={<ResutAnyProgramDocuments />}
      ></Route>
      <Route path="/card-numbers" element={<CardNumbers />}></Route>
      <Route path="/start-numbers" element={<StartNumbers />}></Route>
    </Routes>
  );
};

export default AppRoutes;
