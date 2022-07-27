import React from "react";
import "./ModalLanguage.scss";
import Languages from "../Languages";
import Logo from "../../../../assets/logo-horizontal-white.png";

const ModalLanguage = ({ modal, setModal }) => {
  if (modal === true)
    return (
      <div className="modal-language">
        <div className="modal-header">
          <img
            draggable="false"
            src={Logo}
            className="logo-modal"
            alt="logo"
          ></img>
          <button
            className="modal-button"
            onClick={() => setModal(false)}
          ></button>
        </div>

        <div className="container-modal">
          <Languages label="Português (BR)" icon="ptBR" url="/"></Languages>
          <Languages></Languages>
        </div>
      </div>
    );
  return null;
};

export default ModalLanguage;
