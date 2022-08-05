import React from "react";
import { Grid, Text, Download} from "../../components";
import LogoVertical from "../../assets/logo-vertical-white.svg";
import Arrow from "../../assets/arrow.svg"
import PropTypes from "prop-types";

const SectionDownload = (firsttextlabel, secondtextlabel, thirdtextlabel, fourthtextlabel, urlbuttonapple, urlbuttongoogle) => {
  return (
    <Grid className="container-global-download">
      <div className="decoration-page"></div>
      <div className="tel-container"></div>
      <div className="sub-container-download">
        <img src={LogoVertical} draggable="false"></img>
        <div className="container-text">
        <Text text={firsttextlabel} className="textlabel"></Text>
        <Text text={secondtextlabel} className="secondtextlabel"></Text>
        <Text text={thirdtextlabel} className="textlabel"></Text>
        <Text text={fourthtextlabel} className="fourthtextlabel"></Text>
        <img src={Arrow} draggable="false"></img>
        </div>
        <div className="container-buttons-download">
        <Download label="Baixe agora na <b>Apple Store<b/></p>" icon="apple" url={urlbuttonapple}></Download>
        <Download label="Baixe agora no <b>Google Play<b/></p>" icon="google" url={urlbuttongoogle}></Download>
        </div>
      </div>
    </Grid>
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
  firsttextlabel: `Whats`,
  secondtextlabel: "the north",
  thirdtextlabel: "for the ",
  fourthtextlabel: "environment",
  urlbuttonapple: "/",
  urlbuttongoogle: "/",
}

export default SectionDownload;
