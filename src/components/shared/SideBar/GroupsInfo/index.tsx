import React, { useContext } from "react";
import { UserContext } from "../../../../app/pages/home";
import style from "./GroupsInfo.module.scss";

const GroupsInfo = ({
  nameGroup,
  groupsCount,
  teenage,
  young,
  adult,
  elder,
  elderly,
  male,
  female,
}) => {
  return (
    <div className={style.groupsInfo}>
      <h2>{`${nameGroup} Groups`}</h2>
      {groupsCount == 5 ? (
        <div className={style.groups}>
          <p>
            {`11 to 20`} <span>{`${teenage} users`}</span>
          </p>
          <p>
            {`21 to 30`} <span>{`${young} users`}</span>
          </p>
          <p>
            {`31 to 40`} <span>{`${adult} users`}</span>
          </p>
          <p>
            {`41 to 50`} <span>{`${elder} users`}</span>
          </p>
          <p>
            {`51+`} <span>{`${elderly} users`}</span>
          </p>
        </div>
      ) : (
        <div className={style.groups}>
          <p>
            Male <span>{`${male} users`}</span>
          </p>
          <p>
            Female <span>{`${female} users`}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default GroupsInfo;
