import React from "react";
import PropTypes from "prop-types";

import Logo from "../../assets/logo-horizontal-white.svg";
import LogoVertical from "../../assets/logo-vertical-white.svg";
import { Grid } from "../../components";
import Nav from "./NavLink/NavLink";
import NavLanguage from "./NavLanguage/NavLanguage";
import ModalLanguage from "./ModalLanguage/ModalLanguage";

import "./Header.scss";
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
  urlLanguagePTbr,
  urlLanguageEnUs,
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
    <Grid className="container-global-header">
    <ModalLanguage
      modal={modal}
      setModal={setModal}
      urlPtBr={urlLanguagePTbr}
      urlEnUs={urlLanguageEnUs}
    />
    <div className="header-container">
      {menuModalMobile && (
        <div className="modal-mobile-container">
          <nav className="modal-nav-navigation">
            <Nav name={firstbuttonmobile} link={firstlinkmobile} />
            <Nav name={secondbuttonmobile} link={secondlinkmobile} />
            <Nav name={thirdbuttonmobile} link={thirdlinkmobile} />
            <Nav name={fourthbuttonmobile} link={fourthlinkmobile} />
          </nav>
        </div>
      )}

      <div className="header-navigation">
        <div className="subContainer">
          <img
            className="logo-header"
            draggable="false"
            src={Logo}
            alt="logo"
          ></img>
          <img
            draggable="false"
            src={LogoVertical}
            className="logo-vertical"
            alt="logo-vertical"
          ></img>

          <div className="nav-navigation">
            <nav className="navLink-container">
              <Nav name={firstbuttonlabel} link={firstlinklabel} />
              <Nav name={secondbuttonlabel} link={secondlinklabel} />
              <Nav name={thirdbuttonlabel} link={thirdlinklabel} />
              <Nav name={fourthbuttonlabel} link={fourthlinklabel} />
            </nav>
            <div className="nav-buttons">
              <NavLanguage name="PT" setModal={setModal} />
              {buttonVisibility && (
                <button
                  className="buttun-menu"
                  onClick={clickButtonMenu}
                ></button>
              )}
              {buttonCloseVisibility && (
                <button
                  className="buttonClose"
                  onClick={clickButtonClose}
                ></button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Grid>
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
  urlLanguagePTbr: PropTypes.string,
  urlLanguageEnUs: PropTypes.string,
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

  urlLanguagePTbr: "/",
  urlLanguageEnUs: "/",
};

export default Header;
