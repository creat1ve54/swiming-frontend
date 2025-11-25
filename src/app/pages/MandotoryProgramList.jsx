import React, { useEffect } from "react";
import Header from "../components/Header";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { figuresThunk } from "../../redux/references/figureSlice";
import Input from "../UI/Input";
import DropDown from "../item/DropDown";
import {
  brigadeChange,
  getSubgroupFiguresThunk,
  saveSubgroupFiguresThunk,
} from "../../redux/subgroupFigures/subgroupFiguresSlice";
import { useLocation } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import { useDebounced } from "../../hooks/useDebounced";

const MandotoryProgramList = () => {
  let data = useLocation();
  const { nameId, categories } = data.state;
  const dispatch = useDispatch();

  const { figures } = useAppSelector((state) => state.figureSlice);
  const { subgroupFigures } = useAppSelector(
    (state) => state.subgroupFiguresSlice
  );

    const debouncedBrigadeChange = useDebounced((subgroupFigureNew) => {
      dispatch(saveSubgroupFiguresThunk(subgroupFigureNew));
    }, 500);

  useEffect(() => {
    dispatch(figuresThunk());
    dispatch(getSubgroupFiguresThunk(nameId));
  }, []);

  console.log(subgroupFigures);

  return (
    <>
      <Header />
      <div className="mandotory-pogram-list">
        <div className="container">
          <HeaderComponent
            title={categories}
            link="/programms/mandatory-program/mandatory-program-list"
          />
          <table>
            <thead>
              <tr>
                <th>Фигура</th>
                <th>Код</th>
                <th>Наименование</th>
                <th>Анг. наименование</th>
                <th>Коэффицент</th>
                <th>Бригада</th>
              </tr>
            </thead>
            <tbody>
              {subgroupFigures?.map((subgroupFigure, index) => (
                <tr key={index}>
                  <td>{subgroupFigure.figureName}</td>
                  {!subgroupFigure.figure ? (
                    <>
                      <td>
                        <DropDown
                          title={{ name: "Выберите фигуру" }}
                          saveItem={(item) => {
                            let subgroupFigureNew = { ...subgroupFigure };
                            subgroupFigureNew.figureId = item.id;
                            dispatch(
                              saveSubgroupFiguresThunk(subgroupFigureNew)
                            );
                          }}
                          items={figures}
                          text={"name"}
                          returnValue={"id"}
                        />
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </>
                  ) : (
                    <>
                      <td>
                        <DropDown
                          title={{
                            name: subgroupFigure.figure.kod,
                          }}
                          saveItem={(item) => {
                            let subgroupFigureNew = { ...subgroupFigure };
                            subgroupFigureNew.figureId = item.id;
                            dispatch(
                              saveSubgroupFiguresThunk(subgroupFigureNew)
                            );
                          }}
                          items={figures}
                          text={"name"}
                          returnValue={"id"}
                        />
                      </td>
                      <td>{subgroupFigure.figure.name}</td>
                      <td>{subgroupFigure.figure.nameEng}</td>
                      <td>{subgroupFigure.figure.ratio}</td>
                    </>
                  )}
                  <td>
                    <Input
                      type={"number"}
                      onChange={(e) => {
                        let subgroupFigureNew = { ...subgroupFigure };
                        subgroupFigureNew.brigadeNumber = e.target.value;
                        
                        dispatch(
                          brigadeChange({id: subgroupFigureNew.id, value: e.target.value})
                        );
                        if(e.target.value !== '') {
                          debouncedBrigadeChange(subgroupFigureNew)
                        }
                      }}
                      max={4}
                      min={1}
                      value={subgroupFigure.brigadeNumber}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MandotoryProgramList;
