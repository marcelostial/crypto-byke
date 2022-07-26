import React from "react";
import Text from "../Text/Text";
import "./Download.scss";

import googleIcon from "../../assets/google-play-logo.svg";
import appleIcon from "../../assets/app-store-logo.svg";

const googleAlt = "Google play logo";
const appleAlt = "Apple store logo";

/**
 * @param {string} variant - primary or secondary
 * @param {sring} icon - google or apple
 */
const Download = ({ label, icon, url, variant }) => {
  return (
    <a
      className={`download--container download--${variant}`}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <img
        draggable="false"
        className="download--icon"
        src={icon === "google" ? googleIcon : appleIcon}
        alt={icon === "google" ? googleAlt : appleAlt}
      />
      <Text className="download--label p2" text={label} />
    </a>
  );
};

Download.defaultProps = {
  label: "<p>Download on the <b>Apple Store<b/></p>",
  icon: "apple",
  url: "/",
  variant: "primary",
};

export default Download;
