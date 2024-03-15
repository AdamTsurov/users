import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import style from "./Card.module.scss";
import UserProfile from "../UserProfile";
import { getDate } from "../../../utils/getDate";
import GroupInfo from "./GroupInfo";

const Card = ({ user }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [focusCard, setFocusCard] = useState(false);

  let { picture, name, email, phone, dob, location } = user;

  let dataDate = getDate(dob.date);

  return (
    <div ref={ref}>
      {inView ? (
        <div
          className={style.card}
          onMouseLeave={() => setFocusCard(false)}
          onMouseEnter={() => setFocusCard(true)}
        >
          <div className={style.deleteButton}></div>
          <UserProfile
            email={email}
            name={`${name.first} ${name.last}`}
            avatarUrl={picture?.thumbnail}
          />
          <GroupInfo phone={phone} dataDate={dataDate} location={location} />
        </div>
      ) : (
        <div className={style.card}>
          <UserProfile
            email={"____"}
            name={`${"_____"} ${"_____"}`}
            avatarUrl={"_____"}
          />
          <GroupInfo phone={"_____"} dataDate={"_____"} location={"_____"} />
        </div>
      )}
    </div>
  );
};

export default Card;
