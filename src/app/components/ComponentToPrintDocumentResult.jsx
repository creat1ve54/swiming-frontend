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
import { ratingsSliceGetThunk } from "../../redux/ratings/ratingsSlice";

const ComponentToPrintDocumentResult = ({ yearsId, documentsYears, nameId }) => {
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

  //   const { dateAndPlaceOfRealization } = useAppSelector(
  //     (state) => state.
  //   );

  // const { ageSubgroup } = useAppSelector((state) => state.ageSubgroupSlice);

  //   const { teams, sportsmans } = useAppSelector((state) => state.teamsSlice);

  //   const ageSubgroupFunc = () => {
  //     let ageSubgroupNew = [];
  //     let ageSubgroupNewArr = [];

  //     sportsmans.forEach((sportsman) => {
  //       if (!ageSubgroupNew.includes(sportsman.ageSubgroupId)) {
  //         ageSubgroupNew.push(sportsman.ageSubgroupId);
  //         ageSubgroupNewArr.push(sportsman.ageSubgroup);
  //       }
  //     });
  //     return ageSubgroupNewArr;
  //   };

  //   const teamsFunc = (ageSubgroup) => {
  //     let teamsNew = [];
  //     teamsNew = teams.map((team) => {
  //       let teamCopy = { ...team };
  //       let sportsmansArrayNew = [];
  //       teamCopy.sportsmansArray.forEach((sportsman) => {
  //         if (sportsman.ageSubgroupId === ageSubgroup.id) {
  //           sportsmansArrayNew.push(sportsman);
  //         }
  //       });
  //       teamCopy.sportsmansArray = sportsmansArrayNew;
  //       return teamCopy;
  //     });
  //     console.log(teamsNew);
  //     return teamsNew;
  //   };

  const { ratingsSportsmans, activeRatingsSportsmans } = useAppSelector(
    (state) => state.ratingsSlice
  );

  useEffect(() => {
    dispatch(mainProgramDocumentThunk());
    dispatch(ageGroupThunk());
    dispatch(getSubgroupFiguresThunk(nameId));
    dispatch(ratingsSliceGetThunk(nameId));
  }, [dispatch]);

  return (
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
        ОБЯЗАТЕЛЬНАЯ ПРОГРАММА
      </div>
      <div className="component-to-print-document__title">ФИГУРЫ</div>
      <div className="component-to-print-document__title">РЕЗУЛЬТАТЫ</div>
      <div>
        {ageGroup.map(
          (item) =>
            item.nameShort == documentsYears && (
              <div className="component-to-print-document__title" key={item.id}>
                {item.name}
              </div>
            )
        )}
      </div>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <td className="component-to-print-document__figure-header">
                  Группа фигур:
                </td>
                <td></td>
                <td className="component-to-print-document__figure-header">
                  КС
                </td>
                <td className="component-to-print-document__figure-header">
                  Брг
                </td>
              </tr>
            </thead>
            <tbody>
              {subgroupFigures.map((item) => (
                <tr key={item.id}>
                  <td>{item.figure.kod}</td>
                  <td>
                    <div>
                      <div>{item.figure.name}</div>
                      <div>{item.figure.nameEng}</div>
                    </div>
                  </td>
                  <td>{item.figure.ratio}</td>
                  <td>{item.brigadeNumber}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td className="component-to-print-document__figure-result">
                  {subgroupFiguresResult}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <table className="component-to-print-document__result-table">
        <thead>
          <tr>
            <td>
              <div className="page-header-space"></div>
            </td>
          </tr>
          <tr>
            <td>Место</td>
            <td>ст.н.</td>
            <td>Ф.И.</td>
            <td>г.р</td>
            <td>разр.</td>
            <td>Команда</td>
            <td>РЕЗ 100%</td>
          </tr>
        </thead>
        <tbody>
          {[...ratingsSportsmans]
            .sort((a, b) => b.scoresResultFinishTwo - a.scoresResultFinishTwo)
            .map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item?.drawsNumber}</td>
                <td>{item.sportsman?.surnameAndFirstname}</td>
                <td>{item.sportsman?.years}</td>
                <td>{item.sportsman?.sportCategory?.name}</td>
                <td>
                  <div> {item.sportsman?.team?.nameTeam}</div>
                </td>
                <td className="component-to-print-document__result-table-final-one">
                  {item.scoresResultFinishThree.toFixed(4)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComponentToPrintDocumentResult;
