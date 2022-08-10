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
  labelapple,
  labelgoogle,
}) => {
  return (
    <>
      <Grid className="container-global-download">
      <img
            src={LogoVertical}
            className="LogoVertical-mobile"
            draggable="false"
            alt="logo"
          ></img>
        <div className="sub-container-download">
        <img
            src={LogoVertical}
            className="LogoVertical"
            draggable="false"
            alt="logo"
          ></img>
          <div className="container-text">
            <Text text={firsttextlabel} className="textlabel" />
            <Text text={secondtextlabel} className="secondtextlabel" />
            <img
              className="Arrow"
              src={Arrow}
              draggable="false"
              alt="arrow"
            ></img>
            <div className="container-text-second">
              <Text text={thirdtextlabel} className="thirdtextlabel" />
              <div className="line-text-fourth">
              <Text text={fourthtextlabel} className="fourthtextlabel" />
              </div>
              ?
            </div>
          </div>
          <div className="container-buttons-download">
            <Download
              label={labelapple}
              icon="apple"
              url={urlbuttonapple}
            />
            <Download
              label={labelgoogle}
              icon="google"
              url={urlbuttongoogle}
            />
          </div>
        </div>
          <div className="decoration-container">
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
  labelapple: PropTypes.string.isRequired,
  labelgoogle: PropTypes.string.isRequired,
};

SectionDownload.defaultProps = {
  firsttextlabel: 'Whats',
  secondtextlabel: "the north",
  thirdtextlabel: "for the",
  fourthtextlabel: "environment",
  labelapple: "Baixe agora na <b>Apple Store<b/>",
  labelgoogle: "Baixe agora no <b>Google Play<b/>",
  urlbuttonapple: "/",
  urlbuttongoogle: "/",
};

export default SectionDownload;
