import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import {
  sportsmansSliceThunk,
  teamsSliceThunk,
} from "../../redux/teams/teamsSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { ageGroupThunk } from "../../redux/references/ageGroupSlice";

const Juniors = () => {
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();

  const { teams } = useAppSelector((state) => state.teamsSlice);
  const { sportsmans } = useAppSelector((state) => state.teamsSlice);
  const { ageGroup } = useAppSelector((state) => state.ageGroupSlice);

  useEffect(() => {
    dispatch(teamsSliceThunk());
    dispatch(sportsmansSliceThunk());
    dispatch(ageGroupThunk());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container">
        <ul>
          <li
            onClick={() => {
              setActive(1);
            }}
          >
            Спортсмены
          </li>
          <li
            onClick={() => {
              setActive(2);
            }}
          >
            Жеребьевка
          </li>
          <li
            onClick={() => {
              setActive(3);
            }}
          >
            Ввод оценок
          </li>
        </ul>
        <ul>
          {active === 1 && (
            <>
              <li>
                <NavLink
                  to={"/juniors-sportmans"}
                  state={{ teams, sportsmans, ageGroup }}
                >
                  Солистки ПП и ТП
                </NavLink>
              </li>
              <li>
                <NavLink to={"/juniors-sportmans"} state={{ id: 123 }}>
                  Дуэты ПП и ТП
                </NavLink>
              </li>
              <li>
                <NavLink to={"/juniors-sportmans"} state={{ id: 123 }}>
                  Группы ПП и ТП
                </NavLink>
              </li>
            </>
          )}
          {active === 2 && (
            <>
              <li>Соло ТП</li>
              <li>Дуэты ТП</li>
              <li>Группы ТП</li>
              <br />
              <li>Соло ПП</li>
              <li>Дуэты ПП</li>
              <li>Группы ПП </li>
            </>
          )}
          {active === 3 && (
            <>
              <li>Соло ТП</li>
              <li>Дуэты ТП</li>
              <li>Группы ТП</li>
              <br />
              <li>Соло ПП</li>
              <li>Дуэты ПП</li>
              <li>Группы ПП </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Juniors;
