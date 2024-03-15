import React from "react";
import Input from "./Input";

interface ISearchInput {
  children?: React.ReactNode;
}

const SearchInput = ({ children }: ISearchInput) => {
  return (
    <div>
      <Input placeholder={"Search"} />
    </div>
  );
};

export default SearchInput;
