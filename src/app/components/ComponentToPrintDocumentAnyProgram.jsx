import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { ratingsSlicAnyProgrameGetThunk } from "../../redux/ratingsAnyProgram/ratingsAnyProgramSlice";
import { mainAnyProgramThunk } from "../../redux/mandatoryAnyProgramReferee/mandatoryAnyProgramRefereeSlice";

const ComponentToPrintDocumentAnyProgram = ({
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

  const { ageGroup } = useAppSelector((state) => state.ageGroupSlice);

  const { subgroupFigures, subgroupFiguresResult } = useAppSelector(
    (state) => state.subgroupFiguresSlice
  );

  const { ratingsSportsmansAnyProgram, activeRatingsSportsmansAnyProgram } =
    useAppSelector((state) => state.ratingsAnyProgramSlice);

  const { mainAnyProgram } = useAppSelector(
    (store) => store.mandatoryAnyProgramRefereeSlice
  );

  const navigate = useNavigate();

  const contentRef = useRef(null);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    const handleBeforePrint = () => {
      const content = contentRef.current;

      if (content) {
        const contentHeight = content.scrollHeight;
        const pageHeight = window.innerHeight;

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

    // dispatch(mainProgramDocumentThunk());
    // dispatch(ageGroupThunk());
    // dispatch(getSubgroupFiguresThunk(nameId));

    dispatch(mainAnyProgramThunk());
    // dispatch(refereesAndCoachesSliceThunk()).then(({ payload }) => {
    //   setRefereesAndCoachesList(() => [
    //     {
    //       id: 0,
    //       surnameAndFirstname: "Выберите судью",
    //     },
    //     ...payload,
    //   ]);
    // });

    dispatch(ratingsSlicAnyProgrameGetThunk({ groupId, disciplineId })).then(
      (data) => {
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
      }
    );

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, [dispatch]);

  console.log(ratingsSportsmansAnyProgram);

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
          ПРОИЗВОЛЬНАЯ ПРОГРАММА
        </div>
        <div className="component-to-print-document__title">
          {disciplineName}
        </div>
        <div className="component-to-print-document__title">{nameId}</div>
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
          {mainAnyProgram?.map(
            (program) =>
              nameId.includes(program.requiredAnyProgramName) && (
                <div
                  key={program.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700 }}>EL</div>
                    <div>
                      {program.brigadeElId.refereesAnyBrigades.map(
                        (refereeItem, refereeItemIdx) => (
                          <div key={refereeItem.id}>
                            
                            {refereeItem.refereeId != null && (
                              <div>
                                <span style={{ marginRight: "10px" }}>
                                  {refereeItemIdx + 1}
                                </span>
                                <span>
                                  {refereeItem.referee.surnameAndFirstname} (
                                  {refereeItem.referee.category})
                                </span>
                              </div>
                            )}
                          </div>
                          // <div key={refereeItem.id}>
                          //   <span style={{ marginRight: "10px" }}>
                          //     {refereeItemIdx + 1}
                          //   </span>
                          //   {refereeItem.refereeId != null ? (
                          //     <span>
                          //       {refereeItem.referee.surnameAndFirstname} (
                          //       {refereeItem.referee.category})
                          //     </span>
                          //   ) : (
                          //     "Нет судьи"
                          //   )}
                          // </div>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700 }}>AL</div>
                    <div>
                      {program.brigadeAlId.refereesAnyBrigades.map(
                        (refereeItem, refereeItemIdx) => (
                          <div key={refereeItem.id}>
                            {refereeItem.refereeId != null && (
                              <div>
                                <span style={{ marginRight: "10px" }}>
                                  {refereeItemIdx + 1}
                                </span>
                                <span>
                                  {refereeItem.referee.surnameAndFirstname} (
                                  {refereeItem.referee.category})
                                </span>
                              </div>
                            )}
                          </div>
                          // <div key={refereeItem.id}>
                          //   <span style={{ marginRight: "10px" }}>
                          //     {refereeItemIdx + 1}
                          //   </span>
                          //   {refereeItem.refereeId != null ? (
                          //     <span>
                          //       {refereeItem.referee.surnameAndFirstname} (
                          //       {refereeItem.referee.category})
                          //     </span>
                          //   ) : (
                          //     "Нет судьи"
                          //   )}
                          // </div>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700 }}>DTC</div>
                    <div>
                      {program.brigadeDTCId.refereesAnyBrigades.map(
                        (refereeItem, refereeItemIdx) => (
                          <div key={refereeItem.id}>
                            {refereeItem.refereeId != null && (
                              <div>
                                <span style={{ marginRight: "10px" }}>
                                  {refereeItemIdx + 1}
                                </span>
                                <span>
                                  {refereeItem.referee.surnameAndFirstname} (
                                  {refereeItem.referee.category})
                                </span>
                              </div>
                            ) }
                          </div>
                          // <div key={refereeItem.id}>
                          //   <span style={{ marginRight: "10px" }}>
                          //     {refereeItemIdx + 1}
                          //   </span>
                          //   {refereeItem.refereeId != null ? (
                          //     <span>
                          //       {refereeItem.referee.surnameAndFirstname} (
                          //       {refereeItem.referee.category})
                          //     </span>
                          //   ) : (
                          //     "Нет судьи"
                          //   )}
                          // </div>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700 }}>STC</div>
                    <div>
                      {program.brigadeSTCId.refereesAnyBrigades.map(
                        (refereeItem, refereeItemIdx) => (
                          <div key={refereeItem.id}>
                            {refereeItem.refereeId != null && (
                              <div>
                                <span style={{ marginRight: "10px" }}>
                                  {refereeItemIdx + 1}
                                </span>
                                <span>
                                  {refereeItem.referee.surnameAndFirstname} (
                                  {refereeItem.referee.category})
                                </span>
                              </div>
                            )}
                          </div>
                          // <div key={refereeItem.id}>
                          //   <span style={{ marginRight: "10px" }}>
                          //     {refereeItemIdx + 1}
                          //   </span>
                          //   {refereeItem.refereeId != null ? (
                          //     <span>
                          //       {refereeItem.referee.surnameAndFirstname} (
                          //       {refereeItem.referee.category})
                          //     </span>
                          //   ) : (
                          //     "Нет судьи"
                          //   )}
                          // </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
        {/* <table>
          <tbody>
            <tr>
              <td rowspan="3">1</td>
              <td rowspan="3">RUS, Московская область-1</td>
              <td rowspan="3">Аминова Самира</td>
              <td>ACRO-A</td>
              <td>2.30</td>
              <td>8.75</td>
              <td>8.75</td>
              <td>8.50</td>
              <td>8.50</td>
              <td>8.75</td>
              <td>-9.57</td>
              <td>182.8718</td>
              <td>297.1218</td>
              <td>0.0000</td>
            </tr>
            <tr>
              <td>HYBRID-T</td>
              <td>9.70</td>
              <td>8.80</td>
              <td>8.75</td>
              <td>7.00</td>
              <td>7.75</td>
              <td colspan="4">37.5675</td>
            </tr>
            <tr>
              <td>HYBRID-D</td>
              <td>10.40</td>
              <td>8.50</td>
              <td>8.75</td>
              <td>7.75</td>
              <td>7.50</td>
              <td colspan="4">41.467</td>
            </tr>
          </tbody>
        </table> */}

        {disciplineId != 1 ? (
          <table className="component-to-print-document-any-program__result-table">
            <thead>
              <tr>
                <td>
                  <div className="page-header-space"></div>
                </td>
              </tr>
              <tr>
                <th>Место</th>
                <th>
                  Команда <br /> Ф.И.
                </th>
                <th>
                  <div>Судьи</div>
                  <div style={{ display: "flex", gap: '2px' }}>
                    <div
                      style={{
                        maxWidth: "68px",
                        width: "100%",
                        flex: "0 0 auto",
                        textAlign: "center",
                      }}
                    ></div>
                    <div
                      style={{
                        maxWidth: "25px",
                        width: "100%",
                        flex: "0 0 auto",
                      }}
                    ></div>
                    <div
                      style={{
                        maxWidth: "25px",
                        width: "100%",
                        flex: "0 0 auto",
                      }}
                    ></div>
                    <div
                      style={{
                        maxWidth: "25px",
                        width: "100%",
                        flex: "0 0 auto",
                        textAlign: "center",
                      }}
                    >
                      1
                    </div>
                    <div
                      style={{
                        maxWidth: "25px",
                        width: "100%",
                        flex: "0 0 auto",
                        textAlign: "center",
                      }}
                    >
                      2
                    </div>
                    <div
                      style={{
                        maxWidth: "25px",
                        width: "100%",
                        flex: "0 0 auto",
                        textAlign: "center",
                      }}
                    >
                      3
                    </div>
                    <div
                      style={{
                        maxWidth: "25px",
                        width: "100%",
                        flex: "0 0 auto",
                        textAlign: "center",
                      }}
                    >
                      4
                    </div>
                    <div
                      style={{
                        maxWidth: "25px",
                        width: "100%",
                        flex: "0 0 auto",
                        textAlign: "center",
                      }}
                    >
                      5
                    </div>
                  </div>
                </th>
                <th style={{ fontSize: "8px",textAlign: 'center'}}>О.Синх.</th>
                <th></th>
                <th style={{fontSize: "8px", textAlign: 'center'}}>Пен.</th>
                <th style={{ fontSize: "8px" }}>Результат</th>
                <th>Отст.</th>
              </tr>
            </thead>
            <tbody>
              {[...ratingsSportsmansAnyProgram]
                .sort(
                  (a, b) => b.scoresResultFinishTwo - a.scoresResultFinishTwo
                )
                .map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>
                      <span style={{ paddingLeft: "20px" }}>
                        {item.anyTeamProgram.team.nameTeam}
                      </span>
                      <br />
                      {item.anyTeamProgram.sportsmansArray.map(
                        (sportsman, sportsmanIdx) => (
                          <div key={sportsmanIdx  } style={{ display: "flex" }}>
                            <span style={{ width: "20px" }}>
                              {item.anyTeamProgram.reserve[
                                sportsmanIdx
                              ] && "R"}
                            </span>{" "}
                            {sportsman?.surnameAndFirstname}
                          </div>
                        )
                      )}
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: "2px" }}>
                        <span
                          style={{
                            maxWidth: "75px",
                            width: "100%",
                            flex: "0 0 auto",
                          }}
                        >
                          <div>ELEMENTS</div>
                        </span>
                        <span
                          style={{
                            maxWidth: "25px",
                            width: "100%",
                            flex: "0 0 auto",
                          }}
                        >
                          <div>DD</div>
                        </span>
                        <span
                          style={{
                            maxWidth: "25px",
                            width: "100%",
                            flex: "0 0 auto",
                          }}
                        >
                          <div>FC</div>
                        </span>
                      </div>
                      {item.MPScoreAnyProgramArray.map((scoreRow, idx) => (

                        <div key={idx} style={{ display: "flex", gap: "2px" }}>
                          <span
                            style={{
                              maxWidth: "75px",
                              width: "100%",
                              flex: "0 0 auto",
                            }}
                          >
                            <span>
                              {scoreRow?.elementsProgram?.nameElementProgram}
                            </span>
                          </span>
                          <span
                            style={{
                              maxWidth: "25px",
                              width: "100%",
                              flex: "0 0 auto",
                            }}
                          >
                            {scoreRow.DD.toFixed(3)}
                          </span>
                          <span
                            style={{
                              maxWidth: "25px",
                              width: "100%",
                              flex: "0 0 auto",
                            }}
                          >
                            {scoreRow?.elementsProgram?.ratio != null ? scoreRow?.elementsProgram?.ratio.toFixed(2) : ''}
                          </span>
                          {scoreRow.scores.map((num, idxNum) => (
                            <span
                              style={{
                                maxWidth: "25px",
                                width: "100%",
                                flex: "0 0 auto",
                              }}
                              key={idxNum}
                            >
                              {num.toFixed(2)}
                            </span>
                          ))}
                        </div>
                      ))}
                      <div>IMPRESSION</div>
                      {item.MPOneScoreIpressionAnyArray.map((scoreRow, idx) => (
                        <div key={idx} style={{ display: "flex", gap: "2px" }}>
                          <span
                            style={{
                              maxWidth: "75px",
                              width: "100%",
                              flex: "0 0 auto",
                            }}
                          >
                            {scoreRow?.elementsProgram?.nameElementProgram}
                          </span>
                          <span
                            style={{
                              maxWidth: "25px",
                              width: "100%",
                              flex: "0 0 auto",
                            }}
                          ></span>
                          <span
                            style={{
                              maxWidth: "25px",
                              width: "100%",
                              flex: "0 0 auto",
                            }}
                          >
                            {scoreRow?.elementsProgram?.ratio != null ? scoreRow?.elementsProgram?.ratio.toFixed(2) : ''}
                          </span>
                          {scoreRow.scores.map((num, idxNum) => (
                            <span
                              style={{
                                maxWidth: "25px",
                                width: "100%",
                                flex: "0 0 auto",
                              }}
                              key={idxNum}
                            >
                              {num.toFixed(2)}
                            </span>
                          ))}
                        </div>
                      ))}
                      <div>
                        Total DD: {item.totalDD.toFixed(4)}, Final DD:{" "}
                        {item.finalDD.toFixed(4)}
                      </div>
                    </td>

                    <td style={{textAlign: 'center'}}>{item.sinxr}</td>
                    <td>
                      <div style={{ textAlign: "end" }}>
                        {item.scoresResultFinishElements.toFixed(4)}
                      </div>
                      {item.MPScoreAnyProgramArray.map((scoreRow, idx) => (
                        <div style={{ textAlign: "end" }} key={idx}>
                          {scoreRow.scoresResult.toFixed(4)}
                        </div>
                      ))}
                      <div style={{ textAlign: "end" }}>
                        {item.scoresResultFinishImpression.toFixed(4)}
                      </div>
                      {item.MPOneScoreIpressionAnyArray.map((scoreRow, idx) => (
                        <div style={{ textAlign: "end" }} key={idx}>
                          {scoreRow.scoresResult.toFixed(4)}
                        </div>
                      ))}
                    </td>
                    <td style={{textAlign: 'center'}}>{item.scoresResultFinishOne.toFixed(4)}</td>
                    <td>{item.scoresResultFinishTwo.toFixed(4)}</td>
                    <td>
                      {(
                        [...ratingsSportsmansAnyProgram].sort(
                          (a, b) =>
                            b.scoresResultFinishTwo - a.scoresResultFinishTwo
                        )[0].scoresResultFinishTwo - item.scoresResultFinishTwo
                      ).toFixed(4)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <table className="component-to-print-document-any-program__result-table">
            <thead>
              <tr>
                <td>
                  <div className="page-header-space"></div>
                </td>
              </tr>
              <tr>
                <th>Место</th>
                <th >Ф.И.</th>
                <th>
                  <div>Судьи</div>
                  <div style={{ display: "flex", gap: '2px'}}>
                    <div
                      style={{
                        maxWidth: "68px",
                        width: "100%",
                        flex: "0 0 auto",
                      }}
                    ></div>
                    <div
                      style={{
                        maxWidth: "25px",
                        width: "100%",
                        flex: "0 0 auto",
                      }}
                    ></div>
                    <div
                      style={{
                        maxWidth: "25px",
                        width: "100%",
                        flex: "0 0 auto",
                      }}
                    ></div>
                    <div
                      style={{
                        maxWidth: "25px",
                        width: "100%",
                        flex: "0 0 auto",
                        textAlign: "center",
                      }}
                    >
                      1
                    </div>
                    <div
                      style={{
                        maxWidth: "25px",
                        width: "100%",
                        flex: "0 0 auto",
                        textAlign: "center",
                      }}
                    >
                      2
                    </div>
                    <div
                      style={{
                        maxWidth: "25px",
                        width: "100%",
                        flex: "0 0 auto",
                        textAlign: "center",
                      }}
                    >
                      3
                    </div>
                    <div
                      style={{
                        maxWidth: "25px",
                        width: "100%",
                        flex: "0 0 auto",
                        textAlign: "center",
                      }}
                    >
                      4
                    </div>
                    <div
                      style={{
                        maxWidth: "25px",
                        width: "100%",
                        flex: "0 0 auto",
                        textAlign: "center",
                      }}
                    >
                      5
                    </div>
                  </div>
                </th>
                <th style={{ fontSize: "8px" ,textAlign: 'center'}}>О.Синх.</th>
                <th></th>
                <th style={{fontSize: "8px", textAlign: 'center'}}>Пен.</th>
                <th style={{ fontSize: "8px" }}>Результат</th>
                <th>Отст.</th>
              </tr>
            </thead>
            <tbody>
              {[...ratingsSportsmansAnyProgram]
                .sort(
                  (a, b) => b.scoresResultFinishTwo - a.scoresResultFinishTwo
                )
                .map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td >
                      <div>{item.sportsman?.surnameAndFirstname}</div>
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: "2px" }}>
                        <span
                          style={{
                            maxWidth: "75px",
                            width: "100%",
                            flex: "0 0 auto",
                          }}
                        >
                          <div>ELEMENTS</div>
                        </span>
                        <span
                          style={{
                            maxWidth: "25px",
                            width: "100%",
                            flex: "0 0 auto",
                          }}
                        >
                          <div>DD</div>
                        </span>
                        <span
                          style={{
                            maxWidth: "25px",
                            width: "100%",
                            flex: "0 0 auto",
                          }}
                        >
                          <div>FC</div>
                        </span>
                      </div>
                      {item.MPScoreAnyProgramArray.map((scoreRow, idx) => (
                        <div key={idx} style={{ display: "flex", gap: "2px" }}>
                          <span
                            style={{
                              maxWidth: "75px",
                              width: "100%",
                              flex: "0 0 auto",
                            }}
                          >
                            <span>
                              {scoreRow?.elementsProgram?.nameElementProgram}
                            </span>
                          </span>
                          <span
                            style={{
                              maxWidth: "25px",
                              width: "100%",
                              flex: "0 0 auto",
                            }}
                          >
                            {scoreRow.DD.toFixed(3)}
                          </span>
                          <span
                            style={{
                              maxWidth: "25px",
                              width: "100%",
                              flex: "0 0 auto",
                            }}
                          >
                            {scoreRow?.elementsProgram?.ratio != null ? scoreRow?.elementsProgram?.ratio.toFixed(2) : ''}
                          </span>
                          {scoreRow.scores.map((num, idxNum) => (
                            <span
                              style={{
                                maxWidth: "25px",
                                width: "100%",
                                flex: "0 0 auto",
                              }}
                              key={idxNum}
                            >
                              {num.toFixed(2)}
                            </span>
                          ))}
                        </div>
                      ))}
                      <div>IMPRESSION</div>
                      {item.MPOneScoreIpressionAnyArray.map((scoreRow, idx) => (
                        <div key={idx} style={{ display: "flex", gap: "2px" }}>
                          <span
                            style={{
                              maxWidth: "75px",
                              width: "100%",
                              flex: "0 0 auto",
                            }}
                          >
                            {scoreRow?.elementsProgram?.nameElementProgram}
                          </span>
                          <span
                            style={{
                              maxWidth: "25px",
                              width: "100%",
                              flex: "0 0 auto",
                            }}
                          ></span>
                          <span
                            style={{
                              maxWidth: "25px",
                              width: "100%",
                              flex: "0 0 auto",
                            }}
                          >
                            {scoreRow?.elementsProgram?.ratio != null ? scoreRow?.elementsProgram?.ratio.toFixed(2) : ''}
                          </span>
                          {scoreRow.scores.map((num, idxNum) => (
                            <span
                              style={{
                                maxWidth: "25px",
                                width: "100%",
                                flex: "0 0 auto",
                              }}
                              key={idxNum}
                            >
                              {num.toFixed(2)}
                            </span>
                          ))}
                        </div>
                      ))}
                      <div>
                        Total DD: {item.totalDD.toFixed(4)}, Final DD:{" "}
                        {item.finalDD.toFixed(4)}
                      </div>
                    </td>

                    <td></td>

                    <td>
                      <div style={{ textAlign: "end" }}>
                        {item.scoresResultFinishElements.toFixed(4)}
                      </div>
                      {item.MPScoreAnyProgramArray.map((scoreRow, idx) => (
                        <div style={{ textAlign: "end" }} key={idx}>
                          {scoreRow.scoresResult.toFixed(4)}
                        </div>
                      ))}
                      <div style={{ textAlign: "end" }}>
                        {item.scoresResultFinishImpression.toFixed(4)}
                      </div>
                      {item.MPOneScoreIpressionAnyArray.map((scoreRow, idx) => (
                        <div style={{ textAlign: "end" }} key={idx}>
                          {scoreRow.scoresResult.toFixed(4)}
                        </div>
                      ))}
                    </td>
                    <td style={{textAlign: 'center'}}>{item.scoresResultFinishOne.toFixed(4)}</td>
                    <td style={{textAlign: 'center'}}>{item.scoresResultFinishTwo.toFixed(4)}</td>
                    <td>
                      {(
                        [...ratingsSportsmansAnyProgram].sort(
                          (a, b) =>
                            b.scoresResultFinishTwo - a.scoresResultFinishTwo
                        )[0].scoresResultFinishTwo - item.scoresResultFinishTwo
                      ).toFixed(4)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="last">
        <div>Главный спортивный судья: </div>
        <div> Карнаухова К.А.</div>
      </div>
    </div>
  );
};

export default ComponentToPrintDocumentAnyProgram;
