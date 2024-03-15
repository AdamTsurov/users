import { useState } from "react";
import { getUsersInfo } from "../api";
import { setLocalStorageData } from "./setLocalStorageData";
import { getDataForLocalStorage } from "./getDataForLocalStorage";

interface IUser {
  userList: [];
}

export const useGetUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async (count: number = 500) => {
    try {
      let userList: IUser = await getUsersInfo(count);
			console.log();
			
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

	const DeleteUsers = (login) => {
		let newData = users.filter(user=> user?.username !== login?.username)
		setUsers(newData)
	}

  const SearhUsers = (type) => {
    switch (type) {
      case value:
        break;

      default:
        return users;
    }
  };

  return {users, DeleteUsers, SearhUsers,refreshData};
};
