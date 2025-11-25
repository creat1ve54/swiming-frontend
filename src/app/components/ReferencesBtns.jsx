import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ModalRefereces from "./ModalRefereces";
import ReferencesTable from "./ReferencesTable";
import { useAppSelector } from "../../redux/hooks";

import { useDispatch } from "react-redux";
import {
  elementsOfTechnicalProgramsThunk,
  elementsProgramThunk,
} from "../../redux/referencesBtns/referencesBtns";

const ReferencesBtns = () => {
  const dispatch = useDispatch();

  const { elementsOfTechnicalPrograms } = useAppSelector(
    (state) => state.referencesBtnsSlice
  );
  const { elementsPrograms } = useAppSelector(
    (state) => state.referencesBtnsSlice
  );

  const [showTable, setShowTable] = useState(false);

  const [arrayBodyText, setArrayBodyText] = useState([]);
  const [arrayBodyTextObject, setArrayBodyTextObject] = useState([]);
  const [elementsOfTechnicalProgramId, setElementsOfTechnicalProgramId] =
    useState(0);

  const [activeTeamProgram, setActiveTeamProgram] = useState(0);

  const arrayHeaderProgramm = [
    {
      id: 1,
      title: "Элемент",
    },
    {
      id: 2,
      title: "Коэффицент",
    },
  ];

  console.log(elementsOfTechnicalPrograms);
  console.log(arrayBodyText);
  
  

  useEffect(() => {
    dispatch(elementsOfTechnicalProgramsThunk({groupId: 1}));
    dispatch(elementsProgramThunk({groupId: 1, elementsOfTechnicalProgramId: 1}));
  }, [dispatch]);

  return (
    <div className="references-btns">
      <ul>
        <li onClick={() => {
            setActiveTeamProgram(1)
            dispatch(elementsOfTechnicalProgramsThunk({groupId: 1}));
          }}>
          Юниоры произ. программа
          {activeTeamProgram === 1 && (
            <ul className="references-btns__list">
              {elementsOfTechnicalPrograms.map((elementsOfTechnicalProgram, index) => (
                <li
                  className="references-btns__item"
                  key={elementsOfTechnicalProgram.id}
                >
                  <button
                    onClick={() => {
                      dispatch(elementsProgramThunk({groupId: 1, elementsOfTechnicalProgramId: index + 1})).then((data) => {
                        setArrayBodyText(data.payload);
                      })
                      setArrayBodyText(elementsPrograms);
                      setShowTable(!showTable);
                      setElementsOfTechnicalProgramId(
                        elementsOfTechnicalProgram.id
                      );
                      console.log(elementsPrograms);
                      setArrayBodyTextObject(["nameElementProgram", "ratio"]);
                      
                    }}
                    className="references-btns__link body"
                    type="button"
                  >
                    {elementsOfTechnicalProgram.nameElementsProgram}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li onClick={() => {
          setActiveTeamProgram(2)
          dispatch(elementsOfTechnicalProgramsThunk({groupId: 2}));
          
          }}>
          13-15 лет
          {activeTeamProgram === 2 && (
            <ul className="references-btns__list">
              {elementsOfTechnicalPrograms.map((elementsOfTechnicalProgram, index) => (
                <li
                  className="references-btns__item"
                  key={elementsOfTechnicalProgram.id}
                >
                  <button
                    onClick={() => {

                      dispatch(elementsProgramThunk({groupId: 2, elementsOfTechnicalProgramId: index + 1})).then((data) => {                       
                        setArrayBodyText(data.payload);
                      })
                      setShowTable(!showTable);
                      setElementsOfTechnicalProgramId(
                        elementsOfTechnicalProgram.id
                      );
                      console.log(elementsPrograms);
                      setArrayBodyTextObject(["nameElementProgram", "ratio"]);
                    }}
                    className="references-btns__link body"
                    type="button"
                  >
                    {elementsOfTechnicalProgram.nameElementsProgram}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li onClick={() => {
          setActiveTeamProgram(3)
          dispatch(elementsOfTechnicalProgramsThunk({groupId: 3}));
          }}>
          До 13лет
          {activeTeamProgram === 3 && (
            <ul className="references-btns__list">
              {elementsOfTechnicalPrograms.map((elementsOfTechnicalProgram, index) => (
                <li
                  className="references-btns__item"
                  key={elementsOfTechnicalProgram.id}
                >
                  <button
                    onClick={() => {
                      dispatch(elementsProgramThunk({groupId: 3, elementsOfTechnicalProgramId: index + 1})).then((data) => {
                        setArrayBodyText(data.payload);
                      })
                      setShowTable(!showTable);
                      setElementsOfTechnicalProgramId(
                        elementsOfTechnicalProgram.id
                      );
                      console.log(elementsPrograms);
                      setArrayBodyTextObject(["nameElementProgram", "ratio"]);
                    }}
                    className="references-btns__link body"
                    type="button"
                  >
                    {elementsOfTechnicalProgram.nameElementsProgram}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li onClick={() => {
          setActiveTeamProgram(4)
          dispatch(elementsOfTechnicalProgramsThunk({groupId: 4}));
          }}>
          Юниоры тех. программа
          {activeTeamProgram === 4 && (
            <ul className="references-btns__list">
              {elementsOfTechnicalPrograms.map((elementsOfTechnicalProgram, index) => (
                <li
                  className="references-btns__item"
                  key={elementsOfTechnicalProgram.id}
                >
                  <button
                    onClick={() => {
                      dispatch(elementsProgramThunk({groupId: 4, elementsOfTechnicalProgramId: index + 1})).then((data) => {
                        setArrayBodyText(data.payload);
                      })
                      setShowTable(!showTable);
                      setElementsOfTechnicalProgramId(
                        elementsOfTechnicalProgram.id
                      );
                      console.log(elementsPrograms);
                      setArrayBodyTextObject(["nameElementProgram", "ratio"]);
                    }}
                    className="references-btns__link body"
                    type="button"
                  >
                    {elementsOfTechnicalProgram.nameElementsProgram}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
      <ModalRefereces
        component={
          <ReferencesTable
            arrayHeader={arrayHeaderProgramm}
            arrayBodyText={arrayBodyText}
            elementsOfTechnicalProgramId={elementsOfTechnicalProgramId}
            arrayBodyTextObject={arrayBodyTextObject}
          />
        }
        setShow={setShowTable}
        show={showTable}
      />
    </div>
  );
};

export default ReferencesBtns;
