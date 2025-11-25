import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Link,
  Navigate,
  NavLink,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import Header from "../components/Header";
import {
  brigadesThunk,
  listRefereeThunk,
  mainBrigadeThunk,
  mainProgramThunk,
} from "../../redux/mandatoryProgramReferee/mandatoryProgramRefereeSlice";
import { refereesAndCoachesSliceThunk } from "../../redux/refereesAndCoaches/refereesAndCoachesSlice";
import ModalRefereces from "../components/ModalRefereces";
import ResutDocuments from "./ResutDocuments";
import HeaderComponent from "../components/HeaderComponent";
import LeftNavigation from "./LeftNavigation";
import Svg from "../../assets/svg/Svg";
import Accordion from "../components/Accordion";

const MandatoryProgram = () => {
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();

  const {
    // mandatoryProgramReferee
    brigades,
    listReferee,
    mainBrigade,
    mainProgram,
  } = useAppSelector((store) => store.mandatoryProgramRefereeSlice);

  const { refereesAndCoaches } = useAppSelector(
    (store) => store.refereesAndCoachesSlice
  );

  const changeActive = (number) => {
    localStorage.setItem("activeSection", number);
    setActive(number);
  };

  useEffect(() => {
    setActive(+localStorage.getItem("activeSection"));
  }, []);

  const [links, setLinks] = useState([
    {
      url: "the-judging-team",
      name: "Судейские бригады",
    },
    {
      url: "mandatory-program-list",
      name: "Фигуры",
    },
    {
      url: "the-draw",
      name: "Жеребьевка",
    },
    {
      url: "ratings",
      name: "Ввод оценок",
    },
    {
      url: "result-documents",
      name: "Документы",
    },
  ]);

  return (
    <div>
      <Header />
      <div className="mandatory-program">
        <div className="container">
          <HeaderComponent title="Обязательная программа" link="/programms" />
          <div className="flex">
            <LeftNavigation className="flex__left" links={links} />
            <div className="flex__right">
              <Routes>
                <Route
                  index
                  element={<Navigate to="the-judging-team" replace />}
                />
                <Route
                  path="the-judging-team"
                  element={
                    <div className="mandatory-program__links">
                      <NavLink
                        className="custom-link"
                        to={"do-13-let"}
                        state={{
                          categories: "До 13 лет",
                        }}
                      >
                        До 13 лет
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                      <NavLink
                        className="custom-link"
                        to={"13-15-let"}
                        state={{
                          categories: "13-15 лет",
                        }}
                      >
                        13-15 лет
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>

                      <NavLink
                        className="custom-link"
                        to={"delphinik-1"}
                        state={{
                          categories: "Дельфинник-1",
                        }}
                      >
                        Дельфинник-1
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                      <NavLink
                        className="custom-link"
                        to={"delphinik-2"}
                        state={{
                          categories: "Дельфинник-2",
                        }}
                      >
                        Дельфинник-2
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                    </div>
                  }
                />
                <Route
                  path="mandatory-program-list"
                  element={
                    <div className="mandatory-program__links">
                      <NavLink
                        className="custom-link"
                        to={"do-13-let"}
                        state={{
                          nameId: 2,
                          categories: "До 13 лет",
                        }}
                      >
                        До 13 лет
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                      <NavLink
                        className="custom-link"
                        to={"13-15-let"}
                        state={{
                          nameId: 1,
                          categories: "13-15 лет",
                        }}
                      >
                        13-15 лет
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                      <NavLink
                        className="custom-link"
                        to={"delphinik-1"}
                        state={{
                          nameId: 3,
                          categories: "Дельфинник-1",
                        }}
                      >
                        Дельфинник-1
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                      <NavLink
                        className="custom-link"
                        to={"delphinik-2"}
                        state={{
                          nameId: 4,
                          categories: "Дельфинник-2",
                        }}
                      >
                        Дельфинник-2
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                    </div>
                  }
                />
                <Route
                  path="the-draw"
                  element={
                    <div className="mandatory-program__links">
                      <NavLink
                        className="custom-link"
                        to={"do-13-let"}
                        state={{
                          nameId: 2,
                          categories: "До 13 лет",
                        }}
                      >
                        До 13 лет
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                      <NavLink
                        className="custom-link"
                        to={"13-15-let"}
                        state={{
                          nameId: 1,
                          categories: "13-15 лет",
                        }}
                      >
                        13-15 лет
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                      <NavLink
                        className="custom-link"
                        to={"delphinik-1"}
                        state={{
                          nameId: 3,
                          categories: "Дельфинник-1",
                        }}
                      >
                        Дельфинник-1
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                      <NavLink
                        className="custom-link"
                        to={"delphinik-2"}
                        state={{
                          nameId: 4,
                          categories: "Дельфинник-2",
                        }}
                      >
                        Дельфинник-2
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                    </div>
                  }
                />
                <Route
                  path="ratings"
                  element={
                    <div className="mandatory-program__links">
                      <NavLink
                        className="custom-link"
                        to={"do-13-let"}
                        state={{
                          nameId: 2,
                          categories: "До 13 лет",
                        }}
                      >
                        До 13 лет
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                      <NavLink
                        className="custom-link"
                        to={"13-15-let"}
                        state={{
                          nameId: 1,
                          categories: "13-15 лет",
                        }}
                      >
                        13-15 лет
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                      <NavLink
                        className="custom-link"
                        to={"delphinik-1"}
                        state={{
                          nameId: 3,
                          categories: "Дельфинник-1",
                        }}
                      >
                        Дельфинник-1
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                      <NavLink
                        className="custom-link"
                        to={"delphinik-2"}
                        state={{
                          nameId: 4,
                          categories: "Дельфинник-2",
                        }}
                      >
                        Дельфинник-2
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                    </div>
                  }
                />
                <Route
                  path="result-documents"
                  element={
                    <div className="mandatory-program__links">
                      <NavLink
                        className="custom-link"
                        to={"do-13-let"}
                        state={{
                          yearsId: 1,
                          nameId: 2,
                          documentsYears: "до 13 лет",
                        }}
                      >
                        До 13 лет
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                      <NavLink
                        className="custom-link"
                        to={"13-15-let"}
                        state={{
                          yearsId: 2,
                          nameId: 1,
                          documentsYears: "13-15 лет",
                        }}
                      >
                        13-15 лет
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                      <NavLink
                        className="custom-link"
                        to={"delphinik-1"}
                        state={{
                          yearsId: 3,
                          nameId: 3,
                          documentsYears: "Дельфиник-1",
                        }}
                      >
                        Дельфинник-1
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                      <NavLink
                        className="custom-link"
                        to={"delphinik-2"}
                        state={{
                          yearsId: 4,
                          nameId: 4,
                          documentsYears: "Дельфиник-2",
                        }}
                      >
                        Дельфинник-2
                        <Svg
                          name={"arrowRight"}
                          width={24}
                          height={24}
                          color={"#4C74C1"}
                        />
                      </NavLink>
                    </div>
                  }
                />
              </Routes>
            </div>
          </div>
          {false && (
            <>
              <ul>
                <li>
                  <div
                    onClick={() => {
                      changeActive(1);
                    }}
                  >
                    Судейские бригады
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => {
                      changeActive(2);
                    }}
                  >
                    Фигуры
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => {
                      changeActive(3);
                    }}
                  >
                    Жеребьевка
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => {
                      changeActive(4);
                    }}
                  >
                    Ввод оценок
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => {
                      changeActive(5);
                    }}
                  >
                    Документы
                  </div>
                </li>
              </ul>
              <ul>
                {active === 1 && (
                  <>
                    Судейские бригады
                    <li>
                      <NavLink
                        to={"/the-judging-team"}
                        state={{
                          categories: ["13-15 лет", "До 13 лет"],
                          // brigades,
                          // listReferee,
                          // mainBrigade,
                          // mainProgram,
                          // refereesAndCoaches,
                        }}
                      >
                        До 13 лет, 13-15 лет
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/the-judging-team"}
                        state={{
                          categories: ["Дельфинник-1", "Дельфинник-2"],
                          // brigades,
                          // listReferee,
                          // mainBrigade,
                          // mainProgram,
                          // refereesAndCoaches,
                        }}
                      >
                        Дельфинник-1, Дельфинник-2
                      </NavLink>
                    </li>
                  </>
                )}
                {active === 2 && (
                  <>
                    Фигуры
                    <li>
                      <NavLink
                        to={"/mandatory-program-list"}
                        state={{
                          nameId: 1,
                        }}
                      >
                        13-15 лет
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/mandatory-program-list"}
                        state={{
                          nameId: 2,
                        }}
                      >
                        До 13лет
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/mandatory-program-list"}
                        state={{
                          nameId: 3,
                        }}
                      >
                        Дельфиник-2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/mandatory-program-list"}
                        state={{
                          nameId: 4,
                        }}
                      >
                        Дельфиник-1
                      </NavLink>
                    </li>
                  </>
                )}
                {active === 3 && (
                  <>
                    Жеребьевка
                    <li>
                      <NavLink
                        to={"/the-draw"}
                        state={{
                          nameId: 1,
                        }}
                      >
                        13-15 лет
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/the-draw"}
                        state={{
                          nameId: 2,
                        }}
                      >
                        До 13лет
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/the-draw"}
                        state={{
                          nameId: 3,
                        }}
                      >
                        Дельфиник-2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/the-draw"}
                        state={{
                          nameId: 4,
                        }}
                      >
                        Дельфиник-1
                      </NavLink>
                    </li>
                  </>
                )}
                {active === 4 && (
                  <>
                    Ввод оценок
                    <li>
                      <NavLink
                        to={"/ratings"}
                        state={{
                          nameId: 1,
                        }}
                      >
                        13-15 лет
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/ratings"}
                        state={{
                          nameId: 2,
                        }}
                      >
                        До 13лет
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/ratings"}
                        state={{
                          nameId: 3,
                        }}
                      >
                        Дельфиник-2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/ratings"}
                        state={{
                          nameId: 4,
                        }}
                      >
                        Дельфиник-1
                      </NavLink>
                    </li>
                  </>
                )}
                {active === 5 && (
                  <>
                    Документы
                    <li>
                      <NavLink
                        to={"/result-documents"}
                        state={{
                          yearsId: 2,
                          nameId: 1,
                          documentsYears: "13-15 лет",
                        }}
                      >
                        13-15 лет
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/result-documents"}
                        state={{
                          yearsId: 1,
                          nameId: 2,
                          documentsYears: "до 13 лет",
                        }}
                      >
                        До 13лет
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/result-documents"}
                        state={{
                          yearsId: 3,
                          nameId: 3,
                          documentsYears: "Дельфиник-2",
                        }}
                      >
                        Дельфиник-2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/result-documents"}
                        state={{
                          yearsId: 4,
                          nameId: 4,
                          documentsYears: "Дельфиник-1",
                        }}
                      >
                        Дельфиник-1
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MandatoryProgram;
