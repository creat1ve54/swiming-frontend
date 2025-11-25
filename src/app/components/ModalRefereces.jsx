import React from "react";

const ModalRefereces = ({ component, show, setShow }) => {
  return (
    <div
      className={
        !show ? "modal-refereces" : "modal-refereces modal-refereces--active"
      }
    >
      <div className="modal-refereces__content">
        {component}
        <div
          className="modal-refereces__close"
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

export default ModalRefereces;
