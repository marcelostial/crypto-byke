import React from "react";
import { Grid, Text, Download } from "../../components";
import LogoVertical from "../../assets/logo-vertical-white.svg";
import Arrow from "../../assets/arrow.svg";
import PropTypes from "prop-types";
import "./SectionDownload.scss";

const SectionDownload = ({
  firsttextlabel,
  secondtextlabel,
  thirdtextlabel,
  fourthtextlabel,
  urlbuttonapple,
  urlbuttongoogle,
}) => {
  return (
    <>
      <Grid className="container-global-download">
        <div className="sub-container-download">
          <img src={LogoVertical} className="LogoVertical" draggable="false" alt="logo"></img>
          <div className="container-text">
            <Text text={firsttextlabel} className="textlabel" />
            <Text text={secondtextlabel} className="secondtextlabel" />
            <img className="Arrow" src={Arrow} draggable="false" alt="arrow"></img>
            <div className="container-text-second">
            <Text text={thirdtextlabel} className="textlabel" />
            <Text text={fourthtextlabel} className="fourthtextlabel" />
            </div>

          </div>
          <div className="container-buttons-download">
        <Download
          label="Baixe agora na <b>Apple Store<b/></p>"
          icon="apple"
          url={urlbuttonapple}
        />
        <Download
          label="Baixe agora no <b>Google Play<b/></p>"
          icon="google"
          url={urlbuttongoogle}
        />
      </div>
        </div>
        <div className="background-page">
          <div className="tel-container"></div>
          <div className="decoration-container"></div>
        </div>
      </Grid>
    </>
  );
};
SectionDownload.propTypes = {
  firsttextlabel: PropTypes.string,
  secondtextlabel: PropTypes.string,
  thirdtextlabel: PropTypes.string,
  fourthtextlabel: PropTypes.string,
  urlbuttonapple: PropTypes.string,
  urlbuttongoogle: PropTypes.string,
};

SectionDownload.defaultProps = {
  firsttextlabel: "Whats",
  secondtextlabel: "the north",
  thirdtextlabel: "for the",
  fourthtextlabel: "environment",
  urlbuttonapple: "/",
  urlbuttongoogle: "/",
};

export default SectionDownload;
