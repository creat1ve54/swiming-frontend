import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Svg from "../../assets/svg/Svg";

const Participants = () => {
  return (
    <>
      <Header />
      <div className="participants">
        <div className="container">
          <div className="header-page">
            <h1 className="title">Участники</h1>
            <p className="description">
              В этом разделе представлены ключевые фигуры соревнований — судьи,
              тренеры и спортсмены. Здесь можно найти информацию об официальных
              лицах, оценивающих выступления, а также о спортсменах, принимающих
              участие в турнире.
            </p>
          </div>
          <div className="card-info__list">
            <NavLink to={"referees-and-coaches"} className="card-info__item">
              <div className="card-info__item-header">
                <h2 className="card-info__item-title">Судьи и тренеры</h2>
                <div className="card-info__item-icon">
                  <Svg
                    name={"arrowRight"}
                    width={24}
                    height={24}
                    color={"white"}
                  />
                </div>
              </div>
              <div className="card-info__item-text">
                Список судей и тренеров, задействованных в соревновании.
                Включает их роли, обязанности и уровень квалификации.
              </div>
            </NavLink>
            <NavLink to={"teams"} className="card-info__item">
              <div className="card-info__item-header">
                <h2 className="card-info__item-title">Команды</h2>
                <div className="card-info__item-icon">
                  <Svg
                    name={"arrowRight"}
                    width={24}
                    height={24}
                    color={"white"}
                  />
                </div>
              </div>
              <div className="card-info__item-text">
                Состав коллективов. Включает список спортсменов, информацию о
                них и их спортивных разрядах.
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Participants;
