import React, { InputHTMLAttributes } from "react";
import style from "./Input.module.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactElement;
  placeholder?: string;
}

const Input = ({ children, placeholder, ...props }: IInputProps) => {
  return (
    <div className={style.input}>
      <input
        placeholder={placeholder}
        type="text"
        name="search"
        autoFocus
        {...props}
      />
    </div>
  );
};

export default Input;
