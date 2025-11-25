import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Accordion from "../components/Accordion";
import Svg from "../../assets/svg/Svg";

const ReferencesProgrammBtnInfo = () => {

  

  return (
    <>
      <Header />
      <div className="references-info">
        <div className="container">
          <HeaderComponent title={'Элементы тех. программ'} link="/references" />
          <div className="references-info__items">
            <Accordion
              title={
                <>
                  ЮНИОРЫ
                  <Svg
                    name={"arrowRight"}
                    width={24}
                    height={24}
                    color={"#4C74C1"}
                  />
                </>
              }
            >
              <Accordion
                title={
                  <>
                    Произвольная программа
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
                    to={"references-programm-info"}
                    state={{
                      title: "Соло (ЮНИОРЫ произвольная программа)",
                      groupId: 1,
                      elementsOfTechnicalProgramId: 1,
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
                    to={"references-programm-info"}
                    state={{
                      title: "Дуэт (ЮНИОРЫ произвольная программа)",
                      groupId: 1,
                      elementsOfTechnicalProgramId: 2,
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
                    to={"references-programm-info"}
                    state={{
                      title: "Дуэт-смешанный (ЮНИОРЫ произвольная программа)",
                      groupId: 1,
                      elementsOfTechnicalProgramId: 3,
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
                    to={"references-programm-info"}
                    state={{
                      title: "Группа (ЮНИОРЫ произвольная программа)",
                      groupId: 1,
                      elementsOfTechnicalProgramId: 4,
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
                    to={"references-programm-info"}
                    state={{
                      title:
                        "Акробатическая группа (ЮНИОРЫ произвольная программа)",
                      groupId: 1,
                      elementsOfTechnicalProgramId: 5,
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
                    Техническая программа
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
                    to={"references-programm-info"}
                    state={{
                      title: "Соло (ЮНИОРЫ техническая программа)",
                      groupId: 4,
                      elementsOfTechnicalProgramId: 1,
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
                    to={"references-programm-info"}
                    state={{
                      title: "Дуэт (ЮНИОРЫ техническая программа)",
                      groupId: 4,
                      elementsOfTechnicalProgramId: 2,
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
                    to={"references-programm-info"}
                    state={{
                      title: "Дуэт-смешанный (ЮНИОРЫ техническая программа)",
                      groupId: 2,
                      elementsOfTechnicalProgramId: 3,
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
                    to={"references-programm-info"}
                    state={{
                      title: "Группа (ЮНИОРЫ техническая программа)",
                      groupId: 2,
                      elementsOfTechnicalProgramId: 4,
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
                </div>
              </Accordion>
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
                  to={"references-programm-info"}
                  state={{
                    title: "Соло (13-15 лет)",
                    groupId: 2,
                    elementsOfTechnicalProgramId: 1,
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
                  to={"references-programm-info"}
                  state={{
                    title: "Дуэт (13-15 лет)",
                    groupId: 2,
                    elementsOfTechnicalProgramId: 2,
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
                  to={"references-programm-info"}
                  state={{
                    title: "Дуэт-смешанный (13-15 лет)",
                    groupId: 2,
                    elementsOfTechnicalProgramId: 3,
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
                  to={"references-programm-info"}
                  state={{
                    title: "Группа (13-15 лет)",
                    groupId: 2,
                    elementsOfTechnicalProgramId: 4,
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
                  to={"references-programm-info"}
                  state={{
                    title: "Комби (13-15 лет)",
                    groupId: 2,
                    elementsOfTechnicalProgramId: 5,
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
                  to={"references-programm-info"}
                  state={{
                    title: "Соло (До 13 лет)",
                    groupId: 3,
                    elementsOfTechnicalProgramId: 1,
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
                  to={"references-programm-info"}
                  state={{
                    title: "Дуэь (До 13 лет)",
                    groupId: 3,
                    elementsOfTechnicalProgramId: 2,
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
                  to={"references-programm-info"}
                  state={{
                    title: "Дуэт-смешанный (До 13 лет)",
                    groupId: 3,
                    elementsOfTechnicalProgramId: 3,
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
                  to={"references-programm-info"}
                  state={{
                    title: "Группа (До 13 лет)",
                    groupId: 3,
                    elementsOfTechnicalProgramId: 4,
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
                  to={"references-programm-info"}
                  state={{
                    title: "Комби (До 13 лет)",
                    groupId: 3,
                    elementsOfTechnicalProgramId: 5,
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
        </div>
      </div>
    </>
  );
};

export default ReferencesProgrammBtnInfo;
