import React from "react";

const Input = ({
  value,
  setValue,
  placeholder,
  onChange,
  onBlur,
  onKey,
  autoFocus,
  type,
  disabled,
  min,
  max,
}: any) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={
          onChange
            ? onChange
            : (e) => {
                setValue(e.target.value);
              }
        }
        placeholder={placeholder}
        onBlur={onBlur}
        onKeyDown={onKey}
        autoFocus={autoFocus ? true : false}
        disabled={disabled ? true : false}
        min={min && min}
        max={max && max}
      />
    </>
  );
};

export default Input;
