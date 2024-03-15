import { getDataForLocalStorage } from "./getDataForLocalStorage";

export const getInfoForSideBar = () => {
  let users = getDataForLocalStorage();
	// Age Groups
  let teenage = users?.filter(
    (user) => 11 > user.dob.age || user.dob.age <= 20
  ).length;
	console.log(teenage);
	
  let young = users?.filter((user) => 21 > user.dob.age || user.dob.age <= 30).length;
  let adult = users?.filter((user) => 31 > user.dob.age || user.dob.age <= 40).length;
  let elder = users?.filter((user) => 41 > user.dob.age || user.dob.age <= 50).length;
  let elderly = users?.filter((user) => 51 > user.dob.age).length;
	// Gender Groups
	let male = users?.filter((user) => user.gender === "male")?.length;
	let female = users?.filter((user) => user.gender === "female")?.length;
  return { teenage, young, adult, elder, elderly, male, female };
};
