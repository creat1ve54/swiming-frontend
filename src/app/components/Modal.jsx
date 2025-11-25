import React from "react";

const Modal = ({ component, show, setShow }) => {
  return (
    <div className={!show ? "modal" : "modal modal--active"}>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="modal__bg-close"
      ></div>
      <div className="modal__content">
        {component}
        <div
          className="modal__close"
          onClick={() => {
            setShow(!show);
          }}
        >
          Выход
        </div>
      </div>
    </div>
  );
};

export default Modal;
