import React from "react";
import './index.css'
import { NavLink } from "react-router-dom";

const Nav = ({ name, link}) => {
  return  <NavLink to={link} end className="navLink">{name}</NavLink>
};

export default Nav;
