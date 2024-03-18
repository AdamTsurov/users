import React from "react";
import style from "./SideBar.module.scss";
import GroupsInfo from "./GroupsInfo";
import { getInfoForSideBar } from "../../../utils/getInfoForSideBar";
import { getDataForLocalStorage } from "../../../utils/getDataForLocalStorage";

const SideBar = () => {
  let users = getDataForLocalStorage();
  let { teenage, young, adult, elder, elderly, male, female } =
    getInfoForSideBar();

  return (
    <div className={style.sideBar}>
      <h1>{`${users?.length.toString().toUpperCase()} Users`}</h1>
      <GroupsInfo
        nameGroup={"Age"}
        groupsCount={"5"}
        teenage={teenage}
        young={young}
        adult={adult}
        elder={elder}
        elderly={elderly}
      />
      <GroupsInfo
        nameGroup={"Gender"}
        groupsCount={2}
        male={male}
        female={female}
      />
    </div>
  );
};

export default SideBar;
