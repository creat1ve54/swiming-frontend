import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import List from "../item/List";
import { soloSportsmensThunk } from "../../redux/soloSportsmens/soloSportsmensSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";

const JuniorsSportmans = () => {
  let data = useLocation();
  const dispatch = useDispatch();
  const [idTeamText, setIdTeamText] = useState(0);
  const [idAgeGroupText, setIdAgeGroup] = useState(0);
  const [idSportmans, setIdSportmans] = useState(0);

  const { teams, sportsmans, ageGroup } = data.state;
  const { soloSportsmens } = useAppSelector(
    (state) => state.soloSportsmensSlice
  );

  console.log(sportsmans);

  useEffect(() => {
    dispatch(soloSportsmensThunk());
  }, [dispatch, ageGroup, teams, sportsmans]);
  return (
    <>
      <Header />
      <div className="container">
        <div className="">
          <table>
            <thead>
              <tr>
                <td>Команда</td>
                <td>Возрастная группа</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <List
                    setTitle={setIdTeamText}
                    items={teams}
                    text={"nameTeam"}
                    returnValue={"id"}
                  />
                </td>
                <td>
                  <List
                    setTitle={setIdAgeGroup}
                    items={ageGroup}
                    text={"name"}
                    returnValue={"id"}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />

        <div className="">
          <table>
            <thead>
              <tr>
                <td>Фамилия, имя</td>
                <td>ПП</td>
                <td>ТП</td>
                <td>ВК</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>
                    <List
                      setTitle={setIdSportmans}
                      items={sportsmans}
                      text={"surnameAndFirstname"}
                      returnValue={"id"}
                      check={idTeamText}
                      checkId={"teamId"}
                    />
                  </div>
                </td>
                <td>
                  <input type="checkbox" onChange={() => {}} checked />
                </td>
                <td>
                  <input type="checkbox" onChange={() => {}} checked />
                </td>
                <td>
                  <input type="checkbox" onChange={() => {}} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />

        <div className="">
          <button type="button">{"<"}</button>
          <button type="button">{">"}</button>
          <button type="button">Обновить команду</button>
          <button type="button">Добавить команду</button>
          <button type="button">Добавить спортсмена</button>
        </div>
      </div>
    </>
  );
};

export default JuniorsSportmans;
