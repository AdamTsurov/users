import React, { ButtonHTMLAttributes } from "react";
import style from "./Button.module.scss";
import { warningRefreshDataUsers } from "../../../utils/warningRefreshDataUsers";
import { useDebouncedCallback } from "use-debounce";

interface IRefreshButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  text: string;
}

const RefreshButton = ({ children, text, ...props }: IRefreshButtonProps) => {
  const { warning, refresh } = warningRefreshDataUsers();

  const debounced = useDebouncedCallback(() => {
    refresh();
  }, 2000);

  return (
    <button
      disabled={warning}
      className={style.button}
      {...props}
      onClick={debounced}
    >
      {warning ? `Слишком много за раз.` : text}
    </button>
  );
};

export default RefreshButton;
