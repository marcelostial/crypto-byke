import React from "react";
import styles from "./Header.module.scss";
import PropTypes from "prop-types";

import Logo from "../../assets/logo-horizontal-white.svg";
import LogoVertical from "../../assets/logo-vertical-white.svg";

import Nav from "./Components/NavLink/NavLink";
import NavDropdwon from "../HeaderComponent/Components/NavDropdown";
import ModalLanguage from "./Components/ModalLanguage/ModalLanguage";

const Header = ({
  firstbuttonlabel,
  firstlinklabel,
  firstbuttonmobile,
  firstlinkmobile,
  secondbuttonlabel,
  secondlinklabel,
  secondbuttonmobile,
  secondlinkmobile,
  thirdbuttonlabel,
  thirdlinklabel,
  thirdbuttonmobile,
  thirdlinkmobile,
  fourthbuttonlabel,
  fourthlinklabel,
  fourthbuttonmobile,
  fourthlinkmobile,
}) => {
  const [modal, setModal] = React.useState(false);
  const [menuModalMobile, setMenuModalMobile] = React.useState(false);
  const [buttonVisibility, setButtonVisibility] = React.useState(true);
  const [buttonCloseVisibility, setbuttonCloseVisibility] =
    React.useState(false);

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
    <>
      <ModalLanguage modal={modal} setModal={setModal} />
      <div className={styles["header-container"]}>
        {menuModalMobile && (
          <div className={styles["modal-mobile-container"]}>
            <nav className={styles["modal-nav-navigation"]}>
              <Nav name={firstbuttonmobile} link={firstlinkmobile} />
              <Nav name={secondbuttonmobile} link={secondlinkmobile} />
              <Nav name={thirdbuttonmobile} link={thirdlinkmobile} />
              <Nav name={fourthbuttonmobile} link={fourthlinkmobile} />
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
              <nav className={styles["navLink-container"]}>
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
    </>
  );
};

Header.propTypes = {
  firstbuttonlabel: PropTypes.string,
  firstlinklabel: PropTypes.string,
  firstbuttonmobile: PropTypes.string,
  firstlinkmobile: PropTypes.string,

  secondbuttonlabel: PropTypes.string,
  secondlinklabel: PropTypes.string,
  secondbuttonmobile: PropTypes.string,
  secondlinkmobile: PropTypes.string,

  thirdbuttonlabel: PropTypes.string,
  thirdlinklabel: PropTypes.string,
  thirdbuttonmobile: PropTypes.string,
  thirdlinkmobile: PropTypes.string,

  fourthbuttonlabel: PropTypes.string,
  fourthlinklabel: PropTypes.string,
  fourthbuttonmobile: PropTypes.string,
  fourthlinkmobile: PropTypes.string,
};

Header.defaultProps = {
  firstbuttonlabel: "Home",
  firstlinklabel: "/",
  firstbuttonmobile: "Home",
  firstlinkmobile: "/",

  secondbuttonlabel: "Sobre nós",
  secondlinklabel: "/",
  secondbuttonmobile: "Sobre nós",
  secondlinkmobile: "/",

  thirdbuttonlabel: "Como Participar",
  thirdlinklabel: "/",
  thirdbuttonmobile: "Como Participar",
  thirdlinkmobile: "/",

  fourthbuttonlabel: "Ranking",
  fourthlinklabel: "/",
  fourthbuttonmobile: "Ranking",
  fourthlinkmobile: "/",
};

export default Header;
