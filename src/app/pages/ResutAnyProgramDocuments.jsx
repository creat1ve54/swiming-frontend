import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ComponentToPrintDocument from "../components/ComponentToPrintDocument";
import ComponentToPrintDocumentResult from "../components/ComponentToPrintDocumentResult";
import { ratingsSlicAnyProgrameGetThunk } from "../../redux/ratingsAnyProgram/ratingsAnyProgramSlice";
import { useDispatch } from "react-redux";
import ComponentToPrintDocumentResultAnyProgram from "../components/ComponentToPrintDocumentResultAnyProgram";
import ComponentToPrintDocumentAnyProgram from "../components/ComponentToPrintDocumentAnyProgram";
import StartNumbersAnyProgram from "./StartNumbersAnyProgram";
import Header from "../components/Header";
import HeaderComponent from "../components/HeaderComponent";

const ResutAnyProgramDocuments = () => {
  let data = useLocation();
  const {
    yearsId,
    documentsYears,
    nameId,
    groupId,
    disciplineId,
    disciplineName,
    categories,
  } = data.state;

  console.log(data.state);

  const [show, setShow] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [startNumbers, setStartNumbers] = useState(false);

  window.onafterprint = () => {
    setShow(false);
    setShowResult(false);
    setStartNumbers(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(ratingsSlicAnyProgrameGetThunk({ groupId, disciplineId })).then(
      (data) => {
        console.log(data);

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
      }
    );
  }, []);

  return (
    <>
      {show ? (
        <ComponentToPrintDocumentAnyProgram
          groupId={groupId}
          disciplineId={disciplineId}
          disciplineName={categories}
          nameId={nameId}
        />
      ) : showResult ? (
        <ComponentToPrintDocumentResultAnyProgram
          groupId={groupId}
          disciplineId={disciplineId}
          disciplineName={categories}
          nameId={nameId}
        />
      ) : startNumbers ? (
        <StartNumbersAnyProgram
          groupId={groupId}
          disciplineId={disciplineId}
          disciplineName={categories}
          nameId={nameId}
        />
      ) : (
        <>
          <Header />
          <div className="result-documents">
            <div className="container">
              <HeaderComponent
                title={`Протоколы ПП ${categories}`}
                link="/programms/arbitrary-program/ratings-any-program-documents"
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
                // onClick={() => {
                //   setShowResult(!showResult);
                //   setTimeout(() => {
                //     window.print();
                //   }, 500);
                // }}
                >
                  Протоколы c оценками укороченный
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
                <button
                  onClick={() => {
                    setShow(!show);
                    setTimeout(() => {
                      window.print();
                    }, 500);
                  }}
                >
                  Грамоты
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

export default ResutAnyProgramDocuments;
