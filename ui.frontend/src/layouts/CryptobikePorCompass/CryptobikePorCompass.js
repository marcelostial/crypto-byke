import styles from "./CryptobikePorCompass.scss";
import PropTypes from "prop-types";
import Text from "../../components/Text/Text";
import { Grid } from "../../components/Grid/Grid";
import Title from "../../components/Title/Title";

const CryptoPorCompass = ({ title, text }) => {
  return (
    <Grid className="CryptoPorCompass--container">
      <Title text={title} variant={"light"} />
      <div className="CryptoPorCompass--textContainer">
        <Text text={text} richText={true} />
      </div>
    </Grid>
  );
};

CryptoPorCompass.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

CryptoPorCompass.defaultProps = {
  title: "Cryptobike por Compass",

  text: `Pedalar é o jeito mais sustentável e saudável de locomoção. Grandes cidades ao redor do mundo estão preparadas para o ciclismo. Mas a “cultura do carro” ainda é muito maior e mais forte. `,
};

export default CryptoPorCompass;
