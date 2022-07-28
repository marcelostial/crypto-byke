import React from "react";
import styles from "./Header.module.scss";
import PropTypes from "prop-types";

import Logo from "../../assets/logo-horizontal-white.png";
import LogoVertical from "../../assets/logo-vertical-white.png";

import Nav from "./Components/NavLink/NavLink";
import NavDropdwon from "../HeaderComponent/Components/NavDropdown";
import ModalLanguage from "./Components/ModalLanguage/ModalLanguage";

import { useRef } from "react";

const Header = ({
  firstbuttonlabel,
  firstlinklabel,
  secondbuttonlabel,
  secondlinklabel,
  thirdbuttonlabel,
  thirdlinklabel,
  fourthbuttonlabel,
  fourthlinklabel,
}) => {
  const [modal, setModal] = React.useState(false);
  const [menuModalMobile, setMenuModalMobile] = React.useState(false);
  const [buttonVisibility, setButtonVisibility] = React.useState(true);
  const [buttonCloseVisibility, setbuttonCloseVisibility] =
    React.useState(false);
  const ref = useRef();

  const clickButtonMenu = () => {
    setMenuModalMobile(true);
  };

  const clickButtonClose = () => {
    setMenuModalMobile(null);
  };

  const hiddenButton = () => {
    if (menuModalMobile === true) {
      setButtonVisibility(false);
      setbuttonCloseVisibility(true);
    } else {
      setButtonVisibility(true);
      setbuttonCloseVisibility(false);
    }
  };

  React.useEffect(() => {
    hiddenButton();
  });

  return (
    <div>
      <ModalLanguage modal={modal} setModal={setModal} />

      {menuModalMobile && (
        <div className={styles["modal-mobile-container"]}>
          <nav className={styles["modal-nav-navigation"]}>
            <Nav name={firstbuttonlabel} link={firstlinklabel} />
            <Nav name={secondbuttonlabel} link={secondlinklabel} />
            <Nav name={thirdbuttonlabel} link={thirdlinklabel} />
            <Nav name={fourthbuttonlabel} link={fourthlinklabel} />
          </nav>
        </div>
      )}

      <div className={styles["header-navigation"]}>
        <div className={styles["subContainer"]}>
          <img
            className={styles["logo-header"]}
            draggable="false"
            src={Logo}
            alt="logo"
          ></img>
          <img
            draggable="false"
            src={LogoVertical}
            className={styles["logo-vertical"]}
            alt="logo-vertical"
          ></img>

          <div className={styles["nav-navigation"]}>
            <nav className={styles["navLink-container"]} ref={ref}>
              <Nav name={firstbuttonlabel} link={firstlinklabel} />
              <Nav name={secondbuttonlabel} link={secondlinklabel} />
              <Nav name={thirdbuttonlabel} link={thirdlinklabel} />
              <Nav name={fourthbuttonlabel} link={fourthlinklabel} />
            </nav>
            <div className={styles["nav-buttons"]}>
              <NavDropdwon name="PT" setModal={setModal}></NavDropdwon>
              {buttonVisibility && (
                <button
                  className={styles["buttun-menu"]}
                  onClick={clickButtonMenu}
                ></button>
              )}
              {buttonCloseVisibility && (
                <button
                  className={styles["buttonClose"]}
                  onClick={clickButtonClose}
                ></button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  firstbuttonlabel: PropTypes.string,
  firstlinklabel: PropTypes.string,
  secondbuttonlabel: PropTypes.string,
  secondlinklabel: PropTypes.string,
  thirdbuttonlabel: PropTypes.string,
  thirdlinklabel: PropTypes.string,
  fourthbuttonlabel: PropTypes.string,
  fourthlinklabel: PropTypes.string,
};

Header.defaultProps = {
  firstbuttonlabel: "Home",
  firstlinklabel: "/",
  secondbuttonlabel: "Sobre nós",
  secondlinklabel: "/",
  thirdbuttonlabel: "Como Participar",
  thirdlinklabel: "/",
  fourthbuttonlabel: "Ranking",
  fourthlinklabel: "/",
};

export default Header;
