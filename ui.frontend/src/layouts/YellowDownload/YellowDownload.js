import React from "react";
import PropTypes from "prop-types";
import { Download, Grid, Text, Title } from "../../components";

import "./YellowDownload.scss";

const YellowDownload = ({
  title,
  description,
  background = {},
  backgroundMobile = {},
  iosLabel,
  androidLabel,
  iosUrl,
  androidUrl,
}) => {
  return (
    <Grid className="download-app--container">
      <div className="download-app--sub-container">
        <div className="download-app--heading">
          <Title text={title} />
          <Text className="p1" text={description} />
        </div>
        <div className="download-app--background-mobile">
          <img src={backgroundMobile.src} alt="Smartphones Example" />
        </div>
        <div className="download-app--stores">
          <Download
            label={iosLabel}
            variant="secondary"
            icon="apple"
            url={iosUrl}
          />
          <Download
            label={androidLabel}
            variant="secondary"
            icon="google"
            url={androidUrl}
          />
        </div>
      </div>
      <img
        className="download-app--background"
        src={background.src}
        alt="Smartphones Example"
      />
    </Grid>
  );
};

YellowDownload.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  background: PropTypes.object,
  backgroundMobile: PropTypes.object,
  iosLabel: PropTypes.string.isRequired,
  androidLabel: PropTypes.string.isRequired,
  iosUrl: PropTypes.string.isRequired,
  androidUrl: PropTypes.string.isRequired,
};

YellowDownload.defaultProps = {
  title: "Add a title",
  description: "Add a description",
  iosLabel: "Download on the <b>Apple Store</b>",
  androidLabel: "Download on the <b>Google Play</b>",
  iosUrl: "/",
  androidUrl: "/",
};

export default YellowDownload;
