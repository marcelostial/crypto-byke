import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid } from "../../components/Grid/Grid";
import Title from "../../components/Title/Title";
import playicon from "../../assets/btn-play.svg";
import "./conhecatour.scss";

const Conhecatour = ({ titleconhecatour, link }) => {
  const vidRef = useRef();
  const [paused, setPaused] = useState(true);

  const handlePlay = () => {
    setPaused(!paused);
    if (paused) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
  };

  useEffect(() => {
    vidRef.current.addEventListener("pause", () => {
      setPaused(true);
    });
    vidRef.current.addEventListener("play", () => {
      setPaused(false);
    });
  }, []);

  return (
    <Grid className="conhecatour--container">
      <Title variant="dark" text={titleconhecatour} />

      <div className="video--container">
        {paused && (
          <img
            src={playicon}
            alt="play icon"
            className="icon"
            onClick={handlePlay}
          />
        )}

        <video ref={vidRef} className="video" controls>
          <source src={link} type="video/mp4" />
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
  link: "/",
};

export default Conhecatour;
