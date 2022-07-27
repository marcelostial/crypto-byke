import React from "react";
import styles from "./Header.module.scss";
import PropTypes from "prop-types";

import Logo from "../../assets/logo-horizontal-white.png";
import LogoVertical from "../../assets/logo-vertical-white.png";

import Nav from "./Components/NavLink/NavLink";
import NavDropdwon from "../HeaderComponent/Components/NavDropdown";
import ModalLanguage from "./Components/ModalLanguage/ModalLanguage";

import MenuModal from "../HeaderComponent/Components/MenuModal";
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
  const [menuModal, setMenuModal] = React.useState(false);
  const [buttonVisibility, setButtonVisibility] = React.useState(true);
  const [buttonCloseVisibility, setbuttonCloseVisibility] = React.useState(false);
  const ref = useRef();

  const handleClick = () => {
    setMenuModal(true);
    ref.current.style.display = "flex";
  };

  const hiddenButton = () => {
    if (menuModal === true) {
      console.log("ta ativo");
      setButtonVisibility(false);
      setbuttonCloseVisibility(true);
    } else {
      console.log("não esta ativo")
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
      <MenuModal menuModal={menuModal} setMenuModal={setMenuModal} />
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
                  onClick={handleClick}
                ></button>
              )}
              {buttonCloseVisibility && (
                <button className={styles["buttonClose"]} onClick={() => setMenuModal(false)}>
                </button>
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
  thirdbuttonlabel: "Ranking",
  thirdlinklabel: "/",
  fourthbuttonlabel: "Como funciona",
  fourthlinklabel: "/",
};

export default Header;
