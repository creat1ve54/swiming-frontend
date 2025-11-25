import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import {
  teamsChange,
  teamsSliceThunk,
  sportsmansSliceThunk,
  surnameChange,
  firstnameChange,
  yearsChange,
  sportCategoryChange,
  ageGroupChange,
  coachChange,
  outOfCompetitionChange,
  requiredProgrammChange,
  ageSubgroupChange,
  teamSlicePutThunk,
  sportsmansSlicePutThunk,
  sportsmanSliceCreateThunk,
  sportsmanSliceDeleteThunk,
  teamSliceDeleteThunk,
  teamSliceCreateThunk,
  mandatoryProgramSoloChange,
  // mandatoryProgramDuoChange,
  // mandatoryProgramDuoRChange,
  // mandatoryProgramDuoMixedChange,
  // mandatoryProgramDuoMixedRChange,
  // mandatoryProgramGroupChange,
  // mandatoryProgramGroupRChange,
  // mandatoryProgramCombiChange,
  // mandatoryProgramCombiRChange,
} from "../../redux/teams/teamsSlice";
import { useDispatch } from "react-redux";
import ComponentToPrint from "../components/ComponentToPrint";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Table from "react-bootstrap/Table";
import Input from "../UI/Input";
import Checkbox from "../UI/Checkbox";
import DropDown from "../item/DropDown";
import { ageSubgroupThunk } from "../../redux/references/ageSubgroupSlice";
import { ageGroupThunk } from "../../redux/references/ageGroupSlice";
import { sportCategoryThunk } from "../../redux/references/sportCategorySlice";
import { refereesAndCoachesSliceThunk } from "../../redux/refereesAndCoaches/refereesAndCoachesSlice";
import Svg from "../../assets/svg/Svg";
import { useDebounced } from "../../hooks/useDebounced";

const Teams = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();

  const { teams } = useAppSelector((state) => state.teamsSlice);
  const { sportsmans, isLoading } = useAppSelector((state) => state.teamsSlice);
  const { ageGroup } = useAppSelector((state) => state.ageGroupSlice);
  const { ageSubgroup } = useAppSelector((state) => state.ageSubgroupSlice);
  const { sportCategory } = useAppSelector((state) => state.sportCategorySlice);
  const { refereesAndCoaches } = useAppSelector(
    (state) => state.refereesAndCoachesSlice
  );

  window.onafterprint = () => {
    setShow(!show);
  };
  const deleteSportsman = (sportsmanId) => {
    dispatch(sportsmanSliceDeleteThunk(sportsmanId));
  };

  const createSportsman = (teamId) => {
    let sportsman = {
      surname: "",
      firstname: "",
      surnameAndFirstname: "",
      years: "",
      sportCategory: null,
      ageGroup: null,
      ageSubgroup: null,
      requiredProgramm: true,
      outOfCompetition: false,
      mandatoryProgramSolo: false,
      referee: null,
      teamId: teamId,
    };
    dispatch(sportsmanSliceCreateThunk(sportsman));
  };

  const changeTeamsAndSportmans = (e, team, sportsmans) => {
    e.preventDefault();
    dispatch(teamSlicePutThunk(team));
    dispatch(sportsmansSlicePutThunk({ team, sportsmans })).then(() => {
      alert("Команда обновлена!");
    });
  };

  const debouncedTeamsChange = useDebounced((team) => {
    dispatch(teamSlicePutThunk(team));
  }, 500);

  const debouncedSurnameChange = useDebounced((sportsman, name, value) => {
    dispatch(sportsmansSlicePutThunk({ sportsman, field: { name, value } }));
  }, 500);

  const debouncedFirstnameChange = useDebounced((sportsman, name, value) => {
    dispatch(sportsmansSlicePutThunk({ sportsman, field: { name, value } }));
  }, 500);

  const debouncedYearsChange = useDebounced((sportsman, name, value) => {
    dispatch(sportsmansSlicePutThunk({ sportsman, field: { name, value } }));
  }, 500);

  const debouncedSportCategoryChange = useDebounced(
    (sportsman, name, value) => {
      dispatch(sportsmansSlicePutThunk({ sportsman, field: { name, value } }));
    },
    0
  );

  const debouncedAgeGroupChange = useDebounced((sportsman, name, value) => {
    dispatch(sportsmansSlicePutThunk({ sportsman, field: { name, value } }));
  }, 0);

  const debouncedAgeSubgroupChange = useDebounced((sportsman, name, value) => {
    dispatch(sportsmansSlicePutThunk({ sportsman, field: { name, value } }));
  }, 0);

  const debouncedRequiredProgrammChange = useDebounced(
    (sportsman, name, value) => {
      dispatch(sportsmansSlicePutThunk({ sportsman, field: { name, value } }));
    },
    0
  );

  const debouncedOutOfCompetitionChange = useDebounced(
    (sportsman, name, value) => {
      dispatch(sportsmansSlicePutThunk({ sportsman, field: { name, value } }));
    },
    0
  );

  const debouncedMandatoryProgramSoloChange = useDebounced(
    (sportsman, name, value) => {
      dispatch(sportsmansSlicePutThunk({ sportsman, field: { name, value } }));
    },
    0
  );

  useEffect(() => {
    dispatch(teamsSliceThunk()).then((data) => {
      if (data.payload.teams.length == 0) {
        dispatch(teamSliceCreateThunk(""));
      }
    });
    dispatch(sportsmansSliceThunk());
    dispatch(ageSubgroupThunk());
    dispatch(ageGroupThunk());
    dispatch(sportCategoryThunk());
    dispatch(refereesAndCoachesSliceThunk());
  }, []);

  return (
    <>
      {!show ? (
        <>
          <Header />
          <div className="teams">
            <div className="container teams__container">
              {teams.map(
                (team, index) =>
                  active == index && (
                    <div className="teams__case" key={team.id}>
                      <div className="teams__name">
                        <table>
                          <thead>
                            <tr>
                              <th colSpan="7">Команда</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="7">
                                <Input
                                  type={"text"}
                                  onChange={(e) => {
                                    dispatch(
                                      teamsChange({
                                        id: team.id,
                                        nameTeam: e.target.value,
                                      })
                                    );
                                    debouncedTeamsChange({
                                      id: team.id,
                                      nameTeam: e.target.value,
                                    });
                                  }}
                                  value={team.nameTeam}
                                />
                              </td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td>
                                <button
                                  className="teams__name-btn teams__name-btn-left"
                                  disabled={active == 0}
                                  onClick={() => setActive(active - 1)}
                                  type="button"
                                >
                                  <Svg
                                    height={24}
                                    width={24}
                                    name={"arrowRight"}
                                    color={"#ffffff"}
                                  />
                                </button>
                              </td>
                              <td>
                                <button
                                  className="teams__name-btn teams__name-btn-right"
                                  disabled={teams.length == active + 1}
                                  onClick={() => setActive(active + 1)}
                                  type="button"
                                >
                                  <Svg
                                    height={24}
                                    width={24}
                                    name={"arrowRight"}
                                    color={"#ffffff"}
                                  />
                                </button>
                              </td>
                              <td>
                                <button
                                  className="teams__name-btn teams__name-btn-add"
                                  onClick={() => {
                                    dispatch(teamSliceCreateThunk(""));
                                    setActive(teams.length);
                                  }}
                                  type="button"
                                >
                                  Добавить команду
                                </button>
                              </td>
                              <td>
                                <button
                                  className="teams__name-btn teams__name-btn-remove"
                                  onClick={() => {
                                    dispatch(
                                      teamSliceDeleteThunk(teams[active].id)
                                    );
                                    if (teams.length == 1) {
                                      dispatch(teamSliceCreateThunk(""));
                                    } else {
                                      setActive(0);
                                    }
                                  }}
                                  type="button"
                                >
                                  Удалить команду
                                </button>
                              </td>
                              <td></td>
                              <td>
                                <button
                                  className="teams__name-btn teams__name-btn-print"
                                  type="button"
                                  onClick={() => {
                                    setShow(!show);
                                    setTimeout(() => {
                                      window.print();
                                    }, 500);
                                  }}
                                >
                                  <Svg
                                    height={24}
                                    width={24}
                                    name={"print"}
                                    color={"#ffffff"}
                                  />
                                </button>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      <div className="teams__table">
                        <table>
                          <thead>
                            <tr>
                              <th rowSpan="2">Фамилия</th>
                              <th rowSpan="2">Имя</th>
                              {/* <th rowSpan="2">Ф.И.</th> */}
                              <th rowSpan="2">Год рождения</th>
                              <th rowSpan="2">Спортивный разряд</th>
                              <th className="table__caption" colSpan="2">
                                Возраст
                              </th>
                              <th rowSpan="2">Обяз. прог.</th>
                              <th rowSpan="2">Вне конкурса</th>
                              <th rowSpan="2">Соло</th>
                              {/* <td>Дуэт</td>
                              <td>Дуэт Р</td>
                              <td>Дуэт Смешанный</td>
                              <td>Дуэт Смешанный Р</td>
                              <td>Группа</td>
                              <td>Группа Р</td>
                              <td>Комби</td>
                              <td>Комби Р</td> */}
                              {/* <td>Тренер</td> */}
                              <th rowSpan="2"></th>
                            </tr>
                            <tr>
                              <th>Группа</th>
                              <th>Подгруппа</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sportsmans.map(
                              (sportsman, index) =>
                                sportsman.teamId == team.id && (
                                  <tr key={sportsman.id}>
                                    <td>
                                      <Input
                                        type={"text"}
                                        onChange={(e) => {
                                          dispatch(
                                            surnameChange({
                                              id: sportsman.id,
                                              text: e.target.value,
                                            })
                                          );

                                          debouncedSurnameChange(
                                            sportsman.id,
                                            "surname",
                                            e.target.value
                                          );
                                        }}
                                        value={sportsman.surname}
                                      />
                                    </td>
                                    <td>
                                      <Input
                                        type={"text"}
                                        onChange={(e) => {
                                          dispatch(
                                            firstnameChange({
                                              id: sportsman.id,
                                              text: e.target.value,
                                            })
                                          );

                                          debouncedFirstnameChange(
                                            sportsman.id,
                                            "firstname",
                                            e.target.value
                                          );
                                        }}
                                        value={sportsman.firstname}
                                      />
                                    </td>
                                    {/* <td>
                                      <Input
                                        type={"text"}
                                        disabled
                                        value={
                                          sportsman.surname +
                                          " " +
                                          sportsman.firstname
                                        }
                                      />
                                    </td> */}
                                    <td>
                                      <Input
                                        type={"text"}
                                        onChange={(e) => {
                                          dispatch(
                                            yearsChange({
                                              id: sportsman.id,
                                              text: e.target.value,
                                            })
                                          );

                                          debouncedYearsChange(
                                            sportsman.id,
                                            "years",
                                            e.target.value
                                          );
                                        }}
                                        value={sportsman.years}
                                      />
                                    </td>
                                    <td>
                                      {sportsman.sportCategoryId == null ? (
                                        <DropDown
                                          title={{ name: "Разряд" }}
                                          saveItem={(item) => {
                                            dispatch(
                                              sportCategoryChange({
                                                id: sportsman.id,
                                                text: item,
                                              })
                                            );

                                            debouncedSportCategoryChange(
                                              sportsman.id,
                                              "sportCategoryId",
                                              item.id
                                            );
                                          }}
                                          items={sportCategory}
                                          text={"name"}
                                          returnValue={"id"}
                                        />
                                      ) : (
                                        <DropDown
                                          title={{
                                            name: sportsman.sportCategory.name,
                                          }}
                                          saveItem={(item) => {
                                            dispatch(
                                              sportCategoryChange({
                                                id: sportsman.id,
                                                text: item,
                                              })
                                            );

                                            debouncedSportCategoryChange(
                                              sportsman.id,
                                              "sportCategoryId",
                                              item.id
                                            );
                                          }}
                                          items={sportCategory}
                                          text={"name"}
                                          returnValue={"id"}
                                        />
                                      )}
                                    </td>
                                    <td>
                                      {sportsman.ageGroupId == null ? (
                                        <DropDown
                                          title={{ name: "Группа" }}
                                          saveItem={(item) => {
                                            dispatch(
                                              ageGroupChange({
                                                id: sportsman.id,
                                                text: item,
                                              })
                                            );

                                            debouncedAgeGroupChange(
                                              sportsman.id,
                                              "ageGroupId",
                                              item.id
                                            );
                                          }}
                                          items={ageGroup}
                                          text={"name"}
                                          returnValue={"id"}
                                        />
                                      ) : (
                                        <DropDown
                                          title={{
                                            name: sportsman.ageGroup.nameShort,
                                          }}
                                          saveItem={(item) => {
                                            dispatch(
                                              ageGroupChange({
                                                id: sportsman.id,
                                                text: item,
                                              })
                                            );

                                            debouncedAgeGroupChange(
                                              sportsman.id,
                                              "ageGroupId",
                                              item.id
                                            );
                                          }}
                                          items={ageGroup}
                                          text={"name"}
                                          returnValue={"id"}
                                        />
                                      )}
                                    </td>
                                    <td>
                                      {sportsman.ageSubgroupId == null ? (
                                        <DropDown
                                          title={{ name: "Подгруппа" }}
                                          saveItem={(item) => {
                                            dispatch(
                                              ageSubgroupChange({
                                                id: sportsman.id,
                                                text: item,
                                              })
                                            );

                                            debouncedAgeSubgroupChange(
                                              sportsman.id,
                                              "ageSubgroupId",
                                              item.id
                                            );
                                          }}
                                          items={ageSubgroup}
                                          text={"name"}
                                          returnValue={"id"}
                                        />
                                      ) : (
                                        <DropDown
                                          title={{
                                            name: sportsman.ageSubgroup.name,
                                          }}
                                          saveItem={(item) => {
                                            dispatch(
                                              ageSubgroupChange({
                                                id: sportsman.id,
                                                text: item,
                                              })
                                            );

                                            debouncedAgeSubgroupChange(
                                              sportsman.id,
                                              "ageSubgroupId",
                                              item.id
                                            );
                                          }}
                                          items={ageSubgroup}
                                          text={"name"}
                                          returnValue={"id"}
                                        />
                                      )}
                                    </td>
                                    <td>
                                      <label className="custom-checkbox">
                                        <Checkbox
                                          onChange={(e) => {
                                            dispatch(
                                              requiredProgrammChange({
                                                id: sportsman.id,
                                                text: e.target.checked,
                                              })
                                            );

                                            debouncedRequiredProgrammChange(
                                              sportsman.id,
                                              "requiredProgramm",
                                              e.target.checked
                                            );
                                          }}
                                          checked={sportsman.requiredProgramm}
                                        />
                                      </label>
                                    </td>
                                    <td>
                                      <label className="custom-checkbox">
                                        <Checkbox
                                          onChange={(e) => {
                                            dispatch(
                                              outOfCompetitionChange({
                                                id: sportsman.id,
                                                text: e.target.checked,
                                              })
                                            );

                                            debouncedOutOfCompetitionChange(
                                              sportsman.id,
                                              "outOfCompetition",
                                              e.target.checked
                                            );
                                          }}
                                          checked={sportsman.outOfCompetition}
                                        />
                                      </label>
                                    </td>
                                    <td>
                                      <label className="custom-checkbox">
                                        <Checkbox
                                          onChange={(e) => {
                                            dispatch(
                                              mandatoryProgramSoloChange({
                                                id: sportsman.id,
                                                text: e.target.checked,
                                              })
                                            );

                                            debouncedMandatoryProgramSoloChange(
                                              sportsman.id,
                                              "mandatoryProgramSolo",
                                              e.target.checked
                                            );
                                          }}
                                          checked={
                                            sportsman.mandatoryProgramSolo
                                          }
                                        />
                                      </label>
                                    </td>
                                    <td>
                                      <button
                                        className="btn__remove"
                                        type="button"
                                        onClick={() => {
                                          deleteSportsman(sportsman.id);
                                        }}
                                      >
                                        <Svg
                                          name={"remove"}
                                          width={24}
                                          height={24}
                                          color={"#3361B8"}
                                        />
                                      </button>
                                    </td>
                                  </tr>
                                )
                            )}
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            createSportsman(teams[active].id);
                          }}
                          type="button"
                          className="teams__btn teams__btn-add"
                        >
                          Добавить спортсмена
                          <Svg
                            name={"add"}
                            width={24}
                            height={24}
                            color={"#4C74C1"}
                          />
                        </button>
                      </div>
                      {/* <div className="teams__btns">
                        <button
                          disabled={active == 0}
                          onClick={() => setActive(active - 1)}
                          type="button"
                        >
                          {"<"}
                        </button>
                        <button
                          disabled={teams.length == active + 1}
                          onClick={() => setActive(active + 1)}
                          type="button"
                        >
                          {">"}
                        </button>
                        <button
                          onClick={() => {
                            createSportsman(teams[active].id);
                          }}
                          type="button"
                        >
                          Добавить строку
                        </button>
                        <button
                          onClick={() => {
                            dispatch(teamSliceCreateThunk(""));
                            setActive(teams.length);
                          }}
                          type="button"
                        >
                          Добавить команду
                        </button>
                        <button
                          onClick={() => {
                            dispatch(teamSliceDeleteThunk(teams[active].id));
                            if (teams.length == 1) {
                              dispatch(teamSliceCreateThunk(""));
                            } else {
                              setActive(0);
                            }
                          }}
                          type="button"
                        >
                          Удалить команду
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setShow(!show);
                            setTimeout(() => {
                              window.print();
                            }, 500);
                          }}
                        >
                          Обяз.пр
                        </button>
                        <button type="button">Список спортсменов</button>
                        <button
                          type="button"
                          onClick={(e) => {
                            changeTeamsAndSportmans(
                              e,
                              teams[active],
                              sportsmans
                            );
                          }}
                        >
                          Обновить команду
                        </button>
                      </div> */}
                    </div>
                  )
              )}
            </div>
          </div>

          {/* <Footer /> */}
        </>
      ) : (
        <ComponentToPrint />
      )}
    </>
  );
};

export default Teams;
