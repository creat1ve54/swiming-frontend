import React from "react";

const Checkbox = ({ value, onChange, setChange, checked }) => {
  return (
    <>
      <input
        type="checkbox"
        onChange={
          onChange
            ? onChange
            : (e) => {
                setChange(e.target.checked);
              }
        }
        value={value}
        checked={checked ? true : false}
      />
    </>
  );
};

export default Checkbox;
