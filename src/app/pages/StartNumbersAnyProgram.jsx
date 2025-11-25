import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import {
  sportsmansSliceThunk,
  teamsSliceThunk,
} from "../../redux/teams/teamsSlice";
import { mainProgramDocumentThunk } from "../../redux/mandatoryProgramReferee/mandatoryProgramRefereeSlice";
import { ageGroupThunk } from "../../redux/references/ageGroupSlice";
import { figuresThunk } from "../../redux/references/figureSlice";
import { getSubgroupFiguresThunk } from "../../redux/subgroupFigures/subgroupFiguresSlice";
import { ratingsSlicAnyProgrameGetThunk } from "../../redux/ratingsAnyProgram/ratingsAnyProgramSlice";
import { ratingsSliceGetThunk } from "../../redux/ratings/ratingsSlice";

const StartNumbersAnyProgram = ({
  yearsId,
  documentsYears,
  nameId,
  groupId,
  disciplineId,
  disciplineName,
}) => {
  const dispatch = useDispatch();

  const { tournamentName } = useAppSelector(
    (state) => state.tournamentNameSlice.tournament
  );
  const { dateAndPlaceOfRealization } = useAppSelector(
    (state) => state.tournamentNameSlice.tournament
  );
  const { mainProgram } = useAppSelector(
    (store) => store.mandatoryProgramRefereeSlice
  );

  const { ageGroup } = useAppSelector((state) => state.ageGroupSlice);

  const { subgroupFigures, subgroupFiguresResult } = useAppSelector(
    (state) => state.subgroupFiguresSlice
  );

  const { ratingsSportsmans, activeRatingsSportsmans } = useAppSelector(
    (state) => state.ratingsSlice
  );

  const { ratingsSportsmansAnyProgram, activeRatingsSportsmansAnyProgram } =
    useAppSelector((state) => state.ratingsAnyProgramSlice);

  const funcFiguresResult = (sportsmans, sportsmansId) => {
    const sum = sportsmans.reduce((currentSum, currentNumber) => {
      if (sportsmansId.includes(currentNumber.sportsmanId)) {
        return currentSum + currentNumber.scoresResultFinishThree;
      }
      return currentSum + 0;
    }, 0);

    return sum / sportsmansId.length;
  };

  const funcFiguresResultSportsman = (sportsmans, id) => {
    const sum = sportsmans.reduce((currentSum, currentNumber) => {
      if (currentNumber.sportsman.id == id) {
        return currentSum + currentNumber.scoresResultFinishThree;
      }
      return currentSum + 0;
    }, 0);

    return sum;
  };

  useEffect(() => {
    
    dispatch(mainProgramDocumentThunk());
    dispatch(ageGroupThunk());
    // dispatch(getSubgroupFiguresThunk(nameId));
    dispatch(ratingsSlicAnyProgrameGetThunk({ groupId, disciplineId }));
    // console.log(nameId);

    if (groupId != 1) {
      dispatch(ratingsSliceGetThunk(groupId == 2 ? 1 : 2));
    }
  }, [dispatch]);

  // console.log(ratingsSportsmans);
  // console.log("************");
  console.log(ratingsSportsmansAnyProgram);
  // console.log(ratingsSportsmans);
  
  
  return (
    
    <>
      {disciplineId != 1 ? (
        <div className="component-to-print-document">
          <div className="component-to-print-document__header">
            <div className="component-to-print-document__header-title">
              {tournamentName}
            </div>
            <div className="component-to-print-document__header-text">
              {dateAndPlaceOfRealization}
            </div>
          </div>
          <div className="component-to-print-document__title">
            ПРОИЗВОЛЬНАЯ ПРОГРАММА
          </div>
          <div className="component-to-print-document__title">
            {disciplineName.toUpperCase()}
          </div>
          <div className="component-to-print-document__title">
            {disciplineId == 3 && groupId == 1
              ? "Юниоры 15-20, юниорки 15-19"
              : groupId == 1 && disciplineId != 3
              ? "Юниорки 15-19"
              : groupId == 2 && disciplineId == 3
              ? "Девушки, юноши 13-15 лет" 
              : groupId == 2 && disciplineId != 3
              ? "Девушки 13-15 лет"
              : groupId == 3 && disciplineId == 3 
              ? "Девочки, мальчики до 13 лет"
              : "Девочки до 13 лет" }
          </div>
          <table className="component-to-print-document__result-table">
            <thead>
              <tr>
                <td>
                  <div className="page-header-space"></div>
                </td>
              </tr>
              <tr>
                <td>ст.н.</td>
                <td>
                  Команда <br /> Ф.И.О
                </td>
                <td>
                  Дата <br />
                  рождения
                </td>
                <td>
                  Спортивный <br />
                  разряд
                </td>
              </tr>
            </thead>
            <tbody>
              {[...ratingsSportsmansAnyProgram]
                .sort(
                  (a, b) => b.scoresResultFinishTwo - a.scoresResultFinishTwo
                )
                .map((item, index) => (
                  <tr key={item.id}>
                    <td>{item.drawsNumber}</td>
                    <td>
                      <div className="component-to-print-document__title" style={{textAlign: 'left'}}>
                        {item.anyTeamProgram.team.nameTeam}
                      </div>
                      {item.anyTeamProgram.sportsmansArray.map(
                        (sportsman, sportsmanIdx) => (
                          <div key={sportsmanIdx} style={{textAlign: 'left'}}>
                            {sportsman?.surnameAndFirstname}{item.anyTeamProgram.outOfCompetitions[sportsmanIdx] && '(R)'}
                          </div>
                        )
                      )}
                    </td>
                    <td>
                      <br />
                      {item.anyTeamProgram.sportsmansArray.map(
                        (sportsman, sportsmanIdx) => (
                          <div key={sportsmanIdx}>{sportsman?.years}</div>
                        )
                      )}
                    </td>
                    <td>
                      <br />
                      {item.anyTeamProgram.sportsmansArray.map(
                        (sportsman, sportsmanIdx) => (
                          <div key={sportsmanIdx}>
                            {sportsman?.sportCategory?.name}
                          </div>
                        )
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="last">
            <div>Главный спортивный судья: </div>
            <div> Карнаухова К.А.</div>
          </div>
        </div>
      ) : (
        <div className="component-to-print-document">
          <div className="component-to-print-document__header">
            <div className="component-to-print-document__header-title">
              {tournamentName}
            </div>
            <div className="component-to-print-document__header-text">
              {dateAndPlaceOfRealization}
            </div>
          </div>
          <div className="component-to-print-document__title">
            ПРОИЗВОЛЬНАЯ ПРОГРАММА
          </div>
          <div className="component-to-print-document__title">
            
            {disciplineName.toUpperCase()}
          </div>
          <div className="component-to-print-document__title">
          {disciplineId == 3 && groupId == 1
              ? "Юниоры 15-20, юниорки 15-19"
              : groupId == 1 && disciplineId != 3
              ? "Юниорки 15-19"
              : groupId == 2 && disciplineId == 3
              ? "Девушки, юноши 13-15 лет" 
              : groupId == 2 && disciplineId != 3
              ? "Девушки 13-15 лет"
              : groupId == 3 && disciplineId == 3 
              ? "Девочки, мальчики до 13 лет"
              : "Девочки до 13 лет" }
          </div>
          <table className="component-to-print-document__result-table">
            <thead>
              <tr>
                <td>
                  <div className="page-header-space"></div>
                </td>
              </tr>
              <tr>
                <td>ст.н.</td>
                <td>Ф.И.О</td>
                <td>
                  Дата <br />
                  рождения
                </td>
                <td>
                  Спортивный <br />
                  разряд
                </td>
              </tr>
            </thead>
            <tbody>
              {[...ratingsSportsmansAnyProgram]
                .sort(
                  (a, b) => b.scoresResultFinishTwo - a.scoresResultFinishTwo
                )
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.drawsNumber}</td>
                    <td>{item.sportsman?.surnameAndFirstname} (R)</td>
                    <td>{item.sportsman?.years}</td>
                    <td>{item.sportsman?.sportCategory.name}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="last">
            <div>Главный спортивный судья: </div>
            <div> Карнаухова К.А.</div>
          </div>
        </div>
      )}
    </>
  );
};

export default StartNumbersAnyProgram;
