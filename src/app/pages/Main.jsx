import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = () => {
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
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
