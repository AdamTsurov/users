import React, { ButtonHTMLAttributes, useContext, useState } from "react";
import style from "./Button.module.scss";
import { UserContext } from "../../../app/pages/home";
import { warningRefreshDataUsers } from "../../../utils/warningRefreshDataUsers";

interface IRefreshButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  text: string;
}

const RefreshButton = ({ chidlren, text, ...props }: IRefreshButtonProps) => {
  const { warning, refresh } = warningRefreshDataUsers();

  const handleRefreshData = () => {
    refresh();
  };

  return (
    <button
      disabled={warning}
      className={style.button}
      {...props}
      onClick={handleRefreshData}
    >
      {warning ? `Слишком много за раз.` : text}
    </button>
  );
};

export default RefreshButton;
