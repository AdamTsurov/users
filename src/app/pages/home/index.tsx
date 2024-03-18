import React from "react";
import style from "./Home.module.scss";
import Header from "../../../components/shared/Header";
import Container from "../../../components/shared/Container";
import { IUser, useGetUsers } from "../../../utils/getUsers";

export const UserContext = React.createContext("");

interface IUserContext {
  users: IUser[];
  refreshData: (count: number) => void;
  SearchUsers: (query: string) => void;
  DeleteUsers: (username: string) => void;
}

const Home = () => {
  const { users, refreshData, SearchUsers, DeleteUsers } =
    useGetUsers() as IUserContext;

  return (
    <UserContext.Provider
      value={{
        users,
        refreshData,
        SearchUsers,
        DeleteUsers,
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
