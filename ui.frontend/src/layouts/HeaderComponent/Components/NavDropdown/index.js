import React from "react";
import "./index.css"

const NavDropdwon = ({name, setModal}) => {
 
  return (
    <>
    <button className="languague-nav" name={name} onClick={() => setModal(true)}>{name}</button>
    </>
  )
};

export default NavDropdwon;
