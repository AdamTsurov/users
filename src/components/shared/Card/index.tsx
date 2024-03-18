import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import style from "./Card.module.scss";
import UserProfile from "../UserProfile";
import { getDate } from "../../../utils/getDate";
import GroupInfo from "./GroupInfo";
import DeleteButton from "./DeleteButton";
import DeleteIcon from "../../../assets/icons/trash-bin-delete-icon.svg";
import { UserContext } from "../../../app/pages/home";

const Card = ({ user }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { DeleteUsers } = React.useContext(UserContext);
  const [focusCard, setFocusCard] = useState(false);
	
  let { picture, name, email, phone, dob, location, login } = user;

  let dataDate = getDate(dob.date);

  return (
    <div ref={ref}>
      {inView ? (
        <div
          className={style.card}
          onMouseLeave={() => setFocusCard(false)}
          onMouseEnter={() => setFocusCard(true)}
        >
          {focusCard && (
            <DeleteButton className={style.deleteButton} deleteUser={DeleteUsers}  username={login?.username}>
              <img
                className={style.deleteIcon}
                tabIndex={0}
                src={DeleteIcon}
                onBlur={() => setFocusCard(false)}
                onFocus={() => setFocusCard(true)}
                alt="filter-icon"
              />
            </DeleteButton>
          )}
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
