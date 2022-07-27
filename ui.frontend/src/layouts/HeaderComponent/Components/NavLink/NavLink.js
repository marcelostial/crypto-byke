import React from "react";
import './NavLink.scss'
import { NavLink } from "react-router-dom";

const Nav = ({ name, link, id}) => {
  return  <NavLink to={link} end id={id}>{name}</NavLink>
};

export default Nav;
