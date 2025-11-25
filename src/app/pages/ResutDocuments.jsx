import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ComponentToPrintDocument from "../components/ComponentToPrintDocument";
import ComponentToPrintDocumentResult from "../components/ComponentToPrintDocumentResult";
import { ratingsSliceGetThunk } from "../../redux/ratings/ratingsSlice";
import { useDispatch } from "react-redux";
import CardNumbers from "./CardNumbers";
import StartNumbers from "./StartNumbers";
import Header from "../components/Header";
import HeaderComponent from "../components/HeaderComponent";

const ResutDocuments = () => {
  let data = useLocation();
  const { yearsId, documentsYears, nameId } = data.state;

  const [show, setShow] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [cardNumbers, setCardNumbers] = useState(false);
  const [startNumbers, setStartNumbers] = useState(false);

  window.onafterprint = () => {
    setShow(false);
    setShowResult(false);
    setStartNumbers(false);
    setCardNumbers(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
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
  }, []);

  return (
    <>
      {show ? (
        <ComponentToPrintDocument
          yearsId={yearsId}
          documentsYears={documentsYears}
          nameId={nameId}
        />
      ) : showResult ? (
        <ComponentToPrintDocumentResult
          yearsId={yearsId}
          documentsYears={documentsYears}
          nameId={nameId}
        />
      ) : cardNumbers ? (
        <CardNumbers
          yearsId={yearsId}
          documentsYears={documentsYears}
          nameId={nameId}
        />
      ) : startNumbers ? (
        <StartNumbers
          yearsId={yearsId}
          documentsYears={documentsYears}
          nameId={nameId}
        />
      ) : (
        <>
          <Header />
          <div className="result-documents">
            <div className="container">
              <HeaderComponent
                title={`Протоколы ОП ${documentsYears}`}
                link="/programms/mandatory-program/result-documents"
              />
              <div className="result-documents__btns">
                <button
                  type="button"
                  onClick={() => {
                    setShow(!show);
                    setTimeout(() => {
                      window.print();
                    }, 500);
                  }}
                >
                  Протоколы с оценками
                </button>
                <button
                  onClick={() => {
                    setShowResult(!showResult);
                    setTimeout(() => {
                      window.print();
                    }, 500);
                  }}
                >
                  Протоколы (список с результатами)
                </button>
                {/* <button
              onClick={() => {
                setShow(!show);
                setTimeout(() => {
                  window.print();
                }, 500);
              }}
            >
              Грамоты
            </button> */}
                <button
                  onClick={() => {
                    setCardNumbers(!cardNumbers);

                    setTimeout(() => {
                      window.print();
                    }, 500);
                  }}
                >
                  Карточки
                </button>
                <button
                  onClick={() => {
                    setStartNumbers(!startNumbers);

                    setTimeout(() => {
                      window.print();
                    }, 500);
                  }}
                >
                  Стартовый протокол
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ResutDocuments;
