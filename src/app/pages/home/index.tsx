import React, { useState } from "react";
import style from "./Home.module.scss";
import Header from "../../../components/shared/Header";
import Container from "../../../components/shared/Container";
import { getUsersInfo } from "../../../api";
import { useGetUsers } from "../../../utils/getUsers";

export const UserContext = React.createContext("");

const Home = () => {
  const {users, refreshData} = useGetUsers();
	

  const deleteUser = async () => {};

  const SearchUser = () => {};

  return (
    <UserContext.Provider
      value={{
        users,
        refreshData,
        deleteUser,
      }}
    >
      <div className={style.home}>
        <Header />
        <Container />
      </div>
    </UserContext.Provider>
  );
};

export default Home;
