import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import {
  sportsmansSliceThunk,
  teamsSliceThunk,
} from "../../redux/teams/teamsSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { ageGroupThunk } from "../../redux/references/ageGroupSlice";
import HeaderComponent from "../components/HeaderComponent";
import LeftNavigation from "./LeftNavigation";
import Svg from "../../assets/svg/Svg";
import Accordion from "../components/Accordion";

const Juniors = () => {
  // const [active, setActive] = useState(1);
  const dispatch = useDispatch();

  // const { teams } = useAppSelector((state) => state.teamsSlice);
  // const { sportsmans } = useAppSelector((state) => state.teamsSlice);
  // const { ageGroup } = useAppSelector((state) => state.ageGroupSlice);

  // useEffect(() => {
  //   dispatch(teamsSliceThunk());
  //   dispatch(sportsmansSliceThunk());
  //   dispatch(ageGroupThunk());
  // }, [dispatch]);

  const [links, setLinks] = useState([
    {
      url: "team-program",
      name: "Команды",
    },
    {
      url: "the-judging-team",
      name: "Судейские бригады",
    },
    {
      url: "the-draw",
      name: "Жеребьевка",
    },
    {
      url: "rating",
      name: "Ввод оценок",
    },
    {
      url: "rating-documents",
      name: "Документы",
    },
  ]);

  return (
    <>
      <Header />
      <div className="juniors">
        <div className="container">
          <HeaderComponent title="Техническая программа" link="/programms" />
          <div className="flex">
            <LeftNavigation className="flex__left" links={links} />

            <div className="flex__right">
              <Routes>
                <Route
                  index
                  element={<Navigate to="team-program" replace />}
                ></Route>
                <Route
                  path="team-program"
                  element={
                    <div className="mandatory-program__links">
                      <div className="references-info__list">
                        <NavLink
                          to={"dyet"}
                          state={{
                            anyTeamProgram: 6,
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
                            anyTeamProgram: 7,
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
                            anyTeamProgram: 8,
                            anyTeamProgramYears: 1,
                            anyTeamProgramName: "Группа",
                            anyTeamProgramYearsName: "Юниоры",
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
                            anyTeamProgram: 9,
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
                    </div>
                  }
                ></Route>
                <Route
                  path="the-judging-team"
                  element={
                    <Navigate
                      to="yniori"
                      replace
                      state={{
                        categories: "Техника",
                      }}
                    />
                  }
                ></Route>
                <Route
                  path="the-draw"
                  element={
                    <div className="mandatory-program__links">
                      <div className="references-info__list">
                        <NavLink
                          to={"dyet"}
                          state={{
                            nameId: "Юниоры",
                            groupId: 1,
                            disciplineId: 6,
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
                            disciplineId: 7,
                            categories: "Дуэт-смешанный (Юниоры)",
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
                            disciplineId: 8,
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
                            disciplineId: 9,
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
                    </div>
                  }
                ></Route>
                <Route
                  path="rating"
                  element={
                    <div className="mandatory-program__links">
                      <div className="references-info__list">
                        <NavLink
                          to={"dyet"}
                          state={{
                            nameId: "Юниоры",
                            groupId: 1,
                            disciplineId: 6,
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
                            disciplineId: 7,
                            categories: "Дуэт-смешанный (Юниоры)",
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
                            disciplineId: 8,
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
                            disciplineId: 9,
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
                    </div>
                  }
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Juniors;
