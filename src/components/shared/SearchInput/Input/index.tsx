import React, { InputHTMLAttributes } from "react";
import style from "./Input.module.scss";
import { useDebouncedCallback } from "use-debounce";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactElement;
  placeholder?: string;
  className?: string;
  searchUser: (query: string) => void;
}

const Input = ({
  children,
  searchUser,
  placeholder,
  className,
  ...props
}: IInputProps) => {

  const debounced = useDebouncedCallback(
    (query) => {
      searchUser(query);
    },
    1200
  );

  return (
    <div className={`${style.input} ${className}`}>
      <input
        placeholder={placeholder}
        type="text"
        name="search"
        autoFocus
        onChange={(e) => debounced(e.target.value)}
        {...props}
      />
      {children}
    </div>
  );
};

export default Input;
