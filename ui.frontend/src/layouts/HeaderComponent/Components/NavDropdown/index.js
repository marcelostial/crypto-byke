import React from "react";
import "./index.css"
import { NavLink } from "react-router-dom";

const NavDropdwon = ({name, setModal, link}) => {
 
  return (
    <>
    <NavLink to={link} end className="language-link">
    <button className="languague-nav" name={name} onClick={() => setModal(true)}>{name}</button>
    </NavLink>
    </>
  )
};

export default NavDropdwon;
