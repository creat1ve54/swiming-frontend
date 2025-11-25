import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Svg from "../../assets/svg/Svg";

const Programms = () => {
  return (
    <>
      <Header />
      <div className="programms">
        <div className="container">
          <div className="header-page">
            <h1 className="title">Программы</h1>
            <p className="description">
              В этом разделе представлены программы выступлений участников
              соревнований по синхронному плаванию. Здесь вы найдете состав
              каждой программы, включая технические, произвольные и
              комбинированные выступления. Информация поможет следить за
              соревнованиями и оценивать выступления спортсменов в соответствии
              с регламентом турнира.
            </p>
          </div>
          <div className="card-info__list">
            <NavLink to={"mandatory-program"} className="card-info__item">
              <div className="card-info__item-header">
                <h2 className="card-info__item-title">Обязательная</h2>
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
                Включает элементы, которые спортсмены выполняют в строго
                установленном порядке. Оценивается техническая точность,
                синхронность и чистота исполнения.
              </div>
            </NavLink>
            <NavLink to={"arbitrary-program"} className="card-info__item">
              <div className="card-info__item-header">
                <h2 className="card-info__item-title">Произвольная</h2>
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
                Дает спортсменам больше свободы в выборе движений и хореографии.
                Жюри оценивает артистизм, сложность композиций и синхронность
                исполнения.
              </div>
            </NavLink>
            <NavLink to={"juniors"} className="card-info__item">
              <div className="card-info__item-header">
                <h2 className="card-info__item-title">ЮНИОРЫ</h2>
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
                Состоит из двух частей: технической (обязательные элементы), и
                произвольной, где демонстрируют креативность и сложность
                постановки.
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programms;
