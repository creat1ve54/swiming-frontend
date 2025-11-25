import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { ratingsSliceGetThunk } from "../../redux/ratings/ratingsSlice";

const StartNumbers = ({
  yearsId,
  documentsYears,
  nameId,
  groupId,
  disciplineId,
  disciplineName,
}) => {
  const dispatch = useDispatch();

  const { tournamentName } = useAppSelector(
    (state) => state.tournamentNameSlice.tournament
  );
  const { dateAndPlaceOfRealization } = useAppSelector(
    (state) => state.tournamentNameSlice.tournament
  );
  //   const { mainProgram } = useAppSelector(
  //     (store) => store.mandatoryProgramRefereeSlice
  //   );

  //   const { ageGroup } = useAppSelector((state) => state.ageGroupSlice);

  //   const { subgroupFigures, subgroupFiguresResult } = useAppSelector(
  //     (state) => state.subgroupFiguresSlice
  //   );

  const navigate = useNavigate();

  const contentRef = useRef(null);
  const [isLastPage, setIsLastPage] = useState(false);

  const { ratingsSportsmans, activeRatingsSportsmans } = useAppSelector(
    (state) => state.ratingsSlice
  );

  useEffect(() => {
    const handleBeforePrint = () => {
      const content = contentRef.current;

      console.log(content);

      if (content) {
        const contentHeight = content.scrollHeight;
        const pageHeight = window.innerHeight;

        console.log(contentHeight);
        console.log(pageHeight);

        // Проверяем, превышает ли высота контента высоту страницы
        if (contentHeight > pageHeight) {
          setIsLastPage(true);
        }
      }
    };

    const handleAfterPrint = () => {
      setIsLastPage(false); // Возвращаем исходное состояние
    };

    dispatch(ratingsSliceGetThunk(nameId)).then((data) => {
      if (data.payload.error) {
        alert("Нет спортсменов");
        navigate(-1);
        return;
      } else {
        if (data.payload.length == 0) {
          alert("Нет спортсменов");
          navigate(-1);
          return;
        }
      }
    });
    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, [dispatch]);

  console.log(ratingsSportsmans);
  

  return (
    <div className="card-numbers" ref={contentRef}>
      <div className="container">
        <div className="card-numbers__container">
          {!disciplineId ? (
            ratingsSportsmans.map((item, index) => (
              <div
                key={index}
                className="card-numbers__item"
                style={{ borderTop: "1px dashed black" }}
              >
                <div style={{ textAlign: "center", marginBottom: "0px" }}>
                  {tournamentName}
                </div>
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  {dateAndPlaceOfRealization}
                </div>
                <table>
                  <thead>
                    <tr className="no-border">
                      <th colSpan="6" style={{ textAlign: "left" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          <div>ОБЯЗАТЕЛЬНАЯ ПРОГРАММА</div>
                          <div>Девочки, мальчики {documentsYears}</div>
                        </div>
                      </th>
                      <th
                        colSpan="6"
                        style={{ textAlign: "left", verticalAlign: "baseline" }}
                      >
                        Фигуры
                      </th>
                      <th>Стартовый номер</th>
                      <th>{item.drawsNumber}</th>
                    </tr>
                    <tr>
                      <th colSpan="2" style={{ width: "10%" }}>
                        Фигуры
                      </th>
                      <th colSpan="7" style={{ width: "30%" }}>
                        Оценки судей
                      </th>
                      <th rowSpan="2">Сумма</th>
                      <th rowSpan="2" style={{ width: "5%" }}>
                        Средняя оценка
                      </th>
                      <th rowSpan="2">КТ</th>
                      <th rowSpan="2" style={{ width: "8%" }}>
                        Оценка (ср. x КТ)
                      </th>
                      <th rowSpan="2">Штраф</th>
                    </tr>
                    <tr>
                      <th>Фиг.</th>
                      <th>№</th>
                      <th style={{ width: "7%" }}>1</th>
                      <th style={{ width: "7%" }}>2</th>
                      <th style={{ width: "7%" }}>3</th>
                      <th style={{ width: "7%" }}>4</th>
                      <th style={{ width: "7%" }}>5</th>
                      <th style={{ width: "7%" }}>6</th>
                      <th style={{ width: "7%" }}>7</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    {item.MPScoreArray.map((scoreItem, index) => (
                      <tr key={index}>
                        <td>{scoreItem.subgroupFigure.figure.kod}</td>
                        <td>{scoreItem.subgroupFigure.brigadeNumber}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{scoreItem.subgroupFigure.figure.ratio}</td>
                        <td></td>
                        <td></td>
                      </tr>
                    ))}
                    {/* <tr>
                    <td>106</td>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1.6</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>301</td>
                    <td>2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1.8</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>363</td>
                    <td>3</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1.8</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>401</td>
                    <td>4</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>2.1</td>
                    <td></td>
                    <td></td>
                  </tr> */}
                    <tr className="card-numbers__item-surname">
                      <td colSpan="4">Фамилия имя:</td>
                      <td
                        colSpan="6"
                        style={{ fontSize: "20px", fontWeight: "700" }}
                      >
                        {item.sportsman.surnameAndFirstname}
                      </td>
                      <td style={{ height: "50px" }}>Сумма</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="card-numbers__item-years">
                      <td colSpan="4">Год рождения:</td>
                      <td
                        colSpan="6"
                        style={{ fontSize: "20px", fontWeight: "700" }}
                      >
                        {item.sportsman.years}
                      </td>
                      <td style={{ fontSize: "12px" }} colSpan="2">
                        сумму / на КТ и умножить на10
                      </td>
                      <td></td>
                    </tr>
                    <tr className="card-numbers__item-team">
                      <td colSpan="4">Команда:</td>
                      <td colSpan="6">{item.sportsman.team.nameTeam}</td>
                      <td colSpan="2">минус штраф</td>
                      <td></td>
                    </tr>
                    <tr className="card-numbers__item-result">
                      <td colSpan="10"></td>
                      <td colSpan="2">результат 100%</td>
                      <td></td>
                    </tr>
                    <tr className="card-numbers__item-place">
                      <td colSpan="10"></td>
                      <td colSpan="2">Место</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartNumbers;
