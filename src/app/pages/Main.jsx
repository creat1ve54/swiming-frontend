import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Svg from "../../assets/svg/Svg";
import { useAppSelector } from "../../redux/hooks";
import TournamentName from "../components/TournamentName";
import Modal from "../components/Modal";

const Main = () => {
  const { tournament } = useAppSelector((state) => state.tournamentNameSlice);

  const [show, setShow] = useState(false);
  const onModal = () => {
    setShow(!show);
  };

  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="main__container">
            <div className="header-page">
              <h1 className="title">Главная</h1>
              <p className="description">
                Добро пожаловать в систему поддержки судейства синхронного
                плавания! <br /> Данный сервис предназначен для оперативного
                оценивания и управления критериями судейства. Простота и
                удобство интерфейса позволят быстро и точно фиксировать
                результаты, обеспечивая прозрачность и объективность оценки
                выступлений.
              </p>
            </div>
            <div>
              <div className="card-info__item" onClick={onModal}>
                <div className="card-info__item-header">
                  <h2 className="card-info__item-title">
                    Название соревнований
                  </h2>
                  <div className="card-info__item-icon">
                    <Svg
                      name={"arrowRight"}
                      width={24}
                      height={24}
                      color={"white"}
                    />
                  </div>
                </div>
                {!tournament.tournamentName ? (
                  "Нет названия"
                ) : (
                  <div className="card-info__item-text">
                    {tournament.tournamentName}
                  </div>
                )}
                {tournament.dateAndPlaceOfRealization && (
                  <div className="card-info__item-text">
                    {tournament.dateAndPlaceOfRealization}
                  </div>
                )}
              </div>

              <Modal
                component={<TournamentName />}
                show={show}
                setShow={setShow}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
