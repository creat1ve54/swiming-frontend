import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Svg from "../../assets/svg/Svg";

import Deliver from "../../assets/svg/delivery.png";
import Modal from "./Modal";
import TournamentName from "./TournamentName";

const Header = () => {
  const [show, setShow] = useState(false);
  const onModal = () => {
    setShow(!show);
  };
  return (
    <div className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__logo">
            <Svg name={"logo"} width={98} height={56}/>
            <div>Система поддержки судейства синхронного плавания</div>
          </div>
          <nav className="header__navigation">
            <NavLink className="header__link" to={"/"}>
              Главная
            </NavLink>
            <NavLink className="header__link" to={"/programms"}>
              Программы
            </NavLink>
            <NavLink className="header__link" to={"/participants"}>
              Участники
            </NavLink>
            <NavLink className="header__link" to={"/references"}>
              Справочники
            </NavLink>
            {/* <span className="header__link" onClick={onModal}>
              Название соревнований
            </span> */}
            {/* <NavLink className="header__link">Грамоты</NavLink>
            <NavLink className="header__link" to={"/teams"}>
              Команды
            </NavLink>
            <NavLink className="header__link" to={"/referees-and-coaches"}>
              Судьи, тренеры
            </NavLink>
            <NavLink className="header__link" to={"/references"}>
              Справочники
            </NavLink>
            <NavLink className="header__link" to={"/mandatory-program"}>
              Обязательная программа
            </NavLink>
            <NavLink className="header__link" to={"/arbitrary-program"}>
              Произвольная программа
            </NavLink>
            <NavLink className="header__link" to={"/juniors"}>
              ЮНИОРЫ (техническая и произвольная программы)
            </NavLink> */}
          </nav>
          {/* <NavLink className="header__setting">Настройка</NavLink> */}
        </div>
      </div>
      <Modal component={<TournamentName />} show={show} setShow={setShow} />
    </div>
  );
};

export default Header;
