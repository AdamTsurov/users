import React, { useState } from "react";
import Input from "./Input";
import style from './SearchInput.module.scss'
import FilterIcon from "../../../assets/icons/filter-icon.svg";
import FilterIconActive from "../../../assets/icons/filter-icon-active.svg";
import { UserContext } from "../../../app/pages/home";

interface ISearchInput {
  children?: React.ReactNode;
}

const SearchInput = ({ children }: ISearchInput) => {
  const [activeFilter, setActiveFilter] = useState(false);
  const { SearchUsers } = React.useContext(UserContext);

  return (
    <div className={style.searchInput}>
      <Input searchUser={SearchUsers} placeholder={"Search"} className={style.inputWithStyles}>
        <img
          className={style.filterIcon}
          tabIndex={0}
          src={`${activeFilter ? FilterIconActive : FilterIcon}`}
          onBlur={() => setActiveFilter(false)}
          onFocus={() => setActiveFilter(true)}
          alt="filter-icon"
        />
      </Input>
    </div>
  );
};

export default SearchInput;
