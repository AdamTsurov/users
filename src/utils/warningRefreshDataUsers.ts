import { useContext, useState } from "react";
import { UserContext } from "../app/pages/home";

let timeToBlock: number = 0;

export const warningRefreshDataUsers = () => {
  const [warning, setWarning] = useState(false);
  const { refreshData } = useContext(UserContext);

  function refresh() {
    if (timeToBlock < 3) {
      setWarning(false);
      timeToBlock++;
      console.log(timeToBlock);
      refreshData();
    } else {
      setWarning(true);
      setTimeout(() => {
        timeToBlock = 0;
      }, 3000);
    }
    if (timeToBlock === 0) {
      setWarning(false);
    }
  }

  return { warning, refresh };
};
