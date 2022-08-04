import React from "react";
import "./NavLanguage.scss"

const NavLanguage = ({name, setModal}) => {
 
  return (
    <>
    <button className="languague-nav" name={name} onClick={() => setModal(true)}>{name}</button>
    </>
  )
};

export default NavLanguage;
