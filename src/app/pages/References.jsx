import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import ReferencesTable from "../components/ReferencesTable";
import { NavLink } from "react-router-dom";
import ReferencesBtns from "../components/ReferencesBtns";
import { useAppSelector } from "../../redux/hooks";
import {
  changeBodyReferee,
  refereesThunk,
} from "../../redux/references/refereesSlice";
import {
  changeBodyFigure,
  figuresThunk,
} from "../../redux/references/figureSlice";
import {
  ageGroupThunk,
  // changeBodyAgeGroup,
} from "../../redux/references/ageGroupSlice";
import ModalRefereces from "../components/ModalRefereces";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import Svg from "../../assets/svg/Svg";

const References = () => {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState("");

  const [showBtns, setShowBtns] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const [arrayHeader, setArrayHeader] = useState([]);
  const [arrayBodyText, setArrayBodyText] = useState([]);

  const [arrayBodyTextObject, setArrayBodyTextObject] = useState([]);

  const [change, setChange] = useState();

  const { arrayBodyReferee, arrayHeaderReferee, referees } = useAppSelector(
    (state) => state.refereeSlice
  );
  const { arrayBodyFigure, arrayHeaderFigure, figures } = useAppSelector(
    (state) => state.figureSlice
  );
  const { ageGroup, arrayHeaderAgeGroup } = useAppSelector(
    (state) => state.ageGroupSlice
  );

  useEffect(() => {
    dispatch(ageGroupThunk());
    dispatch(figuresThunk());
    dispatch(refereesThunk());
    // if (flag === "referee") {
    //   setArrayBodyText(arrayBodyReferee);
    // } else if (flag === "figure") {
    //   setArrayBodyText(arrayBodyFigure);
    // } else if (flag === "ageGroup") {
    //   setArrayBodyText(ageGroup);
    // }
  }, [
    arrayBodyReferee,
    arrayBodyFigure,
    // ageGroup,
    change,
    dispatch,
  ]);

  return (
    <>
      <Header />
      <div className="references">
        <div className="container">
          <div className="header-page">
            <h1 className="title">Справочники</h1>
            <p className="description">
              В этом разделе собраны ключевые справочные материалы по судейству
              и правилам соревнований по синхронному плаванию. Здесь можно найти
              актуальные регламенты, критерии оценок, перечни обязательных
              элементов, нормативные документы и материалы, способные помочь
              судьям, тренерам и спортсменам и обеспечить точность и
              объективность в оценке выступлений.
            </p>
          </div>
          <div className="card-info__list">
            <NavLink
              to={"references-info"}
              className="card-info__item"
              state={{
                title: "Обязанности судей",
                arrayHeader: [...arrayHeaderReferee],
                arrayBodyText: [...referees],
                arrayBodyTextObject: ["name", "nameShort"],
              }}
            >
              <div className="card-info__item-header">
                <h2 className="card-info__item-title">Обязанности судей</h2>
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
                Описание функций и ответственности судей на соревнованиях,
                включая критерии оценивания, правила работы и этические нормы.
              </div>
            </NavLink>
            <NavLink
              to={"references-info"}
              className="card-info__item"
              state={{
                title: "Возрастные группы",
                arrayHeader: [...arrayHeaderAgeGroup],
                arrayBodyText: [...ageGroup],
                arrayBodyTextObject: ["name", "nameShort"],
              }}
            >
              <div className="card-info__item-header">
                <h2 className="card-info__item-title">Возрастные группы</h2>
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
                Классификация спортсменов по возрасту согласно регламенту
                соревнований. Определяет категории участников и соответствующие
                им требования.
              </div>
            </NavLink>
            <NavLink
              to={"references-info"}
              className="card-info__item"
              state={{
                title: "Фигуры",
                arrayHeader: [...arrayHeaderFigure],
                arrayBodyText: [...figures],
                arrayBodyTextObject: ["kod", "name", "nameEng", "ratio"],
              }}
            >
              <div className="card-info__item-header">
                <h2 className="card-info__item-title">Фигуры</h2>
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
                Список обязательных фигур, используемых в программах синхронного
                плавания. Включает описание техники исполнения и критерии
                оценки.
              </div>
            </NavLink>
            <NavLink
              to={"references-programm-btn-info"}
              className="card-info__item"
              state={{ title: "Элементы тех. программ", isTechProgram: true }}
            >
              <div className="card-info__item-header">
                <h2 className="card-info__item-title">
                  Элементы тех. программ
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
              <div className="card-info__item-text">
                Перечень установленных элементов, которые спортсмены выполняют в
                технических программах. Оценивается точность, сложность и
                качество исполнения.
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default References;
