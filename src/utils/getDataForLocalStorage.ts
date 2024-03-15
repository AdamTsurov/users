export const getDataForLocalStorage = () => {
  let userLocalData: any = localStorage.getItem("users");
  let users = JSON.parse(userLocalData);
	console.log(users);
	
  return users;
};
