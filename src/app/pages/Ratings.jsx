import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  ratingsSliceGetThunk,
  scoreChange,
  activeRatingsSportsmansChange,
  saveActiveRatingsThunk,
  fineChange,
} from "../../redux/ratings/ratingsSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import Svg from "../../assets/svg/Svg";
import HeaderComponent from "../components/HeaderComponent";

const Ratings = () => {
  const navigate = useNavigate();
  let data = useLocation();
  const { nameId,categories } = data.state;
  const dispatch = useAppDispatch();
  const { ratingsSportsmans, activeRatingsSportsmans, isLoading } =
    useAppSelector((state) => state.ratingsSlice);

  const tbodyRef = useRef(null);

  const [activeSportsmanNum, setActiveSportsmanNum] = useState(0);
  const [isLoadComponent, setIsLoadComponent] = useState(false);
  // const [activeSportsman, setActiveSportsman] = useState(null);

  const saveRatings = (id, field, text) => {
    dispatch(
      saveActiveRatingsThunk({
        nameId: nameId,
        changeRating: {
          id: id,
          field: field,
          text: text,
        },
      })
    );
  };

  const fineRatings = (id, fine, text) => {
    dispatch(
      saveActiveRatingsThunk({
        nameId: nameId,
        changeRating: {
          id: id,
          fine: fine,
          text: text,
        },
      })
    );
  };

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
          activeSportsman: ratingsSportsmans[activeSportsmanNum],
        })
      );
    } else {
      setActiveSportsmanNum(activeSportsmanNum - 1);
      dispatch(
        activeRatingsSportsmansChange({
          activeSportsman: ratingsSportsmans[activeSportsmanNum - 2],
        })
      );
    }
    dispatch(ratingsSliceGetThunk(nameId));
    setTimeout(() => {
      tbodyRef.current
        ?.querySelector(".active")
        .scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 0);
  };

  useEffect(() => {
    setIsLoadComponent(true);
    dispatch(ratingsSliceGetThunk(nameId)).then((data) => {
      console.log(data.payload);

      if (data.payload.error || data.payload == undefined) {
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
          alert("Нет спортсменов");
          navigate(-1);
          return;
        }
      }
    });
  }, []);

  if (activeRatingsSportsmans.id !== 0 && !changeSize) {
    checkSize();
  }

  console.log(activeRatingsSportsmans);

  return (
    <>
      <Header />

      {activeRatingsSportsmans.id == 0 ? (
        <div className="container">Нет команды</div>
      ) : (
        <div className="ratings">
          <div className="container">
            <HeaderComponent
              title={categories}
              link="/programms/mandatory-program/ratings"
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
                  {ratingsSportsmans.map((item, index) => (
                    <tr
                      onClick={() => {
                        setActiveSportsmanNum(item.drawsNumber);
                        dispatch(
                          activeRatingsSportsmansChange({
                            activeSportsman: ratingsSportsmans[index],
                          })
                        );
                        dispatch(ratingsSliceGetThunk(nameId));
                      }}
                      className={
                        activeSportsmanNum === index + 1 ? "active" : ""
                      }
                      key={item.id}
                    >
                      <td>{item.drawsNumber}</td>
                      <td>{item.sportsman.surnameAndFirstname}</td>
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
                          ratingsSportsmans.length === activeSportsmanNum
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

              {activeRatingsSportsmans.id && (
                <div className="ratings__sportsman">
                  <div className="ratings__sportsman-container">
                    {/* <ul>
                      <li>
                        <span>Ст.н</span>
                        <span>{activeRatingsSportsmans.drawsNumber}</span>
                      </li>
                      <li>
                        <span>Ф.И.</span>
                        <span>
                          {
                            activeRatingsSportsmans.sportsman
                              .surnameAndFirstname
                          }
                        </span>
                      </li>
                      <li>
                        <span>Команда</span>
                        <span>
                          {activeRatingsSportsmans.sportsman.team.nameTeam}
                        </span>
                      </li>
                      <li>
                        <span>В/К</span>
                        <span>
                          <input
                            type="checkbox"
                            checked={
                              activeRatingsSportsmans.sportsman.outOfCompetition
                            }
                            disabled={true}
                          />
                        </span>
                      </li>
                    </ul> */}

                    <table>
                      <thead>
                        <tr>
                          <th>Фигура</th>
                          {activeRatingsSportsmans.MPScoreArray[0].scores.map(
                            (score, idx) => (
                              <th key={idx}>Судья {idx + 1}</th>
                            )
                          )}
                          {/* <td>Судья1</td>
                      <td>Судья2</td>
                      <td>Судья3</td>
                      <td>Судья4</td>
                      <td>Судья5</td>
                      <td>Судья6</td>
                      <td>Судья7</td> */}
                          <th>Штраф</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeRatingsSportsmans.MPScoreArray.map(
                          (item, idx) => (
                            <tr key={item.id}>
                              <td>{item.subgroupFigure.figureName}</td>
                              {item.scores.map((score, idx) => (
                                <td key={idx}>
                                  <NumericFormat
                                    value={score}
                                    decimalSeparator="."
                                    decimalScale={1}
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
                                  decimalScale={1}
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
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* <Footer /> */}
    </>
  );
};

export default Ratings;
