import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import {
  sportsmansSliceThunk,
  teamsSliceThunk,
} from "../../redux/teams/teamsSlice";

const ComponentToPrint = () => {
  const dispatch = useDispatch();

  const { tournamentName } = useAppSelector(
    (state) => state.tournamentNameSlice.tournament
  );
  const { dateAndPlaceOfRealization } = useAppSelector(
    (state) => state.tournamentNameSlice.tournament
  );

  // const { ageSubgroup } = useAppSelector((state) => state.ageSubgroupSlice);

  const { teams, sportsmans } = useAppSelector((state) => state.teamsSlice);

  const ageSubgroupFunc = () => {
    let ageSubgroupNew = [];
    let ageSubgroupNewArr = [];

    sportsmans.forEach((sportsman) => {
      if (!ageSubgroupNew.includes(sportsman.ageSubgroupId)) {
        ageSubgroupNew.push(sportsman.ageSubgroupId);
        ageSubgroupNewArr.push(sportsman.ageSubgroup);
      }
    });
    return ageSubgroupNewArr;
  };

  const teamsFunc = (ageSubgroup) => {
    let teamsNew = [];
    teamsNew = teams.map((team) => {
      let teamCopy = { ...team };
      let sportsmansArrayNew = [];
      teamCopy.sportsmansArray.forEach((sportsman) => {
        if (sportsman.ageSubgroupId === ageSubgroup.id) {
          sportsmansArrayNew.push(sportsman);
        }
      });
      teamCopy.sportsmansArray = sportsmansArrayNew;
      return teamCopy;
    });
    console.log(teamsNew);
    return teamsNew;
  };

  useEffect(() => {
    dispatch(teamsSliceThunk());
    dispatch(sportsmansSliceThunk());
  }, [dispatch]);

  return (
    <div className="component-to-print">
      {ageSubgroupFunc().map((ageSubgroup, index) => (
        <div key={index}>
          <div className="component-to-print__tournament-name">
            {tournamentName}
          </div>
          <div className="component-to-print__tournament-date">
            {dateAndPlaceOfRealization}
          </div>
          <div className="component-to-print__title">Список спортсменов</div>
          <div className="component-to-print__age-subgroup">
            {ageSubgroup.name}
          </div>
          <table>
            <thead>
              <tr className="component-to-print__table-thead-row">
                <td className="component-to-print__table-thead-title">Ф.И.</td>
                <td className="component-to-print__table-thead-title">Команда</td>
                <td className="component-to-print__table-thead-title">г.р.</td>
                <td className="component-to-print__table-thead-title">разр.</td>
                <td className="component-to-print__table-thead-title">тренер</td>
                <td className="component-to-print__table-thead-title"></td>
              </tr>
            </thead>
          </table>
          {teamsFunc(ageSubgroup).map(
            (team, index) =>
              team.sportsmansArray.length > 0 && (
                <div key={team.id}>
                  <div className="component-to-print__team">{team.nameTeam}</div>
                  <table>
                    <tbody>
                      {team.sportsmansArray.map(
                        (sportsman, index) =>
                          ageSubgroup.id === sportsman.ageSubgroupId && (
                            <tr
                              className="component-to-print__table-tbody-row"
                              key={index}
                            >
                              <td className="component-to-print__table-tbody-title">
                                {index + 1}
                              </td>
                              <td className="component-to-print__table-tbody-title">
                                {sportsman?.surnameAndFirstname}
                              </td>
                              <td className="component-to-print__table-tbody-title">
                                {sportsman?.years}
                              </td>
                              <td className="component-to-print__table-tbody-title">
                                {sportsman?.sportCategory?.name}
                              </td>
                            </tr>
                          )
                      )}
                    </tbody>
                  </table>
                </div>
              )
          )}
          <p style={{ pageBreakAfter: "always " }}></p>
        </div>
      ))}
    </div>
  );
};

export default ComponentToPrint;
