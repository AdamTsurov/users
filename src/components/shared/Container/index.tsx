import React, { useEffect } from "react";
import style from "./Container.module.scss";
import CardsContainer from "./CardsContainer";
import SideBar from "../SideBar";
import { UserContext } from "../../../app/pages/home";

const Container = () => {
  const { refreshData } = React.useContext(UserContext);

  const fetchData = async () => {
    try {
      await refreshData(500);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.container}>
      <CardsContainer />
      <SideBar />
    </div>
  );
};

export default Container;
