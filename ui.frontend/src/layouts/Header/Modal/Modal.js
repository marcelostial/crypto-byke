import React from "react";
import { queryLanguage } from "../../../routing/changeLanguage";
import "./Modal.scss";

export const Modal = ({ open, languages, variants }) => {
  return (
    <div className={`modal ${open ? "modal--open" : ""}`}>
      <div className="content">
        {languages.map(({ id, name, icon }, index) => (
          <Language
            key={"lang_" + index}
            icon={icon}
            id={id}
            name={name}
            variants={variants}
          />
        ))}
      </div>
    </div>
  );
};

const Language = ({ icon, id, name, variants }) => {
  return (
    <div className="language" onClick={() => queryLanguage(id, variants)}>
      <img src={icon.src} alt={"flag " + id} />
      <h5 className="label">{name}</h5>
    </div>
  );
};

Modal.defaultProps = {
  open: false,
  languages: [
    {
      id: "pt",
      name: "Português",
      icon: { src: "https://countryflagsapi.com/svg/br" },
    },
    {
      id: "en",
      name: "English",
      icon: { src: "https://countryflagsapi.com/svg/us" },
    },
  ],
  variants: [],
};
