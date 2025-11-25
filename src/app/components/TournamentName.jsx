import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import {
  changeTournamentDate,
  changeTournamentName,
} from "../../redux/tournamentName/tournamentNameSlice";
import Input from "../UI/Input";

const TournamentName = () => {
  const dispatch = useDispatch();
  const { tournamentName } = useAppSelector(
    (state) => state.tournamentNameSlice.tournament
  );
  const { dateAndPlaceOfRealization } = useAppSelector(
    (state) => state.tournamentNameSlice.tournament
  );

  const [openTournamentName, setOpenTournamentName] = useState(true);
  const [openDateAndPlaceOfRealization, setOpenDateAndPlaceOfRealization] =
    useState(true);

  const onKeyDownTournament = (e) => {
    e.key == "Enter" && setOpenTournamentName(!openTournamentName);
  };

  const onBlurTournament = () => {
    setOpenTournamentName(!openTournamentName);
  };

  const onChangeTournament = (e) => {
    dispatch(changeTournamentName(e.target.value));
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
            {tournamentName == ""
              ? "Введите название соревнований"
              : tournamentName}
          </span>
        ) : (
          <Input
            type={"text"}
            onChange={onChangeTournament}
            onKeyDown={onKeyDownTournament}
            autoFocus={true}
            onBlur={onBlurTournament}
            value={tournamentName}
          />
        )}
      </div>
      <div className="tournament-name__container">
        <div className="tournament-name__title">Дата и место проведения</div>
        {openDateAndPlaceOfRealization ? (
          <span
            className="tournament-name__text"
            onClick={() => {
              setOpenDateAndPlaceOfRealization(!openDateAndPlaceOfRealization);
            }}
          >
            {dateAndPlaceOfRealization == ""
              ? "Введите дату и место проведения"
              : dateAndPlaceOfRealization}
          </span>
        ) : (
          <Input
            type={"text"}
            onChange={onChangeDateAndPlace}
            onKeyDown={onKeyDownDateAndPlace}
            autoFocus={true}
            onBlur={onBlurDateAndPlace}
            value={dateAndPlaceOfRealization}
          />
        )}
      </div>
    </div>
  );
};

export default TournamentName;
