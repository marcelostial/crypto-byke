import React from "react";
import "./ModalLanguage.scss";
import Languages from "../Languages/Languages";
import Logo from "../../../../assets/logo-horizontal-white.svg";
import LogoVertical from "../../../../assets/logo-vertical-white.svg";

const ModalLanguage = ({ modal, setModal, urlPtBr, urlEnUs }) => {
  if (modal === true)
    return (
      <div className="modal-language">
        <div className="sub-container-modal">
          <div className="modal-header">
            <img
              draggable="false"
              src={Logo}
              className="logo-modal"
              alt="logo"
            ></img>
            <img
              draggable="false"
              src={LogoVertical}
              className="logo-modal-mobile"
              alt="logo"
            ></img>
            <button
              className="modal-button"
              onClick={() => setModal(false)}
            ></button>
          </div>
        </div>

        <div className="container-modal">
          <Languages
            label="Português (BR)"
            icon="ptBR"
            url={urlPtBr}
          ></Languages>
          <Languages url={urlEnUs}></Languages>
        </div>
      </div>
    );
  return null;
};

export default ModalLanguage;
