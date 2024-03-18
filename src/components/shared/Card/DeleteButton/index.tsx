import React, { ButtonHTMLAttributes } from "react";
import style from "./DeleteButton.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactElement;
  className?: string;
  deleteUser?: (username: string) => void;
  username: string;
}

const DeleteButton = ({
  children,
  className,
  deleteUser,
  username,
}: IButtonProps) => {
  return (
    <div
      className={`${style.deleteButton} ${className}`}
      onClick={() => deleteUser(username)}
    >
      {children}
    </div>
  );
};

export default DeleteButton;
