import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import {
  activeDrawAnyProgramThunk,
  changeManuallyDrawAnyProgram,
  changeManuallyDrawAnyProgramThunk,
  drawAnyProgramSliceGetThunk,
  drawAnyProgramSliceSaveThunk,
  resetDrawAnyProgramThunk,
} from "../../redux/drawAnyProgram/drawAnyProgramSlice";
import HeaderComponent from "../components/HeaderComponent";
import Svg from "../../assets/svg/Svg";

const TheDrawAnyProgram = () => {
  let data = useLocation();
  const navigate = useNavigate();
  const { nameId, groupId, disciplineId, categories } = data.state;

  console.log({ nameId, groupId, disciplineId });

  // nameId: 'Юниоры',
  // groupId: 3,
  // disciplineId: 4,

  const [manually, setManually] = useState(true);
  const [test, setTest] = useState(true);

  const dispatch = useDispatch();
  const { draws, isLoading, isLoadingActive } = useAppSelector(
    (state) => state.drawAnyProgramSlice
  );

  console.log(draws);

  const getRandomNumber = (min, max) => {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  };

  const [activeDraw, setActiveDraw] = useState(0);

  const draw = async () => {
    if (draws.teamsArray) {
      let drawArray = Array.from(
        { length: draws.teamsArray.length },
        (_, index) => index + 1
      );

      let drawArrayNew = [];

      for (let i = 0; i < draws.teamsArray.length; i++) {
        let number = getRandomNumber(0, drawArray.length - 1);
        drawArrayNew.push(drawArray[number]);
        drawArray.splice(number, 1);
      }

      let drawOneNew = drawArrayNew;
      drawArray = Array.from(
        { length: draws.teamsArray.length },
        (_, index) => index + 1
      );
      drawArrayNew = [];

      for (let i = 0; i < draws.teamsArray.length; i++) {
        let number = getRandomNumber(0, drawArray.length - 1);
        drawArrayNew.push(drawArray[number]);
        drawArray.splice(number, 1);
      }

      let drawTwoNew = drawArrayNew;
      drawArray = Array.from(
        { length: draws.teamsArray.length },
        (_, index) => index + 1
      );
      drawArrayNew = [];

      for (let i = 0; i < draws.teamsArray.length; i++) {
        let number = getRandomNumber(0, drawArray.length - 1);
        drawArrayNew.push(drawArray[number]);
        drawArray.splice(number, 1);
      }

      let drawThreeNew = drawArrayNew;

      const draw = {
        nameId: nameId,
        groupId: groupId,
        disciplineId: disciplineId,
        drawOne: drawOneNew,
        drawTwo: drawTwoNew,
        drawThree: drawThreeNew,
      };

      dispatch(drawAnyProgramSliceSaveThunk(draw));
    } else {
      let drawArray = Array.from(
        { length: draws.sportsmansArray.length },
        (_, index) => index + 1
      );

      let drawArrayNew = [];

      for (let i = 0; i < draws.sportsmansArray.length; i++) {
        let number = getRandomNumber(0, drawArray.length - 1);
        drawArrayNew.push(drawArray[number]);
        drawArray.splice(number, 1);
      }

      let drawOneNew = drawArrayNew;
      drawArray = Array.from(
        { length: draws.sportsmansArray.length },
        (_, index) => index + 1
      );
      drawArrayNew = [];

      for (let i = 0; i < draws.sportsmansArray.length; i++) {
        let number = getRandomNumber(0, drawArray.length - 1);
        drawArrayNew.push(drawArray[number]);
        drawArray.splice(number, 1);
      }

      let drawTwoNew = drawArrayNew;
      drawArray = Array.from(
        { length: draws.sportsmansArray.length },
        (_, index) => index + 1
      );
      drawArrayNew = [];

      for (let i = 0; i < draws.sportsmansArray.length; i++) {
        let number = getRandomNumber(0, drawArray.length - 1);
        drawArrayNew.push(drawArray[number]);
        drawArray.splice(number, 1);
      }

      let drawThreeNew = drawArrayNew;

      const draw = {
        nameId: nameId,
        groupId: groupId,
        disciplineId: disciplineId,
        drawOne: drawOneNew,
        drawTwo: drawTwoNew,
        drawThree: drawThreeNew,
      };

      dispatch(drawAnyProgramSliceSaveThunk(draw));
    }
  };

  const activeDrawFunc = (num) => {
    if (draws.drawOne.length == 0) {
      alert("Проведите жеребьевку!");
      setActiveDraw(0);
    } else {
      setActiveDraw(num);
      const draw = {
        nameId: nameId,
        groupId: groupId,
        disciplineId: disciplineId,
        activeDraw: num,
      };
      dispatch(activeDrawAnyProgramThunk(draw));
    }
  };

  const resetDraw = () => {
    const draw = {
      nameId: nameId,
      groupId: groupId,
      disciplineId: disciplineId,
      activeDraw: null,
    };
    dispatch(resetDrawAnyProgramThunk(draw)).then(() => {
      setActiveDraw(0);
    });
  };

  const changeManuallyDrawFunc = (e, num, index) => {
    const draw = {
      nameId: nameId,
      groupId: groupId,
      disciplineId: disciplineId,
      drawChange: num,
      drawPositionChange: index,
      drawValueChange: Number(e),
    };
    dispatch(changeManuallyDrawAnyProgram(draw));
    dispatch(changeManuallyDrawAnyProgramThunk(draw)).then((data) => {
      if (data.payload.message) {
        alert(data.payload.message);
      }
    });
  };

  useEffect(() => {
    let changeLocation = () => {
      alert("Вы не выбрали жеребьевку!");
    };

    dispatch(
      drawAnyProgramSliceGetThunk({ nameId, groupId, disciplineId })
    ).then((data) => {
      if (data.payload.teamsArray && data.payload.teamsArray.length === 0) {
        alert("Команд нет");
        navigate(-1);
        return;
      }
      if (
        data.payload.sportsmansArray &&
        data.payload.sportsmansArray.length === 0
      ) {
        alert("Спортсменов нет");
        navigate(-1);
        return;
      } else {
        if (activeDraw == 0) {
          window.addEventListener("popstate", changeLocation);
        }
      }

      if (data.payload.activeDraw) {
        setActiveDraw(data.payload.activeDraw);
      }
    });

    return () => {
      setTimeout(() => {
        window.removeEventListener("popstate", changeLocation);
      }, 0);
    };
  }, []);

  console.log(draws);

  return (
    <>
      <Header />
      {draws.teamsArray && draws.teamsArray.length == 0 ? (
        <div className="container">Нет команды</div>
      ) : draws.sportsmansArray && draws.sportsmansArray.length == 0 ? (
        <div className="container">Нет спортсменов</div>
      ) : (
        <div className="the-draw">
          <div className="container">
            <HeaderComponent
              title={categories}
              link="/programms/arbitrary-program/the-draw-any-program"
            />
            <table>
              <thead>
                <tr className="the-draw__thead-start">
                  <th colSpan={3}>Стартовый номер</th>
                </tr>
                <tr className="the-draw__thead-main">
                  <th
                    onClick={() => {
                      if (!isLoadingActive) {
                        activeDrawFunc(1);
                      }
                    }}
                    className={
                      isLoadingActive
                        ? "the-draw__checked the-draw__checked--loading"
                        : activeDraw === 1
                        ? "the-draw__checked the-draw__checked--active"
                        : "the-draw__checked"
                    }
                  >
                    <div className="the-draw__checked-container">
                      1
                      <div className="custom-radio">
                        <input
                          type="radio"
                          name="draw"
                          onChange={() => {}}
                          checked={activeDraw === 1}
                        />
                      </div>
                    </div>
                  </th>
                  <th
                    onClick={() => {
                      if (!isLoadingActive) {
                        activeDrawFunc(2);
                      }
                    }}
                    className={
                      isLoadingActive
                        ? "the-draw__checked the-draw__checked--loading"
                        : activeDraw === 2
                        ? "the-draw__checked the-draw__checked--active"
                        : "the-draw__checked"
                    }
                  >
                    <div className="the-draw__checked-container">
                      2
                      <div className="custom-radio">
                        <input
                          type="radio"
                          name="draw"
                          onChange={() => {}}
                          checked={activeDraw === 2}
                        />
                      </div>
                    </div>
                  </th>
                  <th
                    onClick={() => {
                      if (!isLoadingActive) {
                        activeDrawFunc(3);
                      }
                    }}
                    className={
                      isLoadingActive
                        ? "the-draw__checked the-draw__checked--loading"
                        : activeDraw === 3
                        ? "the-draw__checked the-draw__checked--active"
                        : "the-draw__checked"
                    }
                  >
                    <div className="the-draw__checked-container">
                      3
                      <div className="custom-radio">
                        <input
                          type="radio"
                          name="draw"
                          checked={activeDraw === 3}
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                  </th>
                  <th>Фамилия Имя</th>
                  <th>Наименования</th>
                </tr>
              </thead>
              <tbody>
                {!isLoading &&
                  draws.teamsArray &&
                  draws?.teamsArray.map((team, index) => (
                    <tr key={team.id}>
                      <td
                        width={80}
                        className={
                          activeDraw === 1
                            ? "the-draw__cell the-draw__cell--active"
                            : "the-draw__cell"
                        }
                      >
                        <input
                          onChange={(e) => {
                            let value =
                              e.target.value >= draws?.teamsArray.length
                                ? draws?.teamsArray.length
                                : e.target.value;
                            changeManuallyDrawFunc(value, "drawOne", index);
                          }}
                          type="number"
                          value={draws.drawOne[index] ?? ""}
                          disabled={manually}
                          min={1}
                          max={draws?.teamsArray.length}
                        />
                      </td>
                      <td
                        width={80}
                        className={
                          activeDraw === 2
                            ? "the-draw__cell the-draw__cell--active"
                            : "the-draw__cell"
                        }
                      >
                        <input
                          onChange={(e) => {
                            let value =
                              e.target.value >= draws?.teamsArray.length
                                ? draws?.teamsArray.length
                                : e.target.value;
                            changeManuallyDrawFunc(value, "drawTwo", index);
                          }}
                          type="number"
                          value={draws.drawTwo[index] ?? ""}
                          disabled={manually}
                          min={1}
                          max={draws?.teamsArray.length}
                        />
                      </td>
                      <td
                        width={80}
                        className={
                          activeDraw === 3
                            ? "the-draw__cell the-draw__cell--active"
                            : "the-draw__cell"
                        }
                      >
                        <input
                          onChange={(e) => {
                            let value =
                              e.target.value >= draws?.teamsArray.length
                                ? draws?.teamsArray.length
                                : e.target.value;

                            changeManuallyDrawFunc(value, "drawThree", index);
                          }}
                          type="number"
                          value={draws.drawThree[index] ?? ""}
                          disabled={manually}
                          min={1}
                          max={draws?.teamsArray.length}
                        />
                      </td>
                      <td>
                        {team.sportsmansArray.map((sportsman, index) => (
                          <div key={index}>
                            {sportsman?.surnameAndFirstname}
                          </div>
                        ))}
                      </td>
                      <td>{team.team.nameTeam}</td>
                    </tr>
                  ))}
              </tbody>
              <tbody>
                {!isLoading &&
                  draws.sportsmansArray &&
                  draws?.sportsmansArray.map((sportsman, index) => (
                    <tr key={sportsman.id}>
                      <td
                        width={80}
                        className={
                          activeDraw === 1
                            ? "the-draw__cell the-draw__cell--active"
                            : "the-draw__cell"
                        }
                      >
                        <input
                          onChange={(e) => {
                            let value =
                              e.target.value >= draws?.sportsmansArray.length
                                ? draws?.sportsmansArray.length
                                : e.target.value;
                            changeManuallyDrawFunc(value, "drawOne", index);
                          }}
                          type="number"
                          value={
                            draws.drawOne[index] !== 0
                              ? draws.drawOne[index]
                              : ""
                          }
                          disabled={manually}
                          min={1}
                          max={draws?.sportsmansArray.length}
                        />
                      </td>
                      <td
                        width={80}
                        className={
                          activeDraw === 2
                            ? "the-draw__cell the-draw__cell--active"
                            : "the-draw__cell"
                        }
                      >
                        <input
                          onChange={(e) => {
                            let value =
                              e.target.value >= draws?.sportsmansArray.length
                                ? draws?.sportsmansArray.length
                                : e.target.value;
                            changeManuallyDrawFunc(value, "drawTwo", index);
                          }}
                          type="number"
                          value={
                            draws.drawTwo[index] !== 0
                              ? draws.drawTwo[index]
                              : ""
                          }
                          disabled={manually}
                          min={1}
                          max={draws?.sportsmansArray.length}
                        />
                      </td>
                      <td
                        width={80}
                        className={
                          activeDraw === 3
                            ? "the-draw__cell the-draw__cell--active"
                            : "the-draw__cell"
                        }
                      >
                        <input
                          onChange={(e) => {
                            let value =
                              e.target.value >= draws?.sportsmansArray.length
                                ? draws?.sportsmansArray.length
                                : e.target.value;

                            changeManuallyDrawFunc(value, "drawThree", index);
                          }}
                          type="number"
                          value={
                            draws.drawThree[index] !== 0
                              ? draws.drawThree[index]
                              : ""
                          }
                          disabled={manually}
                          min={1}
                          max={draws?.sportsmansArray.length}
                        />
                      </td>
                      <td>
                        {/* {sportsman.sportsmansArray.map((sportsman) => (
                          <div key={sportsman.id}>
                            {sportsman.surnameAndFirstname}
                          </div>
                        ))} */}
                        {sportsman.surnameAndFirstname}
                      </td>
                      <td>{sportsman.team.nameTeam}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="the-draw__btns">
              <button
                className="the-draw__btn the-draw__btn-spend"
                onClick={() => {
                  draw();
                }}
              >
                Провести жеребьевку
                <Svg name={"checked"} width={24} height={24} />
              </button>
              <button
                className="the-draw__btn the-draw__btn-reset"
                onClick={() => {
                  resetDraw();
                }}
              >
                Обнулить жеребьевку
                <Svg name={"remove"} width={24} height={24} color={"#DD554B"} />
              </button>
              {/* <button
              onClick={() => {
                setManually(!manually);
              }}
            >
              Ввести в ручную
            </button> */}
              {/* <button
            onClick={() => {
              activeDrawFunc(activeDraw);
            }}
          >
            Обновить жеребьевку
          </button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TheDrawAnyProgram;
