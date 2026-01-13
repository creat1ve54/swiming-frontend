import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  changeTournamentDate,
  changeTournamentName,
  tournamentNamePutThunk,
} from "../../redux/tournamentName/tournamentNameSlice";
import Input from "../UI/Input";
import { useDebounced } from "../../hooks/useDebounced";

const TournamentName = () => {
  const dispatch = useAppDispatch();
  const { tournament } = useAppSelector((state) => state.tournamentNameSlice);

  const [openTournamentName, setOpenTournamentName] = useState(true);
  const [openDateAndPlaceOfRealization, setOpenDateAndPlaceOfRealization] =
    useState(true);

  const onKeyDownTournament = (e) => {
    e.key == "Enter" && setOpenTournamentName(!openTournamentName);
  };

  const onBlurTournament = () => {
    setOpenTournamentName(!openTournamentName);
  };

  const changeName = useDebounced((name) => {
    dispatch(tournamentNamePutThunk({...tournament, tournamentName: name }));
  }, 500);

  const changeDate = useDebounced((date) => {
    dispatch(tournamentNamePutThunk({...tournament, dateAndPlaceOfRealization: date }));
  }, 500);

  const onChangeTournament = (e) => {
    dispatch(changeTournamentName(e.target.value));
    changeName(e.target.value);
  };

  const onKeyDownDateAndPlace = (e) => {
    e.key == "Enter" &&
      setOpenDateAndPlaceOfRealization(!openDateAndPlaceOfRealization);
  };

  const onBlurDateAndPlace = () => {
    setOpenDateAndPlaceOfRealization(!openDateAndPlaceOfRealization);
  };

  const onChangeDateAndPlace = (e) => {
    dispatch(changeTournamentDate(e.target.value));
    changeDate(e.target.value);
  };
  
  return (
    <div className="tournament-name">
      <div className="tournament-name__container">
        <div className="tournament-name__title">Название соревнований</div>
        {openTournamentName ? (
          <span
            className="tournament-name__text"
            onClick={() => {
              setOpenTournamentName(!openTournamentName);
            }}
          >
            {tournament.tournamentName == ""
              ? "Введите название соревнований"
              : tournament.tournamentName}
          </span>
        ) : (
          <Input
            type={"text"}
            onChange={onChangeTournament}
            onKeyDown={onKeyDownTournament}
            autoFocus={true}
            onBlur={onBlurTournament}
            value={tournament.tournamentName}
          />
        )}
      </div>
      <div className="tournament-name__container">
        <div className="tournament-name__title">Дата проведения</div>
        {openDateAndPlaceOfRealization ? (
          <span
            className="tournament-name__text"
            onClick={() => {
              setOpenDateAndPlaceOfRealization(!openDateAndPlaceOfRealization);
            }}
          >
            {tournament.dateAndPlaceOfRealization == ""
              ? "Введите дату"
              : tournament.dateAndPlaceOfRealization}
          </span>
        ) : (
          <Input
            type={"text"}
            onChange={onChangeDateAndPlace}
            onKeyDown={onKeyDownDateAndPlace}
            autoFocus={true}
            onBlur={onBlurDateAndPlace}
            value={tournament.dateAndPlaceOfRealization}
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(TournamentName);
