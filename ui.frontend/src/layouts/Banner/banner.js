import PropTypes from "prop-types";
import "./banner.scss";
import { Grid } from "../../components/Grid/Grid";

const banner = ({ title, text }) => {
  return (
    <Grid className="banner--container">
      <div className="content--container">
        <h2 className="title">{title}</h2>
        <p className="text">{text}</p>
      </div>
    </Grid>
  );
};

banner.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

banner.defaultProps = {
  title: "TOUR DE TERRE",
  text: "Pedalar é um ato de grande valor. Baixe o aplicativo. Participe do Tour de Terre. Ganhe NFTs exclusivos.",
};

export default banner;
