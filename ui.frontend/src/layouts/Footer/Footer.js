import React from "react";
import { Grid } from "../../components";
import "./Footer.scss";

import logocompass from "./assets/cryptobike-logo.svg";
import linkedinlogo from "./assets/linkedin.svg";
import facebooklogo from "./assets/facebook.svg";
import twitterlogo from "./assets/twitter.svg";
import youtubelogo from "./assets/youtube.svg";
import instagramlogo from "./assets/instagram.svg";

const Footer = ({
  linkedin,
  facebook,
  twitter,
  youtube,
  instagram,
  home,
  aboutus,
  howtojoin,
  ranking,
}) => {
  return (
    <Grid className="footer--container">
      <div className="topcontainer">
        <div className="topleft">
          <div className="wrapper">
            <a href={home}>
              <img className="logo" src={logocompass} alt="Logo Compass" />
            </a>
            <div className="imagelist">
              <a href={linkedin}>
                <img src={linkedinlogo} alt="Logo linkedin" />
              </a>
              <a href={facebook}>
                <img src={facebooklogo} alt="Logo facebook" />
              </a>
              <a href={twitter}>
                <img src={twitterlogo} alt="Logo twitter" />
              </a>
              <a href={youtube}>
                <img src={youtubelogo} alt="Logo youtube" />
              </a>
              <a href={instagram}>
                <img src={instagramlogo} alt="Logo instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="topright">
          <a href={home}>
            <p>home</p>
          </a>
          <a href={aboutus}>
            <p>sobre nós</p>
          </a>
          <a href={howtojoin}>
            <p>Como participar</p>
          </a>
          <a href={ranking}>
            <p>Ranking</p>
          </a>
        </div>
      </div>

      <div className="bottomcontainer">
        <div>
          <p className="bottomleft">
            © Compass UOL - 1996 - 2022 - All rights reserved
          </p>
        </div>
        <div className="bottomright">
          <p>Política de Privacidade - Grupo UOL </p>
        </div>
      </div>
    </Grid>
  );
};

Footer.defaultProps = {
  linked: "https://www.linkedin.com/feed/",
  facebook: "https://www.facebook.com/",
  twiter: "https://www.twitter.com/",
  youtube: "https://www.youtube.com/",
  instagram: "https://www.instagram.com/",
};

export default Footer;
