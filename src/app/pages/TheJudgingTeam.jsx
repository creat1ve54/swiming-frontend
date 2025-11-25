import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { refereesThunk } from "../../redux/references/refereesSlice";
import DropDown from "../item/DropDown";
import {
  listRefereeCreateThunk,
  listRefereeDeleteRefereeThunk,
  listRefereeUpdatePostThunk,
  listRefereeUpdateRefereeThunk,
  mainProgramThunk,
  updateRefereesBrigadesThunk,
} from "../../redux/mandatoryProgramReferee/mandatoryProgramRefereeSlice";
import { refereesAndCoachesSliceThunk } from "../../redux/refereesAndCoaches/refereesAndCoachesSlice";
import HeaderComponent from "../components/HeaderComponent";
import Svg from "../../assets/svg/Svg";

const TheJudgingTeam = () => {
  let data = useLocation();
  const { categories } = data.state;

  const { mainProgram } = useAppSelector(
    (store) => store.mandatoryProgramRefereeSlice
  );

  const { refereesAndCoaches } = useAppSelector(
    (store) => store.refereesAndCoachesSlice
  );
  const dispatch = useDispatch();

  const { referees } = useAppSelector((store) => store.refereeSlice);

  const [refereesAndCoachesList, setRefereesAndCoachesList] = useState([]);

  const createReferee = (mainBrigadeId) => {
    dispatch(listRefereeCreateThunk(mainBrigadeId)).finally(() => {
      dispatch(mainProgramThunk());
    });
  };
  useEffect(() => {
    dispatch(refereesThunk());
    dispatch(mainProgramThunk());
    dispatch(refereesAndCoachesSliceThunk()).then(({ payload }) => {
      setRefereesAndCoachesList(() => [
        {
          id: 0,
          surnameAndFirstname: "Выберите судью",
        },
        ...payload,
      ]);
    });
  }, []);
  return (
    <>
      <Header />
      <div>
        <div className="container">
          <HeaderComponent
            title={categories}
            link="/programms/mandatory-program/the-judging-team"
          />
          {/* <div className="the-judging-team__title">Обязательная программа</div> */}
          {mainProgram?.map(
            (program) =>
              categories.includes(program.requiredProgramName) && (
                <div key={program.id}>
                  <div className="the-judging-team__container">
                    {/* <div className="the-judging-team__caption">
                      {program.requiredProgramName}
                    </div> */}
                    <div className="the-judging-team__main-table">
                      <table>
                        <thead>
                          <tr>
                            <th width={500}>Должность</th>
                            <th>Судья</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {program.mainBrigadeId.listRefereeArray?.map(
                            (itemReferee) => (
                              <tr key={itemReferee.id}>
                                <td>
                                  {itemReferee.dutiesOfJudgeId === null ? (
                                    <DropDown
                                      title={{ name: "Выберите должность" }}
                                      saveItem={(item) => {
                                        dispatch(
                                          listRefereeUpdatePostThunk({
                                            listRefereeId: itemReferee.id,
                                            postId: item.id,
                                          })
                                        ).finally(() => {
                                          dispatch(mainProgramThunk());
                                        });
                                      }}
                                      items={referees}
                                      text={"name"}
                                      returnValue={"id"}
                                    />
                                  ) : (
                                    <DropDown
                                      title={{
                                        name: itemReferee.dutiesOfJudge.name,
                                      }}
                                      saveItem={(item) => {
                                        dispatch(
                                          listRefereeUpdatePostThunk({
                                            listRefereeId: itemReferee.id,
                                            postId: item.id,
                                          })
                                        ).finally(() => {
                                          dispatch(mainProgramThunk());
                                        });
                                      }}
                                      items={referees}
                                      text={"name"}
                                      returnValue={"id"}
                                    />
                                  )}
                                </td>
                                <td>
                                  {itemReferee.refereeId === null ? (
                                    <DropDown
                                      title={{ name: "Выберите судью" }}
                                      saveItem={(item) => {
                                        dispatch(
                                          listRefereeUpdateRefereeThunk({
                                            listRefereeId: itemReferee.id,
                                            refereeId: item.id,
                                          })
                                        ).finally(() => {
                                          dispatch(mainProgramThunk());
                                        });
                                      }}
                                      items={refereesAndCoachesList}
                                      text={"surnameAndFirstname"}
                                      returnValue={"id"}
                                    />
                                  ) : (
                                    <DropDown
                                      title={{
                                        name: itemReferee.referee
                                          .surnameAndFirstname,
                                      }}
                                      saveItem={(item) => {
                                        dispatch(
                                          listRefereeUpdateRefereeThunk({
                                            listRefereeId: itemReferee.id,
                                            refereeId: item.id,
                                          })
                                        ).finally(() => {
                                          dispatch(mainProgramThunk());
                                        });
                                      }}
                                      items={refereesAndCoachesList}
                                      text={"surnameAndFirstname"}
                                      returnValue={"id"}
                                    />
                                  )}
                                </td>
                                <td width={56}>
                                  <button
                                    className="btn__remove"
                                    onClick={() => {
                                      dispatch(
                                        listRefereeDeleteRefereeThunk(
                                          itemReferee.id
                                        )
                                      ).finally(() => {
                                        dispatch(mainProgramThunk());
                                      });
                                    }}
                                  >
                                    <Svg
                                      name={"remove"}
                                      width={24}
                                      height={24}
                                      color={'#3361B8'}
                                    />
                                  </button>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                      <button
                        className="the-judging-team__add-ref"
                        onClick={() => createReferee(program.mainBrigadeId.id)}
                      >
                        Добавить судью
                        <Svg name={"add"} width={24} height={24} color={"#4C74C1"}/>
                      </button>
                    </div>
                    <div className="the-judging-team__brigada-container">
                      <div className="the-judging-team__brigada">
                        <table className="the-judging-team__brigada-table">
                          <thead>
                            <tr>
                              <th rowSpan="2"></th>
                              <th colSpan="2">Бригада №1</th>
                            </tr>
                            <tr>
                              <th className="table__subtitle">ст. №</th>
                              <th className="table__subtitle">Судья</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                width={60}
                                className="table__left-title"
                                rowSpan={8}
                              >
                                <span>Судья</span>
                              </td>
                            </tr>
                            {program.brigadeOneId.refereesBrigades.map(
                              (referee, index) => (
                                <tr key={referee.id}>
                                  <td width={81} className="table__subtitle">
                                    {index + 1}
                                  </td>
                                  <td>
                                    {referee.refereeId === null ? (
                                      <DropDown
                                        title={{ name: "Выберите судью" }}
                                        saveItem={(item) => {
                                          dispatch(
                                            updateRefereesBrigadesThunk({
                                              refereesBrigadesId: referee.id,
                                              refereeId: item.id,
                                            })
                                          ).finally(() => {
                                            dispatch(mainProgramThunk());
                                          });
                                        }}
                                        items={refereesAndCoachesList}
                                        text={"surnameAndFirstname"}
                                        returnValue={"id"}
                                      />
                                    ) : (
                                      <DropDown
                                        title={{
                                          name: referee.referee
                                            .surnameAndFirstname,
                                        }}
                                        saveItem={(item) => {
                                          dispatch(
                                            updateRefereesBrigadesThunk({
                                              refereesBrigadesId: referee.id,
                                              refereeId: item.id,
                                            })
                                          ).finally(() => {
                                            dispatch(mainProgramThunk());
                                          });
                                        }}
                                        items={refereesAndCoachesList}
                                        text={"surnameAndFirstname"}
                                        returnValue={"id"}
                                      />
                                    )}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                      <div className="the-judging-team__brigada">
                        <table className="the-judging-team__brigada-table">
                          <thead>
                            <tr>
                              <th colSpan="2">Бригада №2</th>
                            </tr>
                            <tr>
                              <th className="table__subtitle">ст. №</th>
                              <th className="table__subtitle">Судья</th>
                            </tr>
                          </thead>
                          <tbody>
                            {program.brigadeTwoId.refereesBrigades.map(
                              (referee, index) => (
                                <tr key={referee.id}>
                                  <td width={81} className="table__subtitle">
                                    {index + 1}
                                  </td>
                                  <td>
                                    {referee.refereeId === null ? (
                                      <DropDown
                                        title={{ name: "Выберите судью" }}
                                        saveItem={(item) => {
                                          dispatch(
                                            updateRefereesBrigadesThunk({
                                              refereesBrigadesId: referee.id,
                                              refereeId: item.id,
                                            })
                                          ).finally(() => {
                                            dispatch(mainProgramThunk());
                                          });
                                        }}
                                        items={refereesAndCoachesList}
                                        text={"surnameAndFirstname"}
                                        returnValue={"id"}
                                      />
                                    ) : (
                                      <DropDown
                                        title={{
                                          name: referee.referee
                                            .surnameAndFirstname,
                                        }}
                                        saveItem={(item) => {
                                          dispatch(
                                            updateRefereesBrigadesThunk({
                                              refereesBrigadesId: referee.id,
                                              refereeId: item.id,
                                            })
                                          ).finally(() => {
                                            dispatch(mainProgramThunk());
                                          });
                                        }}
                                        items={refereesAndCoachesList}
                                        text={"surnameAndFirstname"}
                                        returnValue={"id"}
                                      />
                                    )}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                      <div className="the-judging-team__brigada">
                        <table className="the-judging-team__brigada-table">
                          <thead>
                            <tr>
                              <th colSpan="2">Бригада №3</th>
                            </tr>
                            <tr>
                              <th className="table__subtitle">ст. №</th>
                              <th className="table__subtitle">Судья</th>
                            </tr>
                          </thead>
                          <tbody>
                            {program.brigadeThreeId.refereesBrigades.map(
                              (referee, index) => (
                                <tr key={referee.id}>
                                  <td width={81} className="table__subtitle">
                                    {index + 1}
                                  </td>
                                  <td>
                                    {referee.refereeId === null ? (
                                      <DropDown
                                        title={{ name: "Выберите судью" }}
                                        saveItem={(item) => {
                                          dispatch(
                                            updateRefereesBrigadesThunk({
                                              refereesBrigadesId: referee.id,
                                              refereeId: item.id,
                                            })
                                          ).finally(() => {
                                            dispatch(mainProgramThunk());
                                          });
                                        }}
                                        items={refereesAndCoachesList}
                                        text={"surnameAndFirstname"}
                                        returnValue={"id"}
                                      />
                                    ) : (
                                      <DropDown
                                        title={{
                                          name: referee.referee
                                            .surnameAndFirstname,
                                        }}
                                        saveItem={(item) => {
                                          dispatch(
                                            updateRefereesBrigadesThunk({
                                              refereesBrigadesId: referee.id,
                                              refereeId: item.id,
                                            })
                                          ).finally(() => {
                                            dispatch(mainProgramThunk());
                                          });
                                        }}
                                        items={refereesAndCoachesList}
                                        text={"surnameAndFirstname"}
                                        returnValue={"id"}
                                      />
                                    )}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                      <div className="the-judging-team__brigada">
                        <table className="the-judging-team__brigada-table">
                          <thead>
                            <tr>
                              <th colSpan="2">Бригада №4</th>
                            </tr>
                            <tr>
                              <th className="table__subtitle">ст. №</th>
                              <th className="table__subtitle">Судья</th>
                            </tr>
                          </thead>
                          <tbody>
                            {program.brigadeFourId.refereesBrigades.map(
                              (referee, index) => (
                                <tr key={referee.id}>
                                  <td width={81} className="table__subtitle">
                                    {index + 1}
                                  </td>
                                  <td>
                                    {referee.refereeId === null ? (
                                      <DropDown
                                        title={{ name: "Выберите судью" }}
                                        saveItem={(item) => {
                                          dispatch(
                                            updateRefereesBrigadesThunk({
                                              refereesBrigadesId: referee.id,
                                              refereeId: item.id,
                                            })
                                          ).finally(() => {
                                            dispatch(mainProgramThunk());
                                          });
                                        }}
                                        items={refereesAndCoachesList}
                                        text={"surnameAndFirstname"}
                                        returnValue={"id"}
                                      />
                                    ) : (
                                      <DropDown
                                        title={{
                                          name: referee.referee
                                            .surnameAndFirstname,
                                        }}
                                        saveItem={(item) => {
                                          dispatch(
                                            updateRefereesBrigadesThunk({
                                              refereesBrigadesId: referee.id,
                                              refereeId: item.id,
                                            })
                                          ).finally(() => {
                                            dispatch(mainProgramThunk());
                                          });
                                        }}
                                        items={refereesAndCoachesList}
                                        text={"surnameAndFirstname"}
                                        returnValue={"id"}
                                      />
                                    )}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default TheJudgingTeam;
