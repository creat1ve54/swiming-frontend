import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import Header from "../components/Header";
import {  useLocation } from "react-router-dom";

const ReferencesInfo = () => {
  const location = useLocation();


  const {
    arrayHeader,
    arrayBodyText,
    elementsOfTechnicalProgramId,
    arrayBodyTextObject,
  } = location.state;



  return (
    <>
      <Header />
      <div className="references-info">
        <div className="container">
          <HeaderComponent title={location.state.title} link="/references" />
          <table>
            <thead>
              <tr>
                {arrayHeader?.map((header) => (
                  <th key={header.id}>{header.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {arrayBodyText?.map(
                (body) =>
                  elementsOfTechnicalProgramId ==
                    body.elementsOfTechnicalProgramId && (
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

export default ReferencesInfo;
