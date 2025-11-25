import React from "react";

const Accordion = ({ title, children }) => {
  return (
    <div className="accordion">
      <label className="accordion__title">
        <input type="checkbox" className="accordion__checkbox" />
        <span>{title}</span>
      </label>
      <div className="accordion__container">
        <div className="accordion__container-animation">
          <div className="accordion__container-animation-wrapper">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
