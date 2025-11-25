import React, { useEffect } from "react";
import Header from "../components/Header";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";

import Table from "react-bootstrap/Table";
import Input from "../UI/Input";
import {
  refereesAndCoachesSliceCreateThunk,
  refereesAndCoachesSliceDeleteThunk,
  refereesAndCoachesSliceThunk,
  surnameChange,
  firstNameChange,
  categoryChange,
  regionChange,
  refereesAndCoacheSlicePutThunk,
} from "../../redux/refereesAndCoaches/refereesAndCoachesSlice";
import Svg from "../../assets/svg/Svg";

const RefereesAndCoaches = () => {
  const dispatch = useDispatch();
  const { refereesAndCoaches } = useAppSelector(
    (store) => store.refereesAndCoachesSlice
  );

  const createRefereesAndCoaches = () => {
    let refereesAndCoaches = {
      surname: "",
      firstname: "",
      surnameAndFirstname: "",
      region: "",
      category: "",
    };
    dispatch(refereesAndCoachesSliceCreateThunk(refereesAndCoaches));
  };

  const changeRefereesAndCoaches = (e, refereesAndCoaches) => {
    e.preventDefault();
    dispatch(refereesAndCoacheSlicePutThunk(refereesAndCoaches));
  };

  useEffect(() => {
    dispatch(refereesAndCoachesSliceThunk());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="referees-and-coaches">
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Фамилия</th>
                <th>Имя</th>
                {/* <th>Ф.И.</th> */}
                <th>Регион</th>
                <th>Категория</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {refereesAndCoaches.length > 0 &&
                refereesAndCoaches?.map((refereAndCoache, index) => (
                  <tr key={refereAndCoache.id}>
                    <td>
                      <Input
                        type={"text"}
                        placeholder="Введите фамилию"
                        onChange={(e) => {
                          dispatch(
                            surnameChange({
                              id: refereAndCoache.id,
                              text: e.target.value,
                            })
                          );
                        }}
                        value={refereAndCoache.surname}
                      />
                    </td>
                    <td>
                      <Input
                        type={"text"}
                        placeholder="Введите имя"
                        onChange={(e) => {
                          dispatch(
                            firstNameChange({
                              id: refereAndCoache.id,
                              text: e.target.value,
                            })
                          );
                        }}
                        value={refereAndCoache.firstname}
                      />
                    </td>
                    {/* <td>
                      <Input
                        type={"text"}
                        disabled
                        value={
                          refereAndCoache.surname +
                          " " +
                          refereAndCoache.firstname
                        }
                      />
                    </td> */}
                    <td>
                      <Input
                        placeholder="Введите место"
                        type={"text"}
                        onChange={(e) => {
                          dispatch(
                            regionChange({
                              id: refereAndCoache.id,
                              text: e.target.value,
                            })
                          );
                        }}
                        value={refereAndCoache.region}
                      />
                    </td>
                    <td>
                      <Input
                        type={"text"}
                        placeholder="Введите категорию"
                        onChange={(e) => {
                          dispatch(
                            categoryChange({
                              id: refereAndCoache.id,
                              text: e.target.value,
                            })
                          );
                        }}
                        value={refereAndCoache.category}
                      />
                    </td>
                    <td>
                      <button
                        className="btn__remove"
                        onClick={() => {
                          dispatch(
                            refereesAndCoachesSliceDeleteThunk(
                              refereAndCoache.id
                            )
                          );
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
                ))}
            </tbody>
          </table>
          <div className="referees-and-coaches__btns">
            <button
              className="referees-and-coaches__add-team"
              onClick={() => {
                createRefereesAndCoaches();
              }}
            >
              Добавить судью/тренера
              <Svg name={"add"} width={24} height={24} color={"#4C74C1"} />
            </button>
            <button
              className="referees-and-coaches__add-team"
              type="button"
              onClick={(e) => {
                changeRefereesAndCoaches(e, refereesAndCoaches);
              }}
            >
              Обновить список
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefereesAndCoaches;
