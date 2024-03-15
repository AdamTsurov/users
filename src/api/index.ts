import axios from "axios";

export async function getUsersInfo(userCount: number) {
  let res = await axios.get(`api/?results=${userCount}`);
  return res.data.results;
}
