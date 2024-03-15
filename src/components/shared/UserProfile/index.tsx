import React from "react";
import style from "./UserProfile.module.scss";

const UserProfile = ({ avatarUrl, name, email }) => {
  return (
    <div className={style.userProfile}>
      <img src={avatarUrl} alt="" />
      <div className={style.shortInfo}>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
