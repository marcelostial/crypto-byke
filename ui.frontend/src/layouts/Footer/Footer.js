import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "../../components";
import "./Footer.scss";

import logocompass from "../../assets/cryptobike-logo.svg";
import linkedinlogo from "../../assets/linkedin.svg";
import facebooklogo from "../../assets/facebook.svg";
import twitterlogo from "../../assets/twitter.svg";
import youtubelogo from "../../assets/youtube.svg";
import instagramlogo from "../../assets/instagram.svg";
import resolvePath from "../../routing/resolvePath";

function FooterLink({ path, label }) {
  const [link, hash] = path.split("#");

  const getHash = () => {
    return hash ? `#${hash}` : "";
  };

  return (
    <Link
      to={{
        pathname: resolvePath(link),
        hash: getHash(),
      }}
    >
      <p>{label}</p>
    </Link>
  );
}

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
  const socialLinks = [
    {
      name: "linkedin",
      link: linkedin,
      logo: linkedinlogo,
    },
    {
      name: "facebook",
      link: facebook,
      logo: facebooklogo,
    },
    {
      name: "twitter",
      link: twitter,
      logo: twitterlogo,
    },
    {
      name: "youtube",
      link: youtube,
      logo: youtubelogo,
    },
    {
      name: "instagram",
      link: instagram,
      logo: instagramlogo,
    },
  ];

  return (
    <Grid className="footer--container">
      <div className="topcontainer">
        <div className="topleft">
          <div className="wrapper">
            <Link to={resolvePath(home)}>
              <img className="logo" src={logocompass} alt="Logo Compass" />
            </Link>

            <div className="icons">
              {socialLinks.map((socialLink) => (
                <a
                  key={socialLink.name}
                  href={socialLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={socialLink.logo} alt={socialLink.name} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="topright">
          {footerlinks.map(({ path, label }, index) => (
            <FooterLink key={"link_" + index} path={path} label={label} />
          ))}
        </div>
      </div>

      <div className="bottomcontainer">
        <div>
          <p className="bottomleft">{bottomtextleft}</p>
        </div>
        <div className="bottomright">
          <a href={bottomrightlink} target="_blank" rel="noopener noreferrer">
            <p>{bottomtextright}</p>
          </a>
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

  footerlinks: [],
};

export default Footer;
