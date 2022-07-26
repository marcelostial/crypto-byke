import React from "react";
import styles from "./Header.module.scss";
import PropTypes from 'prop-types';

import Logo from "../../assets/logo-horizontal-white.png";
import LogoVertical from "../../assets/logo-vertical-white.png";

import Nav from "../HeaderComponent/Components/NavLink";
import NavDropdwon from "../HeaderComponent/Components/NavDropdown";
import ModalLanguage from "../HeaderComponent/Components/ModalLanguage";
import ButtonMenu from "../HeaderComponent/Components/ButtonMenu";
import MenuModal from "../HeaderComponent/Components/MenuModal";

const Header = (
  firstbuttonlabel,
  firstlinklabel,
  secondbuttonlabel,
  secondlinklabel,
  thirdbuttonlabel,
  thirdlinklabel,
  fourthbuttonlabel,
  fourthlinklabel
) => {
  const [modal, setModal] = React.useState(false);
  const [menuModal, setMenuModal] = React.useState(false);

  return (
    <div>
      <ModalLanguage modal={modal} setModal={setModal} />
      <MenuModal menuModal={menuModal} setMenuModal={setMenuModal} />

      <div className={styles["header-navigation"]}>
        <img draggable="false" src={Logo} alt="logo"></img>
        <img
          draggable="false"
          src={LogoVertical}
          className="logo-vertical"
          alt="logo-vertical"
        ></img>

        <nav className="nav-navigation">
          <Nav name={firstbuttonlabel} link={firstlinklabel} />
          <Nav name={secondbuttonlabel} link={secondlinklabel} />
          <Nav name={thirdbuttonlabel} link={thirdlinklabel} />
          <Nav name={fourthbuttonlabel} link={fourthlinklabel} />
          <NavDropdwon
            link="/language"
            name="PT"
            setModal={setModal}
          ></NavDropdwon>

          <ButtonMenu
            menuModal={menuModal}
            setMenuModal={setMenuModal}
          ></ButtonMenu>
        </nav>
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
  secondbuttonlabel: "Sobre nós",
  thirdbuttonlabel: "Ranking",
  fourthbuttonlabel: "Como funciona",
};

export default Header;
