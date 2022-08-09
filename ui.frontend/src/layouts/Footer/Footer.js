import React from "react";
import { Grid } from "../../components";
import "./Footer.scss";
import { Link } from "react-router-dom";
import logocompass from "../../assets/cryptobike-logo.svg";
import linkedinlogo from "../../assets/linkedin.svg";
import facebooklogo from "../../assets/facebook.svg";
import twitterlogo from "../../assets/twitter.svg";
import youtubelogo from "../../assets/youtube.svg";
import instagramlogo from "../../assets/instagram.svg";

const Footer = ({
  linkedin,
  facebook,
  twitter,
  youtube,
  instagram,
  home,
  bottomtextleft,
  bottomtextright,
  bottomrightlink,
  footerlinks,
}) => {
  return (
    <Grid className="footer--container">
      <div className="topcontainer">
        <div className="topleft">
          <div className="wrapper">
            <Link to={home}>
              <img className="logo" src={logocompass} alt="Logo Compass" />
            </Link>
            <div className="icons">
              <Link to={linkedin}>
                <img src={linkedinlogo} alt="Logo linkedin" />
              </Link>
              <Link to={facebook}>
                <img src={facebooklogo} alt="Logo facebook" />
              </Link>
              <Link to={twitter}>
                <img src={twitterlogo} alt="Logo twitter" />
              </Link>
              <Link to={youtube}>
                <img src={youtubelogo} alt="Logo youtube" />
              </Link>
              <Link to={instagram}>
                <img src={instagramlogo} alt="Logo instagram" />
              </Link>
            </div>
          </div>
        </div>
        <div className="topright">
          {footerlinks.map(({ path, label }, index) => (
            <Link to={path} key={"link_" + index}>
              <p>{label}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="bottomcontainer">
        <div>
          <p className="bottomleft">{bottomtextleft}</p>
        </div>
        <div className="bottomright">
          <Link to={bottomrightlink}>
            <p>{bottomtextright}</p>
          </Link>
        </div>
      </div>
    </Grid>
  );
};

// Footer.defaultProps = {
//   linked: "https://www.linkedin.com/feed/",
//   facebook: "https://www.facebook.com/",
//   twiter: "https://www.twitter.com/",
//   youtube: "https://www.youtube.com/",
//   instagram: "https://www.instagram.com/",
// };

export default Footer;
