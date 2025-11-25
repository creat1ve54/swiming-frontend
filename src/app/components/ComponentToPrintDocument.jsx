import React, { useEffect, useRef, useState } from "react";
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

const ComponentToPrintDocument = ({ yearsId, documentsYears, nameId }) => {
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

  const navigate = useNavigate();

  const contentRef = useRef(null);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    const handleBeforePrint = () => {
      console.log("333333333");

      const content = contentRef.current;

      console.log(content);

      if (content) {
        const contentHeight = content.scrollHeight;
        const pageHeight = window.innerHeight;

        console.log(contentHeight);
        console.log(pageHeight);

        // Проверяем, превышает ли высота контента высоту страницы
        if (contentHeight > pageHeight) {
          setIsLastPage(true);
        }
      }
    };

    const handleAfterPrint = () => {
      setIsLastPage(false); // Возвращаем исходное состояние
    };

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    dispatch(mainProgramDocumentThunk());
    dispatch(ageGroupThunk());
    dispatch(getSubgroupFiguresThunk(nameId));
    dispatch(ratingsSliceGetThunk(nameId)).then((data) => {
      if (data.payload.error) {
        alert("Нет спортсменов");
        navigate(-1);
        return;
      } else {
        if (data.payload.length == 0) {
          alert("Нет спортсменов");
          navigate(-1);
          return;
        }
      }
    });

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, [dispatch]);

  return (
    <div ref={contentRef} className="component-to-print-document">
      <div className="content">
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
                <div
                  className="component-to-print-document__title"
                  key={item.id}
                >
                  {item.name}
                </div>
              )
          )}
        </div>
        <div>
          {mainProgram[yearsId]?.mainBrigadeId.listRefereeArray.length > 0 &&
            mainProgram[yearsId]?.mainBrigadeId.listRefereeArray.map((item) => (
              <div
                className="component-to-print-document__referee"
                key={item.id}
              >
                <span>{item.dutiesOfJudge.name}</span>
                <span>{item.referee.surnameAndFirstname}</span>
              </div>
            ))}

          <div className="component-to-print-document__brigades">
            {mainProgram[yearsId]?.brigadeOneId.refereesBrigades.length > 0 && (
              <div className="component-to-print-document__list">
                <div className="component-to-print-document__list-title">
                  Бригада 1
                </div>
                <div className="component-to-print-document__list-items">
                  {mainProgram[yearsId]?.brigadeOneId.refereesBrigades.map(
                    (item, index) =>
                      item.referee !== null && (
                        <div
                          className="component-to-print-document__list-item"
                          key={item.id}
                        >
                          <span>{index + 1}</span>
                          <span>{item.referee?.surnameAndFirstname}</span>
                          <span>{item.referee?.category}</span>
                          <span>{item.referee?.region}</span>
                        </div>
                      )
                  )}
                </div>
              </div>
            )}

            {mainProgram[yearsId]?.brigadeTwoId.refereesBrigades.length > 0 && (
              <div className="component-to-print-document__list">
                <div className="component-to-print-document__list-title">
                  Бригада 2
                </div>
                <div className="component-to-print-document__list-items">
                  {mainProgram[yearsId]?.brigadeTwoId.refereesBrigades.map(
                    (item, index) =>
                      item.referee !== null && (
                        <div
                          className="component-to-print-document__list-item"
                          key={item.id}
                        >
                          <span>{index + 1}</span>
                          <span>{item.referee?.surnameAndFirstname}</span>
                          <span>{item.referee?.category}</span>
                          <span>{item.referee?.region}</span>
                        </div>
                      )
                  )}
                </div>
              </div>
            )}

            {mainProgram[yearsId]?.brigadeThreeId.refereesBrigades.length >
              0 && (
              <div className="component-to-print-document__list">
                <div className="component-to-print-document__list-title">
                  Бригада 3
                </div>
                <div className="component-to-print-document__list-items">
                  {mainProgram[yearsId]?.brigadeThreeId.refereesBrigades.map(
                    (item, index) =>
                      item.referee !== null && (
                        <div
                          className="component-to-print-document__list-item"
                          key={item.id}
                        >
                          <span>{index + 1}</span>
                          <span>{item.referee?.surnameAndFirstname}</span>
                          <span>{item.referee?.category}</span>
                          <span>{item.referee?.region}</span>
                        </div>
                      )
                  )}
                </div>
              </div>
            )}

            {mainProgram[yearsId]?.brigadeFourId.refereesBrigades.length >
              0 && (
              <div className="component-to-print-document__list">
                <div className="component-to-print-document__list-title">
                  Бригада 4
                </div>
                <div className="component-to-print-document__list-items">
                  {mainProgram[yearsId]?.brigadeFourId.refereesBrigades.map(
                    (item, index) =>
                      item.referee !== null && (
                        <div
                          className="component-to-print-document__list-item"
                          key={item.id}
                        >
                          <span>{index + 1}</span>
                          <span>{item.referee?.surnameAndFirstname}</span>
                          <span>{item.referee?.category}</span>
                          <span>{item.referee?.region}</span>
                        </div>
                      )
                  )}
                </div>
              </div>
            )}
          </div>
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
              <td></td>
              <td>пен</td>
              <td>РЕЗ 100%</td>
            </tr>
          </thead>
          <tbody>
            {[...ratingsSportsmans]
              .sort((a, b) => b.scoresResultFinishTwo - a.scoresResultFinishTwo)
              .map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.drawsNumber}</td>
                  <td>{item.sportsman?.surnameAndFirstname}</td>
                  <td>{item.sportsman?.years}</td>
                  <td>{item.sportsman?.sportCategory?.name}</td>
                  <td>
                    <div> {item.sportsman.team.nameTeam}</div>
                    <div className="component-to-print-document__evaluations">
                      {item.MPScoreArray.map((itemScore, idx) => (
                        <div
                          key={idx}
                          className="component-to-print-document__evaluations-row"
                        >
                          <div>{itemScore.subgroupFigure.figureName}</div>
                          <div className="component-to-print-document__evaluations-score">
                            {itemScore.scores.map((score, idx) => (
                              <span
                                className="component-to-print-document__evaluations-score-item"
                                key={idx}
                              >
                                {score}
                              </span>
                            ))}
                            <span className="component-to-print-document__evaluations-score-item-final">
                              {itemScore.scoresResult.toFixed(4)}
                            </span>
                            <span>{itemScore.fine}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td>{item.scoresResultFinishTwo.toFixed(4)}</td>
                  <td>
                    {item.scoresResultFinishOne !== 0 &&
                      item.scoresResultFinishOne.toFixed(4)}
                  </td>
                  <td className="component-to-print-document__result-table-final-one">
                    {item.scoresResultFinishThree.toFixed(4)}
                  </td>
                </tr>
              ))}
            {/* <tr className="last">
              <td>Главный спортивный судья</td>
              <td>Карнаухова К.А.</td>
            </tr> */}
          </tbody>
          {/* <tfoot>
            <tr>
              <td>Главный спортивный судья</td>
              <td>Карнаухова К.А.</td>
            </tr>
          </tfoot> */}
        </table>
      </div>
      <div className='last'>
        <div>Главный спортивный судья</div>
        <div>Карнаухова К.А.</div>
      </div>
      {/* <div className="component-to-print-document__footer">UNCLASSIFIED</div> */}
    </div>
  );
};

export default ComponentToPrintDocument;
