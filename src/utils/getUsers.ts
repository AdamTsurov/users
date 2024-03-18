import { useState } from "react";
import { getUsersInfo } from "../api";
import { setLocalStorageData } from "./setLocalStorageData";
import { getDataForLocalStorage } from "./getDataForLocalStorage";
import { getDate } from "./getDate";

export interface IUser {
  userList: [];
}

export const useGetUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async (count: number = 500) => {
    try {
      let userList: IUser = await getUsersInfo(count);
      return userList;
    } catch (error) {
      return [];
    }
  };

  const refreshData = async (count = 500) => {
    let users = await getUsers(count);
    setLocalStorageData(users);
    setUsers(users);
  };

  const DeleteUsers = (username: string) => {
    let newData  = users.filter((user) => user?.login?.username !== username);
    setLocalStorageData(newData);
    setUsers(newData);
  };

  const SearchUsers = (query: string) => {
    query = query.toLowerCase();
    let filterUsers = getDataForLocalStorage();
    let userSearch = filterUsers?.filter((user) => {
      let { day, month, year } = getDate(user?.dob?.date);
      return (
        user?.name?.first.toLowerCase().includes(query) ||
        user?.email?.toLowerCase().includes(query) ||
        user?.phone?.toLowerCase().includes(query) ||
        `${day} ${month} ${year}`.toLowerCase().includes(query) ||
        user?.location?.city.toLowerCase().includes(query)
      );
    });
    setUsers(userSearch);
  };

  return { users, DeleteUsers, SearchUsers, refreshData };
};
