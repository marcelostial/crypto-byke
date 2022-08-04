import React from "react";
import { Grid } from "../../components";
import "./Footer.scss";

import logocompass from "./assets/cryptobike-logo.svg";
import linkedinlogo from "./assets/linkedin.svg";
import facebooklogo from "./assets/facebook.svg";
import twitterlogo from "./assets/twitter.svg";
import youtubelogo from "./assets/youtube.svg";
import instagramlogo from "./assets/instagram.svg";

const Footer = ({ linkedin, facebook, twitter, youtube, instagram }) => {
  return (
    <Grid className="footer--container">
      <div className="topcontainer">
        <div className="topleft">
          {/* <a href={pathlogo}> */}
          <img src={logocompass} alt="Logo Compass" />
          {/* </a> */}
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
        <div className="topright">
          <p>home</p>
          <p>sobre nós</p>
          <p>Como participar</p>
          <p>Ranking</p>
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
