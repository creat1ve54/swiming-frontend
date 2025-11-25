import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import Header from "../components/Header";
import { NavLink, useLocation } from "react-router-dom";
import Accordion from "../components/Accordion";
import Svg from "../../assets/svg/Svg";
import { useDispatch } from "react-redux";
import {
  elementsOfTechnicalProgramsThunk,
  elementsProgramThunk,
} from "../../redux/referencesBtns/referencesBtns";

const ReferencesProgrammInfo = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  
  const { groupId, elementsOfTechnicalProgramId } = location.state;

  const [arrayBodyText, setArrayBodyText] = useState([]);
  const [arrayBodyTextObject, setArrayBodyTextObject] = useState([]);

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
  
  useEffect(() => {
    dispatch(elementsOfTechnicalProgramsThunk({ groupId: groupId }));
    dispatch(
      elementsProgramThunk({ groupId: groupId, elementsOfTechnicalProgramId: elementsOfTechnicalProgramId })
    ).then((data)=>{
      setArrayBodyText(data.payload);
      setArrayBodyTextObject(["nameElementProgram", "ratio"]);
    });
  }, [dispatch]);

  

  return (
    <>
      <Header />
      <div className="references-info">
        <div className="container">
          <HeaderComponent title={location.state.title} link="/references/references-programm-btn-info" />
          <table>
            <thead>
              <tr>
                {arrayHeaderProgramm?.map((header) => (
                  <th key={header.id}>{header.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {arrayBodyText?.map(
                (body) => (
                    <tr key={body.id}>
                      {arrayBodyTextObject.map((el, index) => (
                        <td key={index}>
                          {body[`${[arrayBodyTextObject[index]]}`]}
                        </td>
                      ))}
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ReferencesProgrammInfo;
