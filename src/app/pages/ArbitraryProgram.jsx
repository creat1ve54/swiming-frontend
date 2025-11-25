import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import LeftNavigation from "./LeftNavigation";
import Svg from "../../assets/svg/Svg";
import Accordion from "../components/Accordion";

const ArbitraryProgram = () => {
  const [active, setActive] = useState(1);
  const [activeProgram, setActiveProgram] = useState(0);
  const [activeTeamProgram, setActiveTeamProgram] = useState(0);
  const [activeRatingsProgram, setActiveRatingsProgram] = useState(0);
  const [activeDocumentsProgram, setActiveDocumentsProgram] = useState(0);

  const [links, setLinks] = useState([
    {
      url: "any-team-program",
      name: "Команды",
    },
    {
      url: "the-judging-team-any-program",
      name: "Судейские бригады",
    },
    {
      url: "the-draw-any-program",
      name: "Жеребьевка",
    },
    {
      url: "ratings-any-program",
      name: "Ввод оценок",
    },
    {
      url: "ratings-any-program-documents",
      name: "Документы",
    },
  ]);

  const changeActive = (number) => {
    localStorage.setItem("activeArbitrarySection", number);
    setActive(number);
  };

  useEffect(() => {
    setActive(+localStorage.getItem("activeArbitrarySection"));
  }, []);

  return (
    <div>
      <Header />

      <div className="mandatory-program">
        <div className="container">
          <HeaderComponent title="Произвольная программа" link="/programms" />
          <div className="flex">
            <LeftNavigation className="flex__left" links={links} />
            <div className="flex__right">
              <Routes>
                <Route
                  index
                  element={<Navigate to="any-team-program" replace />}
                ></Route>
                <Route
                  path="any-team-program"
                  element={
                    <div className="mandatory-program__links">
                      <Accordion
                        title={
                          <>
                            Юниоры
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </>
                        }
                      >
                        <div className="references-info__list">
                          <NavLink
                            to={"dyet"}
                            state={{
                              anyTeamProgram: 2,
                              anyTeamProgramYears: 1,
                              anyTeamProgramName: "Дуэт",
                              anyTeamProgramYearsName: "Юниоры",
                              categories: "Дуэт (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet-smeshani"}
                            state={{
                              anyTeamProgram: 3,
                              anyTeamProgramYears: 1,
                              anyTeamProgramName: "Дуэт Смешанный",
                              anyTeamProgramYearsName: "Юниоры",
                              categories: "Дуэт смешанный (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт-смешанный
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"grypa"}
                            state={{
                              anyTeamProgram: 4,
                              anyTeamProgramYears: 1,
                              anyTeamProgramName: "Группа",
                              anyTeamProgramYearsName: "Юниоры",
                            }}
                            className="references-info__item"
                          >
                            Группа
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"akrobat-grypa"}
                            state={{
                              anyTeamProgram: 5,
                              anyTeamProgramYears: 1,
                              anyTeamProgramName: "Акробатическая группа",
                              anyTeamProgramYearsName: "Юниоры",
                              categories: "Акробатическая группа (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Акробатическая группа
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                        </div>
                      </Accordion>
                      <Accordion
                        title={
                          <>
                            13-15 лет
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </>
                        }
                      >
                        <div className="references-info__list">
                          <NavLink
                            to={"dyet"}
                            state={{
                              anyTeamProgram: 2,
                              anyTeamProgramYears: 2,
                              anyTeamProgramName: "Дуэт",
                              anyTeamProgramYearsName: "13-15 лет",
                              categories: "Дуэт (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet-smeshani"}
                            state={{
                              anyTeamProgram: 3,
                              anyTeamProgramYears: 2,
                              anyTeamProgramName: "Дуэт Смешанный",
                              anyTeamProgramYearsName: "13-15 лет",
                              categories: "Дуэт смешанный (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт-смешанный
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"grypa"}
                            state={{
                              anyTeamProgram: 4,
                              anyTeamProgramYears: 2,
                              anyTeamProgramName: "Группа",
                              anyTeamProgramYearsName: "13-15 лет",
                              categories: "Группа (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Группа
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"kombi"}
                            state={{
                              anyTeamProgram: 5,
                              anyTeamProgramYears: 2,
                              anyTeamProgramName: "Комби",
                              anyTeamProgramYearsName: "13-15 лет",
                              categories: "Комби (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Комби
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                        </div>
                      </Accordion>
                      <Accordion
                        title={
                          <>
                            До 13 лет
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </>
                        }
                      >
                        <div className="references-info__list">
                          <NavLink
                            to={"dyet"}
                            state={{
                              anyTeamProgram: 2,
                              anyTeamProgramYears: 3,
                              anyTeamProgramName: "Дуэт",
                              anyTeamProgramYearsName: "До 13 лет",
                              categories: "Дуэт (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet-smeshani"}
                            state={{
                              anyTeamProgram: 3,
                              anyTeamProgramYears: 3,
                              anyTeamProgramName: "Дуэт Смешанный",
                              anyTeamProgramYearsName: "До 13 лет",
                              categories: "Дуэт смешанный (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт-смешанный
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"grypa"}
                            state={{
                              anyTeamProgram: 4,
                              anyTeamProgramYears: 3,
                              anyTeamProgramName: "Группа",
                              anyTeamProgramYearsName: "До 13 лет",
                              categories: "Группа (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Группа
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"kombi"}
                            state={{
                              anyTeamProgram: 5,
                              anyTeamProgramYears: 3,
                              anyTeamProgramName: "Комби",
                              anyTeamProgramYearsName: "До 13 лет",
                              categories: "Комби (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Комби
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                        </div>
                      </Accordion>
                    </div>
                  }
                ></Route>
                <Route
                  path="the-judging-team-any-program"
                  element={
                    <div>
                      <div className="mandatory-program__links">
                        <NavLink
                          className="custom-link"
                          to={"yniori"}
                          state={{
                            categories: "Юниоры",
                          }}
                        >
                          Юниоры
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
                      </div>
                    </div>
                  }
                ></Route>
                <Route
                  path="the-draw-any-program"
                  element={
                    <div className="mandatory-program__links">
                      <Accordion
                        title={
                          <>
                            Юниоры
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </>
                        }
                      >
                        <div className="references-info__list">
                          <NavLink
                            to={"solo"}
                            state={{
                              nameId: "Юниоры",
                              groupId: 1,
                              disciplineId: 1,
                              categories: "Соло (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Соло
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet"}
                            state={{
                              nameId: "Юниоры",
                              groupId: 1,
                              disciplineId: 2,
                              categories: "Дуэт (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet-smeshani"}
                            state={{
                              nameId: "Юниоры",
                              groupId: 1,
                              disciplineId: 3,
                              categories: "Дуэт смешанный (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт-смешанный
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"grypa"}
                            state={{
                              nameId: "Юниоры",
                              groupId: 1,
                              disciplineId: 4,
                              categories: "Группа (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Группа
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"akrobat-grypa"}
                            state={{
                              nameId: "Юниоры",
                              groupId: 1,
                              disciplineId: 5,
                              categories: "Акробатическая группа (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Акробатическая группа
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                        </div>
                      </Accordion>
                      <Accordion
                        title={
                          <>
                            13-15 лет
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </>
                        }
                      >
                        <div className="references-info__list">
                          <NavLink
                            to={"solo"}
                            state={{
                              nameId: "13-15 лет",
                              groupId: 2,
                              disciplineId: 1,
                              categories: "Соло (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Соло
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet"}
                            state={{
                              nameId: "13-15 лет",
                              groupId: 2,
                              disciplineId: 2,
                              categories: "Дуэт (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet-smeshani"}
                            state={{
                              nameId: "13-15 лет",
                              groupId: 2,
                              disciplineId: 3,
                              categories: "Дуэт смешанный (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт-смешанный
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"grypa"}
                            state={{
                              nameId: "13-15 лет",
                              groupId: 2,
                              disciplineId: 4,
                              categories: "Группа (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Группа
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"kombi"}
                            state={{
                              nameId: "13-15 лет",
                              groupId: 2,
                              disciplineId: 5,
                              categories: "Комби (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Комби
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                        </div>
                      </Accordion>
                      <Accordion
                        title={
                          <>
                            До 13 лет
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </>
                        }
                      >
                        <div className="references-info__list">
                          <NavLink
                            to={"solo"}
                            state={{
                              nameId: "До 13 лет",
                              groupId: 3,
                              disciplineId: 1,
                              categories: "Соло (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Соло
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet"}
                            state={{
                              nameId: "До 13 лет",
                              groupId: 3,
                              disciplineId: 2,
                              categories: "Дуэт (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet-smeshani"}
                            state={{
                              nameId: "До 13 лет",
                              groupId: 3,
                              disciplineId: 3,
                              categories: "Дуэт смешанный (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт-смешанный
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"grypa"}
                            state={{
                              nameId: "До 13 лет",
                              groupId: 3,
                              disciplineId: 4,
                              categories: "Группа (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Группа
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"kombi"}
                            state={{
                              nameId: "До 13 лет",
                              groupId: 3,
                              disciplineId: 5,
                              categories: "Комби (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Комби
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                        </div>
                      </Accordion>
                    </div>
                  }
                ></Route>
                <Route
                  path="ratings-any-program"
                  element={
                    <div className="mandatory-program__links">
                      <Accordion
                        title={
                          <>
                            Юниоры
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </>
                        }
                      >
                        <div className="references-info__list">
                          <NavLink
                            to={"solo"}
                            state={{
                              nameId: "Юниоры",
                              groupId: 1,
                              disciplineId: 1,
                              categories: "Соло (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Соло
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet"}
                            state={{
                              nameId: "Юниоры",
                              groupId: 1,
                              disciplineId: 2,
                              categories: "Дуэт (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet-smeshani"}
                            state={{
                              nameId: "Юниоры",
                              groupId: 1,
                              disciplineId: 3,
                              categories: "Дуэт смешанный (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт-смешанный
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"grypa"}
                            state={{
                              nameId: "Юниоры",
                              groupId: 1,
                              disciplineId: 4,
                              categories: "Группа (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Группа
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"akrobat-grypa"}
                            state={{
                              nameId: "Юниоры",
                              groupId: 1,
                              disciplineId: 5,
                              categories: "Акробатическая группа (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Акробатическая группа
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                        </div>
                      </Accordion>
                      <Accordion
                        title={
                          <>
                            13-15 лет
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </>
                        }
                      >
                        <div className="references-info__list">
                          <NavLink
                            to={"solo"}
                            state={{
                              nameId: "13-15 лет",
                              groupId: 2,
                              disciplineId: 1,
                              categories: "Соло (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Соло
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet"}
                            state={{
                              nameId: "13-15 лет",
                              groupId: 2,
                              disciplineId: 2,
                              categories: "Дуэт (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet-smeshani"}
                            state={{
                              nameId: "13-15 лет",
                              groupId: 2,
                              disciplineId: 3,
                              categories: "Дуэт смешанный (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт-смешанный
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"grypa"}
                            state={{
                              nameId: "13-15 лет",
                              groupId: 2,
                              disciplineId: 4,
                              categories: "Группа (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Группа
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"kombi"}
                            state={{
                              nameId: "13-15 лет",
                              groupId: 2,
                              disciplineId: 5,
                              categories: "Комби (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Комби
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                        </div>
                      </Accordion>
                      <Accordion
                        title={
                          <>
                            До 13 лет
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </>
                        }
                      >
                        <div className="references-info__list">
                          <NavLink
                            to={"solo"}
                            state={{
                              nameId: "До 13 лет",
                              groupId: 3,
                              disciplineId: 1,
                              categories: "Соло (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Соло
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet"}
                            state={{
                              nameId: "До 13 лет",
                              groupId: 3,
                              disciplineId: 2,
                              categories: "Дуэт (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet-smeshani"}
                            state={{
                              nameId: "До 13 лет",
                              groupId: 3,
                              disciplineId: 3,
                              categories: "Дуэт смешанный (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт-смешанный
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"gryp"}
                            state={{
                              nameId: "До 13 лет",
                              groupId: 3,
                              disciplineId: 4,
                              categories: "Группа (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Группа
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"kombi"}
                            state={{
                              nameId: "До 13 лет",
                              groupId: 3,
                              disciplineId: 5,
                              categories: "Комби (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Комби
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                        </div>
                      </Accordion>
                    </div>
                  }
                ></Route>
                <Route
                  path="ratings-any-program-documents"
                  element={
                    <div className="mandatory-program__links">
                      <Accordion
                        title={
                          <>
                            Юниоры
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </>
                        }
                      >
                        <div className="references-info__list">
                          <NavLink
                            to={"solo"}
                            state={{
                              nameId: "Юниоры",
                              groupId: 1,
                              disciplineId: 1,
                              categories: "Соло (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Соло
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet"}
                            state={{
                              nameId: "Юниоры",
                              groupId: 1,
                              disciplineId: 2,
                              categories: "Дуэт (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet-smeshani"}
                            state={{
                              nameId: "Юниоры",
                              groupId: 1,
                              disciplineId: 3,
                              categories: "Дуэт смешанный (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт-смешанный
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"grypa"}
                            state={{
                              nameId: "Юниоры",
                              groupId: 1,
                              disciplineId: 4,
                              categories: "Группа (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Группа
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"akrobat-grypa"}
                            state={{
                              nameId: "Юниоры",
                              groupId: 1,
                              disciplineId: 5,
                              categories: "Акробатическая группа (Юниоры)",
                            }}
                            className="references-info__item"
                          >
                            Акробатическая группа
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                        </div>
                      </Accordion>
                      <Accordion
                        title={
                          <>
                            13-15 лет
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </>
                        }
                      >
                        <div className="references-info__list">
                          <NavLink
                            to={"solo"}
                            state={{
                              nameId: "13-15 лет",
                              groupId: 2,
                              disciplineId: 1,
                              categories: "Соло (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Соло
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet"}
                            state={{
                              nameId: "13-15 лет",
                              groupId: 2,
                              disciplineId: 2,
                              categories: "Дуэт (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet-smeshani"}
                            state={{
                              nameId: "13-15 лет",
                              groupId: 2,
                              disciplineId: 3,
                              categories: "Дуэт смешанный (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт-смешанный
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"grypa"}
                            state={{
                              nameId: "13-15 лет",
                              groupId: 2,
                              disciplineId: 4,
                              categories: "Группа (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Группа
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"kombi"}
                            state={{
                              nameId: "13-15 лет",
                              groupId: 2,
                              disciplineId: 5,
                              categories: "Комби (13-15 лет)",
                            }}
                            className="references-info__item"
                          >
                            Комби
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                        </div>
                      </Accordion>
                      <Accordion
                        title={
                          <>
                            До 13 лет
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </>
                        }
                      >
                        <div className="references-info__list">
                          <NavLink
                            to={"solo"}
                            state={{
                              nameId: "До 13 лет",
                              groupId: 3,
                              disciplineId: 1,
                              categories: "Соло (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Соло
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet"}
                            state={{
                              nameId: "До 13 лет",
                              groupId: 3,
                              disciplineId: 2,
                              categories: "Дуэт (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"dyet-smeshani"}
                            state={{
                              nameId: "До 13 лет",
                              groupId: 3,
                              disciplineId: 3,
                              categories: "Дуэт смешанный (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Дуэт-смешанный
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"grypa"}
                            state={{
                              nameId: "До 13 лет",
                              groupId: 3,
                              disciplineId: 4,
                              categories: "Группа (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Группа
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                          <NavLink
                            to={"kombi"}
                            state={{
                              nameId: "До 13 лет",
                              groupId: 3,
                              disciplineId: 5,
                              categories: "Комби (до 13 лет)",
                            }}
                            className="references-info__item"
                          >
                            Комби
                            <Svg
                              name={"arrowRight"}
                              width={24}
                              height={24}
                              color={"#4C74C1"}
                            />
                          </NavLink>
                        </div>
                      </Accordion>
                    </div>
                  }
                ></Route>
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
                    Команды
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => {
                      changeActive(2);
                    }}
                  >
                    Судейские бригады
                  </div>
                </li>
                {/* <li>
              <div
                onClick={() => {
                  changeActive(2);
                }}
              >
                Фигуры
              </div>
            </li> */}
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
                    Команды
                    <li onClick={() => setActiveTeamProgram(1)}>
                      Юниоры
                      {activeTeamProgram === 1 && (
                        <ul>
                          <li>
                            <NavLink
                              to={"/any-team-program"}
                              state={{
                                anyTeamProgram: 2,
                                anyTeamProgramYears: 1,
                                anyTeamProgramName: "Дуэт",
                                anyTeamProgramYearsName: "Юниоры",
                              }}
                            >
                              Дуэт
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/any-team-program"}
                              state={{
                                anyTeamProgram: 3,
                                anyTeamProgramYears: 1,
                                anyTeamProgramName: "Дуэт Смешанный",
                                anyTeamProgramYearsName: "Юниоры",
                              }}
                            >
                              Дуэт Смешанный
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/any-team-program"}
                              state={{
                                anyTeamProgram: 4,
                                anyTeamProgramYears: 1,
                                anyTeamProgramName: "Группа",
                                anyTeamProgramYearsName: "Юниоры",
                              }}
                            >
                              Группа
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/any-team-program"}
                              state={{
                                anyTeamProgram: 5,
                                anyTeamProgramYears: 1,
                                anyTeamProgramName: "Акробатическая группа",
                                anyTeamProgramYearsName: "Юниоры",
                              }}
                            >
                              Акробатическая группа
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li onClick={() => setActiveTeamProgram(2)}>
                      13-15 лет
                      {activeTeamProgram === 2 && (
                        <ul>
                          <li>
                            <NavLink
                              to={"/any-team-program"}
                              state={{
                                anyTeamProgram: 2,
                                anyTeamProgramYears: 2,
                                anyTeamProgramName: "Дуэт",
                                anyTeamProgramYearsName: "13-15 лет",
                              }}
                            >
                              Дуэт
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/any-team-program"}
                              state={{
                                anyTeamProgram: 3,
                                anyTeamProgramYears: 2,
                                anyTeamProgramName: "Дуэт Смешанный",
                                anyTeamProgramYearsName: "13-15 лет",
                              }}
                            >
                              Дуэт Смешанный
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/any-team-program"}
                              state={{
                                anyTeamProgram: 4,
                                anyTeamProgramYears: 2,
                                anyTeamProgramName: "Группа",
                                anyTeamProgramYearsName: "13-15 лет",
                              }}
                            >
                              Группа
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/any-team-program"}
                              state={{
                                anyTeamProgram: 5,
                                anyTeamProgramYears: 2,
                                anyTeamProgramName: "Комби",
                                anyTeamProgramYearsName: "13-15 лет",
                              }}
                            >
                              Комби
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li onClick={() => setActiveTeamProgram(3)}>
                      До 13лет
                      {activeTeamProgram === 3 && (
                        <ul>
                          <li>
                            <NavLink
                              to={"/any-team-program"}
                              state={{
                                anyTeamProgram: 2,
                                anyTeamProgramYears: 3,
                                anyTeamProgramName: "Дуэт",
                                anyTeamProgramYearsName: "До 13 лет",
                              }}
                            >
                              Дуэт
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/any-team-program"}
                              state={{
                                anyTeamProgram: 3,
                                anyTeamProgramYears: 3,
                                anyTeamProgramName: "Дуэт Смешанный",
                                anyTeamProgramYearsName: "До 13 лет",
                              }}
                            >
                              Дуэт Смешанный
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/any-team-program"}
                              state={{
                                anyTeamProgram: 4,
                                anyTeamProgramYears: 3,
                                anyTeamProgramName: "Группа",
                                anyTeamProgramYearsName: "До 13 лет",
                              }}
                            >
                              Группа
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/any-team-program"}
                              state={{
                                anyTeamProgram: 5,
                                anyTeamProgramYears: 3,
                                anyTeamProgramName: "Комби",
                                anyTeamProgramYearsName: "До 13 лет",
                              }}
                            >
                              Комби
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                  </>
                )}
                {active === 2 && (
                  <>
                    Судейские бригады
                    <li>
                      <NavLink
                        to={"/the-judging-team-any-program"}
                        state={{
                          categories: "Юниоры",
                          // brigades,
                          // listReferee,
                          // mainBrigade,
                          // mainProgram,
                          // refereesAndCoaches,
                        }}
                      >
                        Юниоры
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/the-judging-team-any-program"}
                        state={{
                          categories: "13-15 лет",
                          // brigades,
                          // listReferee,
                          // mainBrigade,
                          // mainProgram,
                          // refereesAndCoaches,
                        }}
                      >
                        13-15 лет
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/the-judging-team-any-program"}
                        state={{
                          categories: "До 13 лет",
                          // brigades,
                          // listReferee,
                          // mainBrigade,
                          // mainProgram,
                          // refereesAndCoaches,
                        }}
                      >
                        До 13 лет
                      </NavLink>
                    </li>
                  </>
                )}
                {/* {active === 2 && (
              <>
                Фигуры
                <li>
                  <NavLink
                    to={"/mandatory-program-list"}
                    state={{
                      nameId: 1,
                    }}
                  >
                    До 13лет
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/mandatory-program-list"}
                    state={{
                      nameId: 2,
                    }}
                  >
                    13-15 лет
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
            )} */}
                {active === 3 && (
                  <>
                    Жеребьевка
                    <li onClick={() => setActiveProgram(1)}>
                      Юниоры
                      {activeProgram === 1 && (
                        <ul>
                          <li>
                            <NavLink
                              to={"/the-draw-any-program"}
                              state={{
                                nameId: "Юниоры",
                                groupId: 1,
                                disciplineId: 1,
                              }}
                            >
                              Соло
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/the-draw-any-program"}
                              state={{
                                nameId: "Юниоры",
                                groupId: 1,
                                disciplineId: 2,
                              }}
                            >
                              Дуэт
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/the-draw-any-program"}
                              state={{
                                nameId: "Юниоры",
                                groupId: 1,
                                disciplineId: 3,
                              }}
                            >
                              Дуэт Смешанный
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/the-draw-any-program"}
                              state={{
                                nameId: "Юниоры",
                                groupId: 1,
                                disciplineId: 4,
                              }}
                            >
                              Группа
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/the-draw-any-program"}
                              state={{
                                nameId: "Юниоры",
                                groupId: 1,
                                disciplineId: 5,
                              }}
                            >
                              Акробатическая группа
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li onClick={() => setActiveProgram(2)}>
                      13-15 лет
                      {activeProgram === 2 && (
                        <ul>
                          <li>
                            <NavLink
                              to={"/the-draw-any-program"}
                              state={{
                                nameId: "13-15 лет",
                                groupId: 2,
                                disciplineId: 1,
                              }}
                            >
                              Соло
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/the-draw-any-program"}
                              state={{
                                nameId: "13-15 лет",
                                groupId: 2,
                                disciplineId: 2,
                              }}
                            >
                              Дуэт
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/the-draw-any-program"}
                              state={{
                                nameId: "13-15 лет",
                                groupId: 2,
                                disciplineId: 3,
                              }}
                            >
                              Дуэт Смешанный
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/the-draw-any-program"}
                              state={{
                                nameId: "13-15 лет",
                                groupId: 2,
                                disciplineId: 4,
                              }}
                            >
                              Группа
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/the-draw-any-program"}
                              state={{
                                nameId: "13-15 лет",
                                groupId: 2,
                                disciplineId: 5,
                              }}
                            >
                              Комби
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li onClick={() => setActiveProgram(3)}>
                      До 13 лет
                      {activeProgram === 3 && (
                        <ul>
                          <li>
                            <NavLink
                              to={"/the-draw-any-program"}
                              state={{
                                nameId: "До 13 лет",
                                groupId: 3,
                                disciplineId: 1,
                              }}
                            >
                              Соло
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/the-draw-any-program"}
                              state={{
                                nameId: "До 13 лет",
                                groupId: 3,
                                disciplineId: 2,
                              }}
                            >
                              Дуэт
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/the-draw-any-program"}
                              state={{
                                nameId: "До 13 лет",
                                groupId: 3,
                                disciplineId: 3,
                              }}
                            >
                              Дуэт Смешанный
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/the-draw-any-program"}
                              state={{
                                nameId: "До 13 лет",
                                groupId: 3,
                                disciplineId: 4,
                              }}
                            >
                              Группа
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/the-draw-any-program"}
                              state={{
                                nameId: "До 13 лет",
                                groupId: 3,
                                disciplineId: 5,
                              }}
                            >
                              Комби
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                    {/* <li>
                  <NavLink
                    to={"/the-draw-any-program"}
                    state={{
                      nameId: 4,
                    }}
                  >
                    Дельфиник-1
                  </NavLink>
                </li> */}
                  </>
                )}
                {active === 4 && (
                  <>
                    Ввод оценок
                    <li onClick={() => setActiveRatingsProgram(1)}>
                      Юниоры
                      {activeRatingsProgram === 1 && (
                        <ul>
                          <li>
                            <NavLink
                              to={"/ratings-any-program"}
                              state={{
                                nameId: "Юниоры",
                                groupId: 1,
                                disciplineId: 1,
                              }}
                            >
                              Соло
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program"}
                              state={{
                                nameId: "Юниоры",
                                groupId: 1,
                                disciplineId: 2,
                              }}
                            >
                              Дуэт
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program"}
                              state={{
                                nameId: "Юниоры",
                                groupId: 1,
                                disciplineId: 3,
                              }}
                            >
                              Дуэт Смешанный
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program"}
                              state={{
                                nameId: "Юниоры",
                                groupId: 1,
                                disciplineId: 4,
                              }}
                            >
                              Группа
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program"}
                              state={{
                                nameId: "Юниоры",
                                groupId: 1,
                                disciplineId: 5,
                              }}
                            >
                              Акробатическая группа
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li onClick={() => setActiveRatingsProgram(2)}>
                      13-15 лет
                      {activeRatingsProgram === 2 && (
                        <ul>
                          <li>
                            <NavLink
                              to={"/ratings-any-program"}
                              state={{
                                nameId: "13-15 лет",
                                groupId: 2,
                                disciplineId: 1,
                              }}
                            >
                              Соло
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program"}
                              state={{
                                nameId: "13-15 лет",
                                groupId: 2,
                                disciplineId: 2,
                              }}
                            >
                              Дуэт
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program"}
                              state={{
                                nameId: "13-15 лет",
                                groupId: 2,
                                disciplineId: 3,
                              }}
                            >
                              Дуэт Смешанный
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program"}
                              state={{
                                nameId: "13-15 лет",
                                groupId: 2,
                                disciplineId: 4,
                              }}
                            >
                              Группа
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program"}
                              state={{
                                nameId: "13-15 лет",
                                groupId: 2,
                                disciplineId: 5,
                              }}
                            >
                              Комби
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li onClick={() => setActiveRatingsProgram(3)}>
                      До 13 лет
                      {activeRatingsProgram === 3 && (
                        <ul>
                          <li>
                            <NavLink
                              to={"/ratings-any-program"}
                              state={{
                                nameId: "До 13 лет",
                                groupId: 3,
                                disciplineId: 1,
                              }}
                            >
                              Соло
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program"}
                              state={{
                                nameId: "До 13 лет",
                                groupId: 3,
                                disciplineId: 2,
                              }}
                            >
                              Дуэт
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program"}
                              state={{
                                nameId: "До 13 лет",
                                groupId: 3,
                                disciplineId: 3,
                              }}
                            >
                              Дуэт Смешанный
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program"}
                              state={{
                                nameId: "До 13 лет",
                                groupId: 3,
                                disciplineId: 4,
                              }}
                            >
                              Группа
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program"}
                              state={{
                                nameId: "До 13 лет",
                                groupId: 3,
                                disciplineId: 5,
                              }}
                            >
                              Комби
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                  </>
                )}
                {active === 5 && (
                  <>
                    Документы
                    <li onClick={() => setActiveDocumentsProgram(1)}>
                      Юниоры
                      {activeDocumentsProgram === 1 && (
                        <ul>
                          <li>
                            <NavLink
                              to={"/ratings-any-program-documents"}
                              state={{
                                nameId: "Юниоры",
                                groupId: 1,
                                disciplineId: 1,
                                disciplineName: "Соло",
                              }}
                            >
                              Соло
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program-documents"}
                              state={{
                                nameId: "Юниоры",
                                groupId: 1,
                                disciplineId: 2,
                                disciplineName: "Дуэт",
                              }}
                            >
                              Дуэт
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program-documents"}
                              state={{
                                nameId: "Юниоры",
                                groupId: 1,
                                disciplineId: 3,
                                disciplineName: "Дуэт Смешанный",
                              }}
                            >
                              Дуэт Смешанный
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program-documents"}
                              state={{
                                nameId: "Юниоры",
                                groupId: 1,
                                disciplineId: 4,
                                disciplineName: "Группа",
                              }}
                            >
                              Группа
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program-documents"}
                              state={{
                                nameId: "Юниоры",
                                groupId: 1,
                                disciplineId: 5,
                                disciplineName: "Акробатическая группа",
                              }}
                            >
                              Акробатическая группа
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li onClick={() => setActiveDocumentsProgram(2)}>
                      13-15 лет
                      {activeDocumentsProgram === 2 && (
                        <ul>
                          <li>
                            <NavLink
                              to={"/ratings-any-program-documents"}
                              state={{
                                nameId: "13-15 лет",
                                groupId: 2,
                                disciplineId: 1,
                                disciplineName: "Соло",
                              }}
                            >
                              Соло
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program-documents"}
                              state={{
                                nameId: "13-15 лет",
                                groupId: 2,
                                disciplineId: 2,
                                disciplineName: "Дуэт",
                              }}
                            >
                              Дуэт
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program-documents"}
                              state={{
                                nameId: "13-15 лет",
                                groupId: 2,
                                disciplineId: 3,
                                disciplineName: "Дуэт Смешанный",
                              }}
                            >
                              Дуэт Смешанный
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program-documents"}
                              state={{
                                nameId: "13-15 лет",
                                groupId: 2,
                                disciplineId: 4,
                                disciplineName: "Группа",
                              }}
                            >
                              Группа
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program-documents"}
                              state={{
                                nameId: "13-15 лет",
                                groupId: 2,
                                disciplineId: 5,
                                disciplineName: "Комби",
                              }}
                            >
                              Комби
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li onClick={() => setActiveDocumentsProgram(3)}>
                      До 13 лет
                      {activeDocumentsProgram === 3 && (
                        <ul>
                          <li>
                            <NavLink
                              to={"/ratings-any-program-documents"}
                              state={{
                                nameId: "До 13 лет",
                                groupId: 3,
                                disciplineId: 1,
                                disciplineName: "Соло",
                              }}
                            >
                              Соло
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program-documents"}
                              state={{
                                nameId: "До 13 лет",
                                groupId: 3,
                                disciplineId: 2,
                                disciplineName: "Дуэт",
                              }}
                            >
                              Дуэт
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program-documents"}
                              state={{
                                nameId: "До 13 лет",
                                groupId: 3,
                                disciplineId: 3,
                                disciplineName: "Дуэт Смешанный",
                              }}
                            >
                              Дуэт Смешанный
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program-documents"}
                              state={{
                                nameId: "До 13 лет",
                                disciplineName: "Группа",
                                groupId: 3,
                                disciplineId: 4,
                              }}
                            >
                              Группа
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/ratings-any-program-documents"}
                              state={{
                                nameId: "До 13 лет",
                                disciplineName: "Комби",
                                groupId: 3,
                                disciplineId: 5,
                              }}
                            >
                              Комби
                            </NavLink>
                          </li>
                        </ul>
                      )}
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

export default ArbitraryProgram;
