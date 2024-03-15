import React from "react";
import style from './GroupInfo.module.scss'

const GroupInfo = ({phone, dataDate, location}) => {
  return (
    <div className={style.groupInfo}>
      <div className={style.phone}>
        Phone No <span>{phone}</span>
      </div>
      <div className={style.birthday}>
        Birthday{" "}
        <span>{`${dataDate?.day} ${dataDate?.month} ${dataDate?.year}`}</span>
      </div>
      <div className={style.address}>
        Address{" "}
        <span>{`${location?.city}, ${location?.country}, ${location?.state}`}</span>
      </div>
    </div>
  );
};

export default GroupInfo;
