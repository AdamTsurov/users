interface IUser {
  userList: [];
}

export const setLocalStorageData = (data: IUser) => {
	let userToLocalSave: any = JSON.stringify(data);
	localStorage.setItem("users", userToLocalSave);
};