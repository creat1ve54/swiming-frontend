import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Svg from "../../assets/svg/Svg";

const fetchBreadcrumbName = (segment, location) => {
  // Здесь можно сделать асинхронный запрос или динамический маппинг
  // Пока пример с простым динамическим определением:
  const dynamicNames = new Map([
    ["programms", "Программы"],
    ["mandatory-program", "Обязательная"],
    ["the-judging-team", "Судейские бригады"],
    ["mandatory-program-list", "Фигуры"],
    ["the-draw", "Жеребьевка"],
    ["ratings", "Ввод оценок"],
    ["result-documents", "Документы"],
    ["references", "Справочники"],
    ["references-info", ""],
    ["references-programm-btn-info", "Элементы тех. программ"],
    ["references-programm-info", ""],
    ["do-13-let", "До 13 лет"],
    ["13-15-let", "13-15 лет"],
    ["delphinik-1", "Дельфинник-1"],
    ["delphinik-2", "Дельфинник-2"],
    ["arbitrary-program", "Произвольная"],
    ["any-team-program", "Команды"],
    ["the-judging-team-any-program", "Судейские бригады"],
    ["the-draw-any-program", "Жеребьевка"],
    ["ratings-any-program", "Ввод оценок"],
    ["ratings-any-program-documents", "Документы"],
    ["dyet", "Дуэт"],
    ["dyet-smeshani", "Дуэт смешанный"],
    ["grypa", "Группа"],
    ["kombi", "Комби"],
    ["akrobat-grypa", "Акробатическая группа"],
    ["solo", "Соло"],
    ["", ""],
  ]);

  if (location.state && dynamicNames.has("references-info")) {
    dynamicNames.set("references-info", location.state.title);
  }

  if (location.state && dynamicNames.has("references-programm-info")) {
    dynamicNames.set("references-programm-info", location.state.title);
  }

  return dynamicNames.get(segment) || segment;
};

const Breadcrumbs = () => {
  const location = useLocation();  

  const paths = location.pathname.split("/").filter((x) => x);

  const crumbs = paths.map((crumb, idx) => {
    const path = "/" + paths.slice(0, idx + 1).join("/");
    const label = fetchBreadcrumbName(crumb, location);

    return (
      <span className="breadcrumbs" key={path}>
        {idx === paths.length - 1 ? (
          <span className="breadcrumbs__link">{label}</span>
        ) : (
          <>
            {location.state && location.state.title ? (
              <NavLink
                state={{ title: label }}
                className="breadcrumbs__link"
                to={path}
              >
                {label}
              </NavLink>
            ) : (
              <NavLink className="breadcrumbs__link" to={path}>
                {label}
              </NavLink>
            )}
            <Svg name={"arrowRight"} width={24} height={24} color={"#999999"} />
          </>
        )}
      </span>
    );
  });

  return <nav>{crumbs}</nav>;
};

export default Breadcrumbs;
