import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { refereesThunk } from "../../redux/references/refereesSlice";
import {
  listRefereeCreateThunk,
  listRefereeDeleteRefereeThunk,
  listRefereeUpdatePostThunk,
  listRefereeUpdateRefereeThunk,
  mainAnyProgramThunk,
  updateRefereesAnyProgramBrigadesThunk,
} from "../../redux/mandatoryAnyProgramReferee/mandatoryAnyProgramRefereeSlice";
import { refereesAndCoachesSliceThunk } from "../../redux/refereesAndCoaches/refereesAndCoachesSlice";
import DropDown from "../item/DropDown";
import HeaderComponent from "../components/HeaderComponent";
import Svg from "../../assets/svg/Svg";

const TheJudgingTeamAnyProgram = () => {
  let data = useLocation();
  const { categories } = data.state;

  const { mainAnyProgram } = useAppSelector(
    (store) => store.mandatoryAnyProgramRefereeSlice
  );

  const dispatch = useDispatch();

  const { referees } = useAppSelector((store) => store.refereeSlice);

  const [refereesAndCoachesList, setRefereesAndCoachesList] = useState([]);

  const createReferee = (mainAnyProgramBrigadeId) => {
    dispatch(listRefereeCreateThunk(mainAnyProgramBrigadeId)).finally(() => {
      dispatch(mainAnyProgramThunk());
    });
  };

  useEffect(() => {
    dispatch(refereesThunk());
    dispatch(mainAnyProgramThunk());
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
      <div className="container">
        <HeaderComponent
          title={categories}
          link="/programms/arbitrary-program/the-judging-team-any-program"
        />
        {mainAnyProgram?.map(
          (program) =>
            categories.includes(program.requiredAnyProgramName) && (
              <div key={program.id}>
                <div className="the-judging-team__container">
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
                        {program.mainAnyProgramBrigadeId.listRefereeArray?.map(
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
                                        dispatch(mainAnyProgramThunk());
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
                                        dispatch(mainAnyProgramThunk());
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
                                        dispatch(mainAnyProgramThunk());
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
                                        dispatch(mainAnyProgramThunk());
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
                                      dispatch(mainAnyProgramThunk());
                                    });
                                  }}
                                >
                                  <Svg
                                    name={"remove"}
                                    width={24}
                                    height={24}
                                    color={"#3361B8"}
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
                      onClick={() => createReferee(program.mainAnyProgramBrigadeId.id)}
                    >
                      Добавить судью
                      <Svg
                        name={"add"}
                        width={24}
                        height={24}
                        color={"#4C74C1"}
                      />
                    </button>
                  </div>
                  <div className="the-judging-team__brigada-container">
                    <div className="the-judging-team__brigada">
                      <table className="the-judging-team__brigada-table">
                        <thead>
                          <tr>
                            <th rowSpan="2"></th>
                            <th colSpan="2">EL</th>
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
                          {program.brigadeElId.refereesAnyBrigades.map(
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
                                          updateRefereesAnyProgramBrigadesThunk(
                                            {
                                              refereesBrigadesId: referee.id,
                                              refereeId: item.id,
                                            }
                                          )
                                        ).finally(() => {
                                          dispatch(mainAnyProgramThunk());
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
                                          updateRefereesAnyProgramBrigadesThunk(
                                            {
                                              refereesBrigadesId: referee.id,
                                              refereeId: item.id,
                                            }
                                          )
                                        ).finally(() => {
                                          dispatch(mainAnyProgramThunk());
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
                            <th colSpan="2">AL</th>
                          </tr>
                          <tr>
                            <th className="table__subtitle">ст. №</th>
                            <th className="table__subtitle">Судья</th>
                          </tr>
                        </thead>
                        <tbody>
                          {program.brigadeAlId.refereesAnyBrigades.map(
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
                                          updateRefereesAnyProgramBrigadesThunk(
                                            {
                                              refereesBrigadesId: referee.id,
                                              refereeId: item.id,
                                            }
                                          )
                                        ).finally(() => {
                                          dispatch(mainAnyProgramThunk());
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
                                          updateRefereesAnyProgramBrigadesThunk(
                                            {
                                              refereesBrigadesId: referee.id,
                                              refereeId: item.id,
                                            }
                                          )
                                        ).finally(() => {
                                          dispatch(mainAnyProgramThunk());
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
                            <th colSpan="2">DTC</th>
                          </tr>
                          <tr>
                            <th className="table__subtitle">ст. №</th>
                            <th className="table__subtitle">Судья</th>
                          </tr>
                        </thead>
                        <tbody>
                          {program.brigadeDTCId.refereesAnyBrigades.map(
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
                                          updateRefereesAnyProgramBrigadesThunk(
                                            {
                                              refereesBrigadesId: referee.id,
                                              refereeId: item.id,
                                            }
                                          )
                                        ).finally(() => {
                                          dispatch(mainAnyProgramThunk());
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
                                          updateRefereesAnyProgramBrigadesThunk(
                                            {
                                              refereesBrigadesId: referee.id,
                                              refereeId: item.id,
                                            }
                                          )
                                        ).finally(() => {
                                          dispatch(mainAnyProgramThunk());
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
                            <th colSpan="2">STC</th>
                          </tr>
                          <tr>
                            <th className="table__subtitle">ст. №</th>
                            <th className="table__subtitle">Судья</th>
                          </tr>
                        </thead>
                        <tbody>
                          {program.brigadeSTCId.refereesAnyBrigades.map(
                            (referee, index) => (
                              <tr key={referee.id}>
                                <td width={81} className="table__subtitle">{index + 1}</td>
                                <td>
                                  {referee.refereeId === null ? (
                                    <DropDown
                                      title={{ name: "Выберите судью" }}
                                      saveItem={(item) => {
                                        dispatch(
                                          updateRefereesAnyProgramBrigadesThunk(
                                            {
                                              refereesBrigadesId: referee.id,
                                              refereeId: item.id,
                                            }
                                          )
                                        ).finally(() => {
                                          dispatch(mainAnyProgramThunk());
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
                                          updateRefereesAnyProgramBrigadesThunk(
                                            {
                                              refereesBrigadesId: referee.id,
                                              refereeId: item.id,
                                            }
                                          )
                                        ).finally(() => {
                                          dispatch(mainAnyProgramThunk());
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
    </>
  );
};

export default TheJudgingTeamAnyProgram;
