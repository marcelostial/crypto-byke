import PropTypes from "prop-types";
import "./conhecatour.scss";
import { Grid } from "../../components/Grid/Grid";
import Title from "../../components/Title/Title";

const conhecatour = ({ titleconhecatour, link }) => {
  return (
    <Grid className="conhecatour--container">
      <Title variant="dark" text={titleconhecatour} />
      <div className="video--container">
        <iframe
          width="1250"
          height="616"
          src={link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Grid>
  );
};

conhecatour.propTypes = {
  titleconhecatour: PropTypes.string,
  link: PropTypes.string,
};

conhecatour.defaultProps = {
  titleconhecatour: "Conheça o Tour de Terre",

  link: `https://www.youtube.com/embed/-EFoXEVCuA8`,
};

export default conhecatour;
