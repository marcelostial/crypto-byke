import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../components/Grid/Grid";
import Title from "../../components/Title/Title";
import { useWindowSize } from "../../hooks/useWindowSize";
import playicon from "../../assets/btn-play.svg";
import localvideo from "../../assets/TheStolenArtGallery_CompassUOL.mp4.mp4";
import "./conhecatour.scss";

const Conhecatour = ({ titleconhecatour, link }) => {
  const vidRef = useRef();
  const [paused, setPaused] = useState(true);

  return (
    <Grid className="conhecatour--container">
      <Title variant="dark" text={titleconhecatour} />
      <div className="video--container">
        {paused ? (
          <img
            src={playicon}
            alt="play icon"
            className="icon"
            onClick={() => {
              setPaused(!vidRef.current?.paused);
              vidRef.current.play();
            }}
          />
        ) : (
          <></>
        )}

        <video ref={vidRef} className="video" controls>
          <source src={localvideo} type="video/mp4" />
        </video>
      </div>
    </Grid>
  );
};

Conhecatour.propTypes = {
  titleconhecatour: PropTypes.string,
  link: PropTypes.string,
};

Conhecatour.defaultProps = {
  titleconhecatour: "Conheça o Tour de Terre",

  link: `https://www.youtube.com/embed/-EFoXEVCuA8`,
};

export default Conhecatour;
