import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import DropDown from "../item/DropDown";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import {
  anyTeamProgramSliceCreateThunk,
  anyTeamProgramSliceDeleteSportsmanThunk,
  anyTeamProgramSliceDeleteTeamThunk,
  anyTeamProgramSliceGetTeamsThunk,
  anyTeamProgramSliceGetThunk,
  anyTeamProgramSlicePostSportsmanThunk,
  anyTeamProgramSlicePutOutOfCompetitionThunk,
  anyTeamProgramSlicePutSportsmanOutOfCompetitionThunk,
  anyTeamProgramSlicePutSportsmanThunk,
  anyTeamProgramSlicePutThunk,
} from "../../redux/anyTeamProgram/anyTeamProgramSlice";
import HeaderComponent from "../components/HeaderComponent";
import Svg from "../../assets/svg/Svg";

const AnyProgramTeam = () => {
  let data = useLocation();
  const navigate = useNavigate();
  const {
    anyTeamProgram,
    anyTeamProgramYears,
    anyTeamProgramName,
    anyTeamProgramYearsName,
    categories,
  } = data.state;

  //   anyTeamProgram: 4,
  //   anyTeamProgramYears: 3,
  //   anyTeamProgramName: 'Комби',
  //   anyTeamProgramYars: 'Юниоры',

  const dispatch = useDispatch();

  const { anyTeamPrograms, teams } = useAppSelector(
    (state) => state.anyTeamProgramSlice
  );

  const putTeamItem = (anyTeamProgramsId, teamId) => {
    dispatch(anyTeamProgramSlicePutThunk({ anyTeamProgramsId, teamId })).then(
      () => {
        dispatch(
          anyTeamProgramSliceGetThunk({ anyTeamProgram, anyTeamProgramYears })
        );
      }
    );
  };

  const createAnyTeamProgram = (teamId) => {
    let creatyAnyTeamProgram = {
      anyTeamProgram: anyTeamProgram,
      anyTeamProgramYears: anyTeamProgramYears,
      teamId: teamId,
    };

    dispatch(anyTeamProgramSliceCreateThunk(creatyAnyTeamProgram)).then(() => {
      dispatch(
        anyTeamProgramSliceGetThunk({ anyTeamProgram, anyTeamProgramYears })
      );
    });
  };

  const createAnyTeamProgramSporstsman = (teamId) => {
    dispatch(anyTeamProgramSlicePostSportsmanThunk(teamId)).then(() => {
      dispatch(
        anyTeamProgramSliceGetThunk({ anyTeamProgram, anyTeamProgramYears })
      );
    });
  };

  const deleteAnyTeamProgramSporstsman = (sportsman) => {
    dispatch(anyTeamProgramSliceDeleteSportsmanThunk(sportsman)).then(() => {
      dispatch(
        anyTeamProgramSliceGetThunk({ anyTeamProgram, anyTeamProgramYears })
      );
    });
  };

  const deleteAnyTeamProgramTeam = (id) => {
    dispatch(anyTeamProgramSliceDeleteTeamThunk(id)).then(() => {
      dispatch(
        anyTeamProgramSliceGetThunk({ anyTeamProgram, anyTeamProgramYears })
      );
    });
  };

  const saveAnyTeamProgramSportsman = (
    anyTeamProgramsId,
    sportsmanId,
    index
  ) => {
    dispatch(
      anyTeamProgramSlicePutSportsmanThunk({
        anyTeamProgramsId,
        sportsmanId,
        index,
      })
    ).then(() => {
      dispatch(
        anyTeamProgramSliceGetThunk({ anyTeamProgram, anyTeamProgramYears })
      );
    });
  };

  const saveAnyTeamProgramOutOfCompetition = (
    anyTeamProgramsId,
    checked,
    index
  ) => {
    dispatch(
      anyTeamProgramSlicePutSportsmanOutOfCompetitionThunk({
        anyTeamProgramsId,
        checked,
        index,
      })
    ).then(() => {
      dispatch(
        anyTeamProgramSliceGetThunk({ anyTeamProgram, anyTeamProgramYears })
      );
    });
  };

  const saveAnyTeamProgramReserve = (anyTeamProgramsId, checked, index) => {
    dispatch(
      anyTeamProgramSlicePutOutOfCompetitionThunk({
        anyTeamProgramsId,
        checked,
        index,
      })
    ).then(() => {
      dispatch(
        anyTeamProgramSliceGetThunk({ anyTeamProgram, anyTeamProgramYears })
      );
    });
  };

  useEffect(() => {
    dispatch(
      anyTeamProgramSliceGetTeamsThunk({ anyTeamProgramYears, anyTeamProgram })
    ).then((data) => {
      if (data.payload.length == 0) {
        alert("Нет команд");
        navigate(-1);
        return;
      } else {
        dispatch(
          anyTeamProgramSliceGetThunk({ anyTeamProgram, anyTeamProgramYears })
        ).then((dataGet) => {
          if (dataGet.payload.length == 0) {
            createAnyTeamProgram();
          }
        });
      }
    });
  }, [dispatch]);

  console.log(anyTeamPrograms);

  return (
    <>
      <Header />

      <div className="any-program-team">
        <div className="container">
          <HeaderComponent
            title={categories}
            link="/programms/arbitrary-program/any-team-program"
          />
          <div className="any-program-team__container">
            <table className="any-program-team__table">
              <thead>
                <tr>
                  <th>Команда</th>
                  <th>Резерв</th>
                  <th>Спортсмен</th>
                  <th>Вне конкруса</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {anyTeamPrograms &&
                  anyTeamPrograms.map((program, index) => (
                    <tr key={index}>
                      <td>
                        {program.team == null ? (
                          <DropDown
                            title={{ name: "Команда" }}
                            saveItem={(item) => {
                              putTeamItem(program.id, item.id);
                            }}
                            items={teams}
                            text={"nameTeam"}
                            returnValue={"id"}
                          />
                        ) : (
                          <DropDown
                            title={{
                              name: program.team.nameTeam,
                            }}
                            saveItem={(item) => {
                              putTeamItem(program.id, item.id);
                            }}
                            items={teams}
                            text={"nameTeam"}
                            returnValue={"id"}
                          />
                        )}
                      </td>
                      <td>
                        <label className="custom-checkbox">
                          <input
                            type="checkbox"
                            checked={program.outOfCompetitions}
                            value={program.outOfCompetitions}
                            onChange={(e) =>
                              saveAnyTeamProgramOutOfCompetition(
                                program.id,
                                e.target.checked,
                                index
                              )
                            }
                          />
                        </label>
                      </td>
                      <td>
                        {program.teamId > 0 && (
                          <div>
                            <ul
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                              }}
                              className="any-program-team__list"
                            >
                              {program.sportsmans.map((sportsman, index) => (
                                <li
                                  className="any-program-team__sportsman"
                                  key={index}
                                >
                                  {sportsman ? (
                                    <DropDown
                                      title={{
                                        name: sportsman.surnameAndFirstname,
                                      }}
                                      saveItem={(item) => {
                                        saveAnyTeamProgramSportsman(
                                          program.id,
                                          item.id,
                                          index
                                        );
                                      }}
                                      items={program.team.sportsmansArray}
                                      text={"surnameAndFirstname"}
                                      returnValue={"id"}
                                      isSearch={true}
                                    />
                                  ) : (
                                    <DropDown
                                      title={{ name: "Спортсмен" }}
                                      saveItem={(item) => {
                                        console.log(item);
                                        saveAnyTeamProgramSportsman(
                                          program.id,
                                          item.id,
                                          index
                                        );
                                      }}
                                      items={program.team.sportsmansArray}
                                      text={"surnameAndFirstname"}
                                      returnValue={"id"}
                                      isSearch={true}
                                    />
                                  )}

                                  <button
                                    className="btn__remove"
                                    onClick={() =>
                                      deleteAnyTeamProgramSporstsman({
                                        programId: program.id,
                                        spotsmanIndex: index,
                                      })
                                    }
                                  >
                                    <Svg
                                      name={"remove"}
                                      width={24}
                                      height={24}
                                      color={"#3361B8"}
                                    />
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </td>

                      <td
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "24px",
                        }}
                      >
                        {program.reserve.map((outOfCompetition, index) => (
                          <div key={index}>
                            <label className="custom-checkbox">
                              <input
                                type="checkbox"
                                checked={outOfCompetition}
                                value={outOfCompetition}
                                onChange={(e) =>
                                  saveAnyTeamProgramReserve(
                                    program.id,
                                    e.target.checked,
                                    index
                                  )
                                }
                              />
                            </label>
                          </div>
                        ))}
                      </td>

                      <td>
                        <div className="any-program-team__more">
                          <DropDown
                            customList={true}
                            title={<Svg width={24} height={24} name={"more"} />}
                          >
                            {({ setIsOpen }) => (
                              <>
                                <li>
                                  <button
                                    className="any-program-team__btn any-program-team__btn--add"
                                    onClick={() => {
                                      createAnyTeamProgramSporstsman(
                                        program.id
                                      );
                                      setIsOpen(false);
                                    }}
                                  >
                                    Добавить спортсмена
                                    <Svg
                                      width={24}
                                      height={24}
                                      color={"#57AA49"}
                                      name={"add"}
                                    />
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="any-program-team__btn any-program-team__btn--remove"
                                    onClick={() => {
                                      deleteAnyTeamProgramTeam(program.id);
                                      setIsOpen(false);
                                    }}
                                  >
                                    Удалить команду
                                    <Svg
                                      width={24}
                                      height={24}
                                      color={"#DD554B"}
                                      name={"remove"}
                                    />
                                  </button>
                                </li>
                              </>
                            )}
                          </DropDown>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <button
            className="any-program-team__add-team"
            onClick={() => createAnyTeamProgram()}
          >
            Добавить команду
            <Svg name={"add"} width={24} height={24} color={"#4C74C1"} />
          </button>
        </div>
      </div>
    </>
  );
};

export default AnyProgramTeam;
