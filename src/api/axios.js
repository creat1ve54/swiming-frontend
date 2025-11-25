import axios from "axios";

export const instance = axios.create({
  baseURL: "http://212.67.9.16/:8000/api",
});

export const sportsmansAPI = {
  createSportsmans(sportsmans) {
    return instance.post("/sportsmans", { sportsmans });
  },
  getSportsmans() {
    return instance.get("/sportsmans");
  },
  putSportsmans(sportsmansAndTeam) {
    return instance.put("/sportsmans", { sportsmansAndTeam });
  },
  deleteSportsman(id) {
    return instance.delete(`/sportsmans/${id}`, { id });
  },
};

export const teamsAPI = {
  createTeams(team) {
    return instance.post("/teams", { team });
  },
  getTeams(team) {
    return instance.get("/teams");
  },
  putTeams(team) {
    return instance.put("/teams", { team });
  },
  deleteTeam(id) {
    return instance.delete(`/teams/${id}`, { id });
  },
};

export const elementsOfTechnicalProgramsAPI = {
  getElementsOfTechnicalPrograms(groupId) {
    return instance.get("/elements-of-technical-programs", { params: groupId });
  },
  // createTeams(team) {
  //   return instance.post("/teams", { team });
  // },
  // getTeams(team) {
  //   return instance.get("/teams");
  // },
  // putTeams(team) {
  //   return instance.put("/teams", { team });
  // },
  // deleteTeam(id) {
  //   return instance.delete(`/teams/${id}`, { id });
  // },
};

export const elementsProgramAPI = {
  getElementProgram(elements) {
    return instance.get("/element-program", {params: elements});
  },
  // createTeams(team) {
  //   return instance.post("/teams", { team });
  // },
  // getTeams(team) {
  //   return instance.get("/teams");
  // },
  // putTeams(team) {
  //   return instance.put("/teams", { team });
  // },
  // deleteTeam(id) {
  //   return instance.delete(`/teams/${id}`, { id });
  // },
};

export const figuresAPI = {
  getFigures() {
    return instance.get("/figures");
  },
  // createTeams(team) {
  //   return instance.post("/teams", { team });
  // },
  // getTeams(team) {
  //   return instance.get("/teams");
  // },
  // putTeams(team) {
  //   return instance.put("/teams", { team });
  // },
  // deleteTeam(id) {
  //   return instance.delete(`/teams/${id}`, { id });
  // },
};

export const dutiesOfJudgesAPI = {
  getDutiesOfJudges() {
    return instance.get("/duties-of-judges");
  },
  // createTeams(team) {
  //   return instance.post("/teams", { team });
  // },
  // getTeams(team) {
  //   return instance.get("/teams");
  // },
  // putTeams(team) {
  //   return instance.put("/teams", { team });
  // },
  // deleteTeam(id) {
  //   return instance.delete(`/teams/${id}`, { id });
  // },
};

export const ageGroupAPI = {
  getAgeGroup() {
    return instance.get("/age-groups");
  },
  // createTeams(team) {
  //   return instance.post("/teams", { team });
  // },
  // getTeams(team) {
  //   return instance.get("/teams");
  // },
  // putTeams(team) {
  //   return instance.put("/teams", { team });
  // },
  // deleteTeam(id) {
  //   return instance.delete(`/teams/${id}`, { id });
  // },
};

export const ageSubgroupAPI = {
  getAgeSubroup() {
    return instance.get("/age-subgroups");
  },
  // createTeams(team) {
  //   return instance.post("/teams", { team });
  // },
  // getTeams(team) {
  //   return instance.get("/teams");
  // },
  // putTeams(team) {
  //   return instance.put("/teams", { team });
  // },
  // deleteTeam(id) {
  //   return instance.delete(`/teams/${id}`, { id });
  // },
};

export const sportCategoryAPI = {
  getSportCategory() {
    return instance.get("/sport-categorys");
  },
  // createTeams(team) {
  //   return instance.post("/teams", { team });
  // },
  // getTeams(team) {
  //   return instance.get("/teams");
  // },
  // putTeams(team) {
  //   return instance.put("/teams", { team });
  // },
  // deleteTeam(id) {
  //   return instance.delete(`/teams/${id}`, { id });
  // },
};

export const soloSportsmensAPI = {
  getSoloSportsmens() {
    return instance.get("/solo-sportsmens");
  },
  // createTeams(team) {
  //   return instance.post("/teams", { team });
  // },
  // getTeams(team) {
  //   return instance.get("/teams");
  // },
  // putTeams(team) {
  //   return instance.put("/teams", { team });
  // },
  // deleteTeam(id) {
  //   return instance.delete(`/teams/${id}`, { id });
  // },
};

export const mandatoryProgramRefereeApi = {
  getBrigades() {
    return instance.get("/brigade");
  },
  getListReferee() {
    return instance.get("/list-referee");
  },
  createReferee(mainBrigadeId) {
    return instance.post("/list-referee", { mainBrigadeId });
  },
  updatePost(postInfo) {
    return instance.put("/list-referee/update-post", { postInfo });
  },
  updateReferee(refereeInfo) {
    return instance.put("/list-referee/update-referee", { refereeInfo });
  },
  updateRefereesBrigades(refereesBrigadesInfo) {
    return instance.put("/referees-brigades/update-referee", {
      refereesBrigadesInfo,
    });
  },
  deleteReferee(id) {
    return instance.delete(`/list-referee/${id}`, { id });
  },
  getMainProgram() {
    return instance.get("/main-program");
  },
  getMainProgramDocument() {
    return instance.get("/main-program/document");
  },
  getMainBrigade() {
    return instance.get("/main-brigade");
  },
};

export const mandatoryAnyProgramRefereeApi = {
  getComposition() {
    return instance.get("/composition");
  },
  getListReferee() {
    return instance.get("/list-any-program-referee");
  },
  createReferee(mainAnyProgramBrigadeId) {
    return instance.post("/list-any-program-referee", { mainAnyProgramBrigadeId });
  },
  updatePost(postInfo) {
    return instance.put("/list-any-program-referee/update-post", { postInfo });
  },
  updateReferee(refereeInfo) {
    return instance.put("/list-any-program-referee/update-referee", { refereeInfo });
  },
  deleteReferee(id) {
    return instance.delete(`/list-any-program-referee/${id}`, { id });
  },
  updateRefereesAnyProgramBrigades(refereesBrigadesInfo) {
    return instance.put("/referees-any-program-brigades/update-referee", {
      refereesBrigadesInfo,
    });
  },
  getMainAnyProgram() {
    return instance.get("/main-any-program");
  },
  getMainAnyProgramDocument() {
    return instance.get("/main-any-program/document");
  },
  getMainBrigade() {
    return instance.get("/main-brigade");
  },
};

export const refereesAndCoachesApi = {
  createRefereesAndCoaches(refereesAndCoaches) {
    return instance.post("/referees-and-coaches", { refereesAndCoaches });
  },
  getRefereesAndCoaches() {
    return instance.get("/referees-and-coaches");
  },
  putRefereesAndCoaches(refereesAndCoaches) {
    return instance.put("/referees-and-coaches", { refereesAndCoaches });
  },
  deleteRefereesAndCoaches(id) {
    return instance.delete(`/referees-and-coaches/${id}`, { id });
  },
};

export const drawApi = {
  saveDraw(draw) {
    return instance.post("/draw", { draw });
  },
  getDraw(drawOption) {
    return instance.get(`/draw`, { params: drawOption });
  },
  changeManuallyDraw(draw) {
    return instance.post(`/draw/change`, { draw });
  },
  resetDraw(draw) {
    console.log(draw);
    return instance.post(`/draw/reset`, { draw });
  },
  activeDraw(draw) {
    return instance.post(`/draw/active`, { draw });
  },
};

export const drawAnyProgramApi = {
  saveDraw(draw) {
    return instance.post("/draw-any-program", { draw });
  },
  getDraw(drawOption) {
    return instance.get(`/draw-any-program`, { params: drawOption });
  },
  changeManuallyDraw(draw) {
    return instance.post(`/draw-any-program/change`, { draw });
  },
  resetDraw(draw) {
    console.log(draw);
    return instance.post(`/draw-any-program/reset`, { draw });
  },
  activeDraw(draw) {
    return instance.post(`/draw-any-program/active`, { draw });
  },
};

export const subgroupFiguresAPI = {
  saveSubgroupFigures(subgroupFigureNew) {
    return instance.post("/subgroup-figures", { subgroupFigureNew });
  },
  getSubgroupFigures(nameId) {
    return instance.get(`/subgroup-figures/${nameId}`, { nameId });
  },
};

export const ratingsAPI = {
  getRatings(nameId) {
    return instance.get(`/ratings/${nameId}`, { nameId });
  },
  saveActiveRatings(data) {
    return instance.put(`/ratings`, { data });
  },
};

export const ratingsAnyProgramAPI = {
  getRatings(ratings) {
    return instance.get(`/ratings-any-program`, {params: ratings});
  },
  saveActiveRatings(data) {
    return instance.put(`/ratings-any-program`, { data });
  },
  saveActiveDDThunk(data) {
    return instance.put(`/ratings-any-program/dd`, { data });
  },
  saveActiveSinxrThunk(data) {
    return instance.put(`/ratings-any-program/sinxr`, { data });
  },
  saveActiveRatingsElement(data) {
    return instance.put(`/ratings-any-program/element`, { data });
  },
  saveActiveRatingsImpression(data) {
    return instance.put(`/ratings-any-program/impression`, { data });
  },
  saveActiveRatingsElementImpression(data) {
    return instance.put(`/ratings-any-program/impression/element`, { data });
  }
};


export const anyTeamProgramAPI = {
  getAnyTeamProgram(anyTeamProgramObject) {
    return instance.get("/any-team-program", {
      params: anyTeamProgramObject,
    });
  },
  getAnyTeamProgramTeams(anyTeamProgramObject) {
    return instance.get(`/any-team-program/teams`, {
      params: anyTeamProgramObject,
    });
  },
  createAnyTeamProgram(anyTeamProgram) {
    return instance.post("/any-team-program", { anyTeamProgram });
  },
  postAnyTeamProgramSportsman(anyTeamProgram) {
    return instance.post("/any-team-program/sportsman", { anyTeamProgram });
  },
  putAnyTeamProgram(anyTeamProgram) {
    return instance.put("/any-team-program", { anyTeamProgram });
  },
  putAnyTeamProgramSportsman(anyTeamProgram) {
    return instance.put("/any-team-program/sportsman", { anyTeamProgram });
  },
  putAnyTeamProgramSportsmanOutOfCompetition(anyTeamProgram) {
    return instance.put("/any-team-program//sportsman/out-of-competition", { anyTeamProgram });
  },
  putAnyTeamProgramOutOfCompetition(anyTeamProgram) {
    return instance.put("/any-team-program/out-of-competition", { anyTeamProgram });
  },
  deleteAnyTeamProgramSportsman(sportsman) {
    return instance.delete(`/any-team-program/sportsman/${sportsman}`, {
      params: sportsman,
    });
  },
  deleteAnyTeamProgramTeams(id) {
    return instance.delete(`/any-team-program/${id}`, { id });
  },
};
