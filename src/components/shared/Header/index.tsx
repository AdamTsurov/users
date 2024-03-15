import React from "react";
import SearchInput from "../SearchInput";
import RefreshButton from "../RefreshButton";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <SearchInput />
      <RefreshButton text={"Refresh Users"} />
    </div>
  );
};

export default Header;
