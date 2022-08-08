import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Grid } from "../../components";
import { useWindowSize } from "../../hooks";
import resolvePath from "../../routing/resolvePath";

import { NavLink } from "./NavLink";
import { Modal } from "./Modal/Modal";
import { ModalControl } from "./ModalControl";

import Logo from "../../assets/logo-horizontal-white.svg";
import LogoVert from "../../assets/logo-vertical-white.svg";

import "./Header.scss";

const Header = ({ home, currentLanguage, nav, languages, langVariants }) => {
  const [modal, setModal] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width < 992;

  const navigation = nav.map(({ label, path }, index) => (
    <NavLink key={"nav_" + index} link={path} label={label} />
  ));

  if (openNav && modal) {
    setOpenNav(false);
  }

  return (
    <>
      <Grid className="header">
        <div className="header--row">
          <Link to={resolvePath(home)}>
            <img
              className="logo"
              draggable="false"
              src={isMobile ? LogoVert : Logo}
              alt="logo"
            />
          </Link>

          <div className={`header--nav ${modal ? "open" : ""}`}>
            {!isMobile && navigation}

            <ModalControl
              controls={modal}
              switches={setModal}
              variant="language"
              label={currentLanguage}
            />

            {isMobile && (
              <ModalControl
                controls={openNav}
                switches={setOpenNav}
                variant="hamburger"
              />
            )}
          </div>
        </div>

        {isMobile && openNav && (
          <div className={`nav-mobile ${openNav ? "open" : ""}`}>
            {navigation}
          </div>
        )}
      </Grid>

      <Modal open={modal} languages={languages} variants={langVariants} />
    </>
  );
};

Header.defaultProps = {
  home: "./",
  currentLanguage: "pt",

  nav: [
    {
      label: "Home",
      path: "/en/home",
    },
    {
      label: "Sobre nós",
      path: "#about-us",
    },
    {
      label: "Como participar",
      path: "#participate",
    },
    {
      label: "Ranking",
      path: "/en/ranking",
    },
  ],

  // languages defaults in Modal.js

  // TODO: get from backend
  langVariants: [],
};

export default Header;
