import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  ratingsSlicAnyProgrameGetThunk,
  scoreChange,
  activeRatingsSportsmansChange,
  saveActiveRatingsAnyProgramThunk,
  fineChange,
  saveActiveRatingsAnyProgramElementThunk,
  saveActiveRatingsAnyProgramElementImoressionThunk,
  saveActiveRatingsAnyProgramImpressionThunk,
  scoreChangeImpression,
  fineChangeImpression,
  DDChange,
  saveActiveAnyProgramDDThunk,
  saveActiveAnyProgramSinxrThunk,
  sinxrChange,
  resetRatingsSportsmans,
} from "../../redux/ratingsAnyProgram/ratingsAnyProgramSlice";

import { useLocation, useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import DropDown from "../item/DropDown";
import {
  elementsOfTechnicalProgramsThunk,
  elementsProgramThunk,
} from "../../redux/referencesBtns/referencesBtns";
import HeaderComponent from "../components/HeaderComponent";
import Svg from "../../assets/svg/Svg";

const RatingsAnyProgaram = () => {
  const navigate = useNavigate();
  let data = useLocation();
  const { nameId, groupId, disciplineId, categories } = data.state;

  const dispatch = useAppDispatch();
  const {
    ratingsSportsmansAnyProgram,
    activeRatingsSportsmansAnyProgram,
    isLoading,
  } = useAppSelector((state) => state.ratingsAnyProgramSlice);

  // console.log(isLoading);
  

  const [activeSportsmanNum, setActiveSportsmanNum] = useState(0);
  // const [activeSportsman, setActiveSportsman] = useState(null);

  const [arrayBodyText, setArrayBodyText] = useState([]);

  const { elementsOfTechnicalPrograms } = useAppSelector(
    (state) => state.referencesBtnsSlice
  );

  const saveRatingsElemet = (id, field, item) => {
    dispatch(
      saveActiveRatingsAnyProgramElementThunk({
        nameId: nameId,
        changeRating: {
          id: id,
          field: field,
          item: item,
        },
        groupId: groupId,
        disciplineId: disciplineId,
      })
    ).then(() => {
      dispatch(ratingsSlicAnyProgrameGetThunk({ groupId, disciplineId })).then(
        (data) => {
          console.log(data.payload);
          if (data.payload.error || data.payload == undefined) {
            alert("Нет спортсменов");
            navigate(-1);
            return;
          } else {
            if (data.payload.length > 0) {
              const activeSportsman = data.payload.find(
                (item) => item.drawsNumber == activeSportsmanNum
              );
              dispatch(
                activeRatingsSportsmansChange({
                  activeSportsman: activeSportsman,
                })
              );
              setActiveSportsmanNum(activeSportsman.drawsNumber);
            } else {
              alert("Нет спортсменов");
              navigate(-1);
              return;
            }
          }
        }
      );
    });
  };

  const saveRatings = (id, field, text) => {
    dispatch(
      saveActiveRatingsAnyProgramThunk({
        nameId: nameId,
        changeRating: {
          id: id,
          field: field,
          text: text,
        },
        groupId: groupId,
        disciplineId: disciplineId,
      })
    );
  };

  const saveDD = (id, field, text) => {
    dispatch(
      saveActiveAnyProgramDDThunk({
        nameId: nameId,
        changeRating: {
          id: id,
          dd: field,
          text: text,
        },
        groupId: groupId,
        disciplineId: disciplineId,
      })
    );
  };

  const saveSinxr = (id, field, text) => {
    dispatch(
      saveActiveAnyProgramSinxrThunk({
        nameId: nameId,
        changeRating: {
          id: id,
          sinxr: field,
          text: text,
        },
        groupId: groupId,
        disciplineId: disciplineId,
      })
    );
  };

  const fineRatings = (id, fine, text) => {
    dispatch(
      saveActiveRatingsAnyProgramThunk({
        nameId: nameId,
        changeRating: {
          id: id,
          fine: fine,
          text: text,
        },
        groupId: groupId,
        disciplineId: disciplineId,
      })
    );
  };

  const saveRatingsImpresson = (id, field, text) => {
    dispatch(
      saveActiveRatingsAnyProgramImpressionThunk({
        nameId: nameId,
        changeRating: {
          id: id,
          field: field,
          text: text,
        },
        groupId: groupId,
        disciplineId: disciplineId,
      })
    );
  };

  const fineRatingsImpression = (id, fine, text) => {
    dispatch(
      saveActiveRatingsAnyProgramImpressionThunk({
        nameId: nameId,
        changeRating: {
          id: id,
          fine: fine,
          text: text,
        },
        groupId: groupId,
        disciplineId: disciplineId,
      })
    );
  };

  const saveRatingsElemetImpression = (id, field, item) => {
    dispatch(
      saveActiveRatingsAnyProgramElementImoressionThunk({
        nameId: nameId,
        changeRating: {
          id: id,
          field: field,
          item: item,
        },
        groupId: groupId,
        disciplineId: disciplineId,
      })
    ).then(() => {
      dispatch(ratingsSlicAnyProgrameGetThunk({ groupId, disciplineId })).then(
        (data) => {
          // console.log(data.payload);

          if (data.payload.error || data.payload == undefined) {
            alert("Нет спортсменов");
            navigate(-1);
            return;
          } else {
            if (data.payload.length > 0) {
              const activeSportsman = data.payload.find(
                (item) => item.drawsNumber == activeSportsmanNum
              );
              dispatch(
                activeRatingsSportsmansChange({
                  activeSportsman: activeSportsman,
                })
              );
              setActiveSportsmanNum(activeSportsman.drawsNumber);
            } else {
              alert("Нет спортсменов");
              navigate(-1);
              return;
            }
          }
        }
      );
    });
  };

  const tbodyRef = useRef(null);

  const [changeSize, setChangeSize] = useState(false);

  const checkSize = () => {
    if (tbodyRef.current?.querySelector("tr")) {
      for (let i = 1; i < 10; i++) {
        if (
          tbodyRef.current?.querySelector("tr").getBoundingClientRect().height *
            i >
          400
        ) {
          tbodyRef.current.style.cssText = `height: ${
            tbodyRef.current?.querySelector("tr").getBoundingClientRect()
              .height *
            (i - 1)
          }px`;
          break;
        }
      }
    }
  };

  const onChangeSize = () => {
    setChangeSize(!changeSize);
    if (!changeSize) {
      tbodyRef.current.style.cssText = `height: ${
        tbodyRef.current?.querySelector("tr").getBoundingClientRect().height
      }px`;

      tbodyRef.current
        ?.querySelector(".active")
        .scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const onChangeNumber = (operation) => {
    if (operation === "plus") {
      setActiveSportsmanNum(activeSportsmanNum + 1);
      dispatch(
        activeRatingsSportsmansChange({
          activeSportsman: ratingsSportsmansAnyProgram[activeSportsmanNum],
        })
      );
    } else {
      setActiveSportsmanNum(activeSportsmanNum - 1);
      dispatch(
        activeRatingsSportsmansChange({
          activeSportsman: ratingsSportsmansAnyProgram[activeSportsmanNum - 2],
        })
      );
    }
    dispatch(ratingsSlicAnyProgrameGetThunk({ groupId, disciplineId }));
    setTimeout(() => {
      tbodyRef.current
        ?.querySelector(".active")
        .scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 0);
  };

  useEffect(() => {
    dispatch(ratingsSlicAnyProgrameGetThunk({ groupId, disciplineId })).then(
      (data) => {
        if (
          data.payload.error ||
          (data.payload == undefined && disciplineId != 1)
        ) {
          alert("Нет команд");
          navigate(-1);
          return;
        } else if (
          data.payload.error ||
          (data.payload == undefined && disciplineId == 1)
        ) {
          alert("Нет спортсменов");
          navigate(-1);
          return;
        } else {
          if (data.payload.length > 0) {
            dispatch(
              activeRatingsSportsmansChange({
                activeSportsman: data.payload[0],
              })
            );

            setActiveSportsmanNum(data.payload[0].drawsNumber);
          } else {
            alert("Нет команд");
            navigate(-1);
            return;
          }
        }
      }
    );
    dispatch(elementsOfTechnicalProgramsThunk({ groupId: groupId }));
    dispatch(
      elementsProgramThunk({
        groupId: groupId,
        elementsOfTechnicalProgramId: disciplineId,
      })
    ).then((data) => {
      setArrayBodyText(data.payload);
    });

    return () => {
      dispatch(resetRatingsSportsmans())
    };
  }, []);

  console.log(ratingsSportsmansAnyProgram);
  

  if (activeRatingsSportsmansAnyProgram.id !== 0 && !changeSize) {
    checkSize();
  }

  // console.log(activeRatingsSportsmansAnyProgram);

  return (
    <>
      <Header />
      {activeRatingsSportsmansAnyProgram.id == 0 && disciplineId != 1 ? (
        <div className="container">Нет команды</div>
      ) : activeRatingsSportsmansAnyProgram.id == 0 && disciplineId == 1 ? (
        <div className="container">Нет спортсменов</div>
      ) : disciplineId != 1 ? (
        <div className="ratings">
          <div className="container">
            <HeaderComponent
              title={categories}
              link="/programms/arbitrary-program/ratings-any-program"
            />
            <div className="ratings__container">
              <table className="ratings__table">
                <thead>
                  <tr>
                    <th>старт. №</th>
                    <th>Команда</th>
                    <th>Спортсмен</th>
                    <th>Вне конкурса</th>
                  </tr>
                </thead>
                <tbody ref={tbodyRef}>
                  {ratingsSportsmansAnyProgram.map((item, index) => (
                    <tr
                      onClick={() => {
                        setActiveSportsmanNum(item.drawsNumber);
                        dispatch(
                          activeRatingsSportsmansChange({
                            activeSportsman: ratingsSportsmansAnyProgram[index],
                          })
                        );
                        dispatch(
                          ratingsSlicAnyProgrameGetThunk({
                            groupId,
                            disciplineId,
                          })
                        );
                      }}
                      className={
                        activeSportsmanNum === index + 1 ? "active" : ""
                      }
                      key={item.id}
                    >
                      <td>{item.drawsNumber}</td>
                      <td>{item.anyTeamProgram.team.nameTeam}</td>
                      <td>
                        <div className="ratings__sportsmans">
                          {item.anyTeamProgram.sportsmansArray.map(
                            (sportsman, index) => (
                              <div key={index} className="ratings__sportsman">
                                {sportsman?.surnameAndFirstname}
                              </div>
                            )
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="ratings__checkboxs">
                          {item.anyTeamProgram.outOfCompetitions.map(
                            (outOfCompetition, index) => (
                              <div key={index} className="ratings__checkbox">
                                <label className="custom-checkbox">
                                  <input
                                    type="checkbox"
                                    checked={outOfCompetition}
                                    disabled={true}
                                  ></input>
                                </label>
                              </div>
                            )
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td width={72}>
                      <button
                        onClick={() => onChangeNumber("minus")}
                        className="ratings__table-btn ratings__table-btn-left"
                        disabled={1 === activeSportsmanNum}
                      >
                        <Svg
                          height={24}
                          width={24}
                          name={"arrowRight"}
                          color={"#ffffff"}
                        />
                      </button>
                    </td>
                    <td width={72}>
                      <button
                        onClick={() => onChangeNumber("plus")}
                        className="ratings__table-btn ratings__table-btn-right"
                        disabled={
                          ratingsSportsmansAnyProgram.length ===
                          activeSportsmanNum
                        }
                      >
                        <Svg
                          height={24}
                          width={24}
                          name={"arrowRight"}
                          color={"#ffffff"}
                        />
                      </button>
                    </td>
                    <td colSpan={2}></td>
                    <td width={72}>
                      <button
                        onClick={onChangeSize}
                        className={
                          !changeSize
                            ? "ratings__table-btn ratings__table-btn-up"
                            : "ratings__table-btn ratings__table-btn-up ratings__table-btn-up--active "
                        }
                      >
                        <Svg
                          height={24}
                          width={24}
                          name={"arrowRight"}
                          color={"#ffffff"}
                        />
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>

              {activeRatingsSportsmansAnyProgram.id && (
                <div className="ratings__sportsman-container">
                  <div>
                    {/* <table>
                      <thead>
                        <tr>
                          <th>старт. №</th>
                          <th>Спортсмен</th>
                          <th>Вне конкурса</th>
                          <th>Команда</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>
                            {activeRatingsSportsmansAnyProgram.drawsNumber}
                          </td>
                          <td>
                            {activeRatingsSportsmansAnyProgram.anyTeamProgram.sportsmansArray.map(
                              (sportsman, index) => (
                                <div key={index}>
                                  {sportsman?.surnameAndFirstname}
                                </div>
                              )
                            )}
                          </td>
                          <td>
                            {activeRatingsSportsmansAnyProgram.anyTeamProgram.outOfCompetitions.map(
                              (outOfCompetition, index) => (
                                <div key={index}>
                                  <input
                                    type="checkbox"
                                    checked={outOfCompetition}
                                    disabled={true}
                                  ></input>
                                </div>
                              )
                            )}
                          </td>
                          <td>
                            {
                              activeRatingsSportsmansAnyProgram.anyTeamProgram
                                .team.nameTeam
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table> */}

                    <table className="ratings__sportsman-table">
                      <thead>
                        <tr>
                          {/* <td>№</td> */}
                          <th rowSpan="2" width={368}>
                            ELEMENTS
                          </th>
                          <th rowSpan="2">DD</th>
                          <th rowSpan="2">FC</th>
                          <th className="table__caption" colSpan="5">
                            Судьи
                          </th>
                          <th rowSpan="2">Штраф</th>
                        </tr>
                        <tr>
                          {activeRatingsSportsmansAnyProgram.MPScoreAnyProgramArray[0].scores.map(
                            (score, idx) => (
                              <th key={idx}>{idx + 1}</th>
                            )
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {activeRatingsSportsmansAnyProgram.MPScoreAnyProgramArray.map(
                          (item, idx) => (
                            <tr key={item.id}>
                              {/* <td>
                                <div>{idx + 1}</div>
                              </td> */}
                              <td>
                                {item.elementsProgramId == null ? (
                                  <DropDown
                                    title={{ name: "Элемент" }}
                                    saveItem={(itemElement) => {
                                      saveRatingsElemet(
                                        item.id,
                                        idx,
                                        itemElement
                                      );
                                    }}
                                    items={arrayBodyText}
                                    text={["nameElementProgram", "ratio"]}
                                    returnValue={"id"}
                                    isArrayName={true}
                                  />
                                ) : (
                                  <DropDown
                                    title={{
                                      name: item.elementsProgram
                                        .nameElementProgram,
                                    }}
                                    saveItem={(itemElement) => {
                                      saveRatingsElemet(
                                        item.id,
                                        idx,
                                        itemElement
                                      );
                                    }}
                                    items={arrayBodyText}
                                    text={["nameElementProgram", "ratio"]}
                                    returnValue={"id"}
                                    isArrayName={true}
                                  />
                                )}
                              </td>
                              <td>
                                <NumericFormat
                                  value={item.DD}
                                  decimalSeparator="."
                                  decimalScale={3}
                                  onFocus={(e) => e.target.select()}
                                  onChange={(e) => {
                                    dispatch(
                                      DDChange({
                                        id: item.id,
                                        idActive: activeSportsmanNum,
                                        // DD: idx,
                                        text: Number(e.target.value),
                                      })
                                    );
                                    saveDD(item.id, "DD", e.target.value);
                                  }}
                                  // isAllowed={(values) => {
                                  //   const { value } = values;
                                  //   return value <= 10;
                                  // }}
                                />
                              </td>
                              <td>
                                {item.elementsProgramId &&
                                item.elementsProgram.ratio != null ? (
                                  <input
                                    onChange={() => {}}
                                    value={item.elementsProgram.ratio}
                                    disabled
                                  />
                                ) : (
                                  <input
                                    onChange={() => {}}
                                    value={0}
                                    disabled
                                  />
                                )}
                              </td>
                              {item.scores.map((score, idx) => (
                                <td key={idx}>
                                  <NumericFormat
                                    value={score}
                                    decimalSeparator="."
                                    decimalScale={2}
                                    onFocus={(e) => e.target.select()}
                                    onChange={(e) => {
                                      dispatch(
                                        scoreChange({
                                          id: item.id,
                                          idActive: activeSportsmanNum,
                                          // field: "scoreTwo",
                                          field: idx,
                                          text: Number(e.target.value),
                                        })
                                      );
                                      // saveRatings(item.id, "scoreTwo", e.target.value);
                                      saveRatings(item.id, idx, e.target.value);
                                    }}
                                    isAllowed={(values) => {
                                      const { value } = values;
                                      return value <= 10;
                                    }}
                                  />
                                </td>
                              ))}
                              <td>
                                <NumericFormat
                                  value={item.fine}
                                  decimalSeparator="."
                                  decimalScale={2}
                                  onFocus={(e) => e.target.select()}
                                  onChange={(e) => {
                                    dispatch(
                                      fineChange({
                                        id: item.id,
                                        idActive: activeSportsmanNum,
                                        fine: "fine",
                                        text: Number(e.target.value),
                                      })
                                    );
                                    fineRatings(
                                      item.id,
                                      "fine",
                                      e.target.value
                                    );
                                  }}
                                  isAllowed={(values) => {
                                    const { value } = values;
                                    return value <= 10;
                                  }}
                                />
                              </td>
                            </tr>
                          )
                        )}
                        <tr className="table__header">
                          <td colSpan={9}>IMPRESSION</td>
                        </tr>
                        {activeRatingsSportsmansAnyProgram.MPOneScoreIpressionAnyArray.map(
                          (item, idx) => (
                            <tr key={item.id}>
                              <td>
                                {item.elementsProgramId == null ? (
                                  <DropDown
                                    title={{ name: "Элемент" }}
                                    saveItem={(itemElement) => {
                                      saveRatingsElemetImpression(
                                        item.id,
                                        idx,
                                        itemElement
                                      );
                                    }}
                                    items={arrayBodyText}
                                    text={["nameElementProgram", "ratio"]}
                                    returnValue={"id"}
                                    isArrayName={true}
                                  />
                                ) : (
                                  <DropDown
                                    title={{
                                      name: item.elementsProgram
                                        .nameElementProgram,
                                    }}
                                    saveItem={(itemElement) => {
                                      saveRatingsElemetImpression(
                                        item.id,
                                        idx,
                                        itemElement
                                      );
                                    }}
                                    items={arrayBodyText}
                                    text={["nameElementProgram", "ratio"]}
                                    returnValue={"id"}
                                    isArrayName={true}
                                  />
                                )}
                              </td>
                              <td></td>
                              <td>
                                {item.elementsProgramId ? (
                                  <input
                                    onChange={() => {}}
                                    value={item.elementsProgram.ratio}
                                    disabled
                                  />
                                ) : (
                                  <input
                                    onChange={() => {}}
                                    value={0}
                                    disabled
                                  />
                                )}
                              </td>
                              {item.scores.map((score, idx) => (
                                <td key={idx}>
                                  <NumericFormat
                                    value={score}
                                    decimalSeparator="."
                                    decimalScale={2}
                                    onFocus={(e) => e.target.select()}
                                    onChange={(e) => {
                                      dispatch(
                                        scoreChangeImpression({
                                          id: item.id,
                                          idActive: activeSportsmanNum,
                                          // field: "scoreTwo",
                                          field: idx,
                                          text: Number(e.target.value),
                                        })
                                      );
                                      // saveRatings(item.id, "scoreTwo", e.target.value);
                                      saveRatingsImpresson(
                                        item.id,
                                        idx,
                                        e.target.value
                                      );
                                    }}
                                    isAllowed={(values) => {
                                      const { value } = values;
                                      return value <= 10;
                                    }}
                                  />
                                </td>
                              ))}
                              <td>
                                <NumericFormat
                                  value={item.fine}
                                  decimalSeparator="."
                                  decimalScale={2}
                                  onFocus={(e) => e.target.select()}
                                  onChange={(e) => {
                                    dispatch(
                                      fineChangeImpression({
                                        id: item.id,
                                        idActive: activeSportsmanNum,
                                        fine: "fine",
                                        text: Number(e.target.value),
                                      })
                                    );
                                    fineRatingsImpression(
                                      item.id,
                                      "fine",
                                      e.target.value
                                    );
                                  }}
                                  isAllowed={(values) => {
                                    const { value } = values;
                                    return value <= 10;
                                  }}
                                />
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>

                    <div className="ratings__sinxr">
                      <div className="ratings__sinxr-title">Синхронность</div>
                      <div className="ratings__sinxr-num">
                        <NumericFormat
                          value={activeRatingsSportsmansAnyProgram.sinxr}
                          decimalSeparator="."
                          decimalScale={3}
                          onFocus={(e) => e.target.select()}
                          onChange={(e) => {
                            dispatch(
                              sinxrChange({
                                id: activeRatingsSportsmansAnyProgram.id,
                                idActive: activeSportsmanNum,
                                // DD: idx,
                                text: Number(e.target.value),
                              })
                            );
                            // saveRatings(item.id, "scoreTwo", e.target.value);
                            saveSinxr(
                              activeRatingsSportsmansAnyProgram.id,
                              "sinxr",
                              e.target.value
                            );
                          }}
                          // isAllowed={(values) => {
                          //   const { value } = values;
                          //   return value <= 10;
                          // }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        disciplineId == 1 && (
          <div className="ratings">
            <div className="container">
              <HeaderComponent
                title={categories}
                link="/programms/arbitrary-program/ratings-any-program"
              />
              <div className="ratings__container">
                <table className="ratings__table">
                  <thead>
                    <tr>
                      <th>старт. №</th>
                      <th>Спортсмен</th>
                      <th>Команда</th>
                      <th>Вне конкурса</th>
                    </tr>
                  </thead>
                  <tbody ref={tbodyRef}>
                    {ratingsSportsmansAnyProgram.map((item, index) => (
                      <tr
                        onClick={() => {
                          setActiveSportsmanNum(item.drawsNumber);
                          dispatch(
                            activeRatingsSportsmansChange({
                              activeSportsman:
                                ratingsSportsmansAnyProgram[index],
                            })
                          );
                          dispatch(
                            ratingsSlicAnyProgrameGetThunk({
                              groupId,
                              disciplineId,
                            })
                          );
                        }}
                        className={
                          activeSportsmanNum === index + 1 ? "active" : ""
                        }
                        key={item.id}
                      >
                        <td>{item.drawsNumber}</td>
                        <td>{item.sportsman?.surnameAndFirstname}</td>
                        <td>{item.sportsman.team.nameTeam}</td>
                        <td>
                          <label className="custom-checkbox">
                            <input
                              type="checkbox"
                              checked={item.sportsman.outOfCompetition}
                              disabled={true}
                            ></input>
                          </label>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td width={72}>
                        <button
                          onClick={() => onChangeNumber("minus")}
                          className="ratings__table-btn ratings__table-btn-left"
                          disabled={1 === activeSportsmanNum}
                        >
                          <Svg
                            height={24}
                            width={24}
                            name={"arrowRight"}
                            color={"#ffffff"}
                          />
                        </button>
                      </td>
                      <td width={72}>
                        <button
                          onClick={() => onChangeNumber("plus")}
                          className="ratings__table-btn ratings__table-btn-right"
                          disabled={
                            ratingsSportsmansAnyProgram.length ===
                            activeSportsmanNum
                          }
                        >
                          <Svg
                            height={24}
                            width={24}
                            name={"arrowRight"}
                            color={"#ffffff"}
                          />
                        </button>
                      </td>
                      <td colSpan={2}></td>
                      <td width={72}>
                        <button
                          onClick={onChangeSize}
                          className={
                            !changeSize
                              ? "ratings__table-btn ratings__table-btn-up"
                              : "ratings__table-btn ratings__table-btn-up ratings__table-btn-up--active "
                          }
                        >
                          <Svg
                            height={24}
                            width={24}
                            name={"arrowRight"}
                            color={"#ffffff"}
                          />
                        </button>
                      </td>
                    </tr>
                  </tfoot>
                </table>

                {activeRatingsSportsmansAnyProgram.id && (
                  <div className="ratings__sportsman-container">
                    <div>
                      {/* <table>
                        <thead>
                          <tr>
                            <td>старт. №</td>
                            <td>Спортсмен</td>
                            <td>Вне конкурса</td>
                            <td>Команда</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              {activeRatingsSportsmansAnyProgram.drawsNumber}
                            </td>
                            <td>
                              {
                                activeRatingsSportsmansAnyProgram.sportsman
                                  ?.surnameAndFirstname
                              }
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                checked={
                                  activeRatingsSportsmansAnyProgram.sportsman
                                    .outOfCompetition
                                }
                                disabled={true}
                              ></input>
                            </td>
                            <td>
                              {
                                activeRatingsSportsmansAnyProgram.sportsman.team
                                  .nameTeam
                              }
                            </td>
                          </tr>
                        </tbody>
                      </table> */}

                      <table className="ratings__sportsman-table">
                        <thead>
                          <tr>
                            {/* <td>№</td> */}
                            <th rowSpan="2" width={368}>
                              ELEMENTS
                            </th>
                            <th rowSpan="2">DD</th>
                            <th rowSpan="2">FC</th>
                            <th className="table__caption" colSpan="5">
                              Судьи
                            </th>
                            <th rowSpan="2">Штраф</th>
                          </tr>
                          <tr>
                            {activeRatingsSportsmansAnyProgram.MPScoreAnyProgramArray[0].scores.map(
                              (score, idx) => (
                                <th key={idx}>{idx + 1}</th>
                              )
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {activeRatingsSportsmansAnyProgram.MPScoreAnyProgramArray.map(
                            (item, idx) => (
                              <tr key={item.id}>
                                {/* <td>
                                  <div>{idx + 1}</div>
                                </td> */}
                                <td>
                                  {item.elementsProgramId == null ? (
                                    <DropDown
                                      title={{ name: "Элемент" }}
                                      saveItem={(itemElement) => {
                                        saveRatingsElemet(
                                          item.id,
                                          idx,
                                          itemElement
                                        );
                                      }}
                                      items={arrayBodyText}
                                      text={["nameElementProgram", "ratio"]}
                                      returnValue={"id"}
                                      isArrayName={true}
                                    />
                                  ) : (
                                    <DropDown
                                      title={{
                                        name: item.elementsProgram
                                          .nameElementProgram,
                                      }}
                                      saveItem={(itemElement) => {
                                        saveRatingsElemet(
                                          item.id,
                                          idx,
                                          itemElement
                                        );
                                      }}
                                      items={arrayBodyText}
                                      text={["nameElementProgram", "ratio"]}
                                      returnValue={"id"}
                                      isArrayName={true}
                                    />
                                  )}
                                </td>
                                <td>
                                  <NumericFormat
                                    value={item.DD}
                                    decimalSeparator="."
                                    decimalScale={2}
                                    onFocus={(e) => e.target.select()}
                                    onChange={(e) => {
                                      dispatch(
                                        DDChange({
                                          id: item.id,
                                          idActive: activeSportsmanNum,
                                          // DD: idx,
                                          text: Number(e.target.value),
                                        })
                                      );
                                      saveDD(item.id, "DD", e.target.value);
                                    }}
                                    // isAllowed={(values) => {
                                    //   const { value } = values;
                                    //   return value <= 10;
                                    // }}
                                  />
                                </td>
                                <td>
                                  {item.elementsProgramId ? (
                                    <input
                                      onChange={() => {}}
                                      value={item.elementsProgram.ratio}
                                      disabled
                                    />
                                  ) : (
                                    <input
                                      onChange={() => {}}
                                      value={0}
                                      disabled
                                    />
                                  )}
                                </td>
                                {item.scores.map((score, idx) => (
                                  <td key={idx}>
                                    <NumericFormat
                                      value={score}
                                      decimalSeparator="."
                                      decimalScale={2}
                                      onFocus={(e) => e.target.select()}
                                      onChange={(e) => {
                                        dispatch(
                                          scoreChange({
                                            id: item.id,
                                            idActive: activeSportsmanNum,
                                            // field: "scoreTwo",
                                            field: idx,
                                            text: Number(e.target.value),
                                          })
                                        );
                                        // saveRatings(item.id, "scoreTwo", e.target.value);
                                        saveRatings(
                                          item.id,
                                          idx,
                                          e.target.value
                                        );
                                      }}
                                      // isAllowed={(values) => {
                                      //   const { value } = values;
                                      //   return value <= 10;
                                      // }}
                                    />
                                  </td>
                                ))}
                                <td>
                                  <NumericFormat
                                    value={item.fine}
                                    decimalSeparator="."
                                    decimalScale={2}
                                    onFocus={(e) => e.target.select()}
                                    onChange={(e) => {
                                      dispatch(
                                        fineChange({
                                          id: item.id,
                                          idActive: activeSportsmanNum,
                                          fine: "fine",
                                          text: Number(e.target.value),
                                        })
                                      );
                                      fineRatings(
                                        item.id,
                                        "fine",
                                        e.target.value
                                      );
                                    }}
                                    isAllowed={(values) => {
                                      const { value } = values;
                                      return value <= 10;
                                    }}
                                  />
                                </td>
                              </tr>
                            )
                          )}
                          <tr className="table__header">
                            <td colSpan={9}>IMPRESSION</td>
                          </tr>
                          {activeRatingsSportsmansAnyProgram.MPOneScoreIpressionAnyArray.map(
                            (item, idx) => (
                              <tr key={item.id}>
                                <td>
                                  {item.elementsProgramId == null ? (
                                    <DropDown
                                      title={{ name: "Элемент" }}
                                      saveItem={(itemElement) => {
                                        saveRatingsElemetImpression(
                                          item.id,
                                          idx,
                                          itemElement
                                        );
                                      }}
                                      items={arrayBodyText}
                                      text={["nameElementProgram", "ratio"]}
                                      returnValue={"id"}
                                      isArrayName={true}
                                    />
                                  ) : (
                                    <DropDown
                                      title={{
                                        name: item.elementsProgram
                                          .nameElementProgram,
                                      }}
                                      saveItem={(itemElement) => {
                                        saveRatingsElemetImpression(
                                          item.id,
                                          idx,
                                          itemElement
                                        );
                                      }}
                                      items={arrayBodyText}
                                      text={["nameElementProgram", "ratio"]}
                                      returnValue={"id"}
                                      isArrayName={true}
                                    />
                                  )}
                                </td>
                                <td></td>
                                <td>
                                  {item.elementsProgramId ? (
                                    <input
                                      onChange={() => {}}
                                      value={item.elementsProgram.ratio}
                                      disabled
                                    />
                                  ) : (
                                    <input
                                      onChange={() => {}}
                                      value={0}
                                      disabled
                                    />
                                  )}
                                </td>
                                {item.scores.map((score, idx) => (
                                  <td key={idx}>
                                    <NumericFormat
                                      value={score}
                                      decimalSeparator="."
                                      decimalScale={2}
                                      onFocus={(e) => e.target.select()}
                                      onChange={(e) => {
                                        dispatch(
                                          scoreChangeImpression({
                                            id: item.id,
                                            idActive: activeSportsmanNum,
                                            // field: "scoreTwo",
                                            field: idx,
                                            text: Number(e.target.value),
                                          })
                                        );
                                        // saveRatings(item.id, "scoreTwo", e.target.value);
                                        saveRatingsImpresson(
                                          item.id,
                                          idx,
                                          e.target.value
                                        );
                                      }}
                                      isAllowed={(values) => {
                                        const { value } = values;
                                        return value <= 10;
                                      }}
                                    />
                                  </td>
                                ))}
                                <td>
                                  <NumericFormat
                                    value={item.fine}
                                    decimalSeparator="."
                                    decimalScale={2}
                                    onFocus={(e) => e.target.select()}
                                    onChange={(e) => {
                                      dispatch(
                                        fineChangeImpression({
                                          id: item.id,
                                          idActive: activeSportsmanNum,
                                          fine: "fine",
                                          text: Number(e.target.value),
                                        })
                                      );
                                      fineRatingsImpression(
                                        item.id,
                                        "fine",
                                        e.target.value
                                      );
                                    }}
                                    isAllowed={(values) => {
                                      const { value } = values;
                                      return value <= 10;
                                    }}
                                  />
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>

                      <div className="ratings__sinxr">
                        <div className="ratings__sinxr-title">Синхронность</div>
                        <div className="ratings__sinxr-num">
                          <NumericFormat
                            value={activeRatingsSportsmansAnyProgram.sinxr}
                            decimalSeparator="."
                            decimalScale={2}
                            onFocus={(e) => e.target.select()}
                            onChange={(e) => {
                              dispatch(
                                sinxrChange({
                                  id: activeRatingsSportsmansAnyProgram.id,
                                  idActive: activeSportsmanNum,
                                  // DD: idx,
                                  text: Number(e.target.value),
                                })
                              );
                              // saveRatings(item.id, "scoreTwo", e.target.value);
                              saveSinxr(
                                activeRatingsSportsmansAnyProgram.id,
                                "sinxr",
                                e.target.value
                              );
                            }}
                            // isAllowed={(values) => {
                            //   const { value } = values;
                            //   return value <= 10;
                            // }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      )}

      {/* <Footer /> */}
    </>
  );
};

export default RatingsAnyProgaram;
