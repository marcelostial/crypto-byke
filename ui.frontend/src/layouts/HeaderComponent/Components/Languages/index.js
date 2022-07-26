import React from 'react'
import RichText from "../RichText/RichText"
import enUSicon from "../../../../assets/enUS.png"
import ptBRicon from "../../../../assets/ptBR.png"
import "./index.css"

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
        <RichText className="text-language" text={label}></RichText>
      </a>
    );
  };
  
  Languages.defaultProps = {
    label: "Inglês (EUA)",
    icon: "enUS",
    url: "/",
  };
  
  export default Languages;