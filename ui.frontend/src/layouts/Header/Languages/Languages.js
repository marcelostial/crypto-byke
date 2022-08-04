import React from "react";
import Text from "../../../components/Text/Text";
import enUSicon from "../../../assets/enUS.svg";
import ptBRicon from "../../../assets/ptBR.svg";
import "./Languages.scss";

const enUSAlt = "enUS logo";
const ptBReAlt = "ptBR store logo";

const Languages = ({ label, icon, url }) => {
  return (
    <a
      className={`language-container`}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <img
        draggable="false"
        className="language-icon"
        src={icon === "ptBR" ? ptBRicon : enUSicon}
        alt={icon === "ptBR" ? ptBReAlt : enUSAlt}
      />
      <Text className="text-language" text={label}></Text>
    </a>
  );
};

Languages.defaultProps = {
  label: "Inglês (EUA)",
  icon: "enUS",
  url: "/",
};

export default Languages;
