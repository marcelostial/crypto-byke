import React from "react";
import "./index.css"
const ButtonMenu = ({setMenuModal}) => {
 
  return (
    <>
    <button className="buttun-menu" onClick={() => setMenuModal(true)}></button>
    </>
  )
};

export default ButtonMenu;
