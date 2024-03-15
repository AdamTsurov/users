import React, { useContext } from "react";
import style from "./CardsContainer.module.scss";
import Card from "../../Card";
import { UserContext } from "../../../../app/pages/home";

const CardsContainer = () => {
  const { users } = React.useContext(UserContext);

  return (
    <div className={style.cardsContainer}>
      {users?.map((user) => {
        return <Card key={user?.login?.uuid} user={user} />;
      })}
    </div>
  );
};

export default CardsContainer;
