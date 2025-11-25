import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const ReferencesTable = ({
  arrayHeader,
  arrayBodyText,
  elementsOfTechnicalProgramId,
  arrayBodyTextObject,
  isTechProgram
}) => {
  // if (
  //   arrayBodyText.length != 0 &&
  //   arrayBodyText[0]["name"] != undefined &&
  //   arrayBodyTextObject
  // ) {
  //   console.log(arrayBodyTextObject);
  // }
  return (
    <div className="references-table">
      <div className="container">
        <table>
          <thead>
            <tr>
              {arrayHeader.map((header) => (
                <td key={header.id}>{header.title}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {arrayBodyText.map(
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
  );
};

export default ReferencesTable;
