import styles from "./tourdeterre.module.scss";
import PropTypes from "prop-types";

const TourDeTerre = ({ title, text, image = {} }) => {
  return <h1>{title}</h1>;
};

TourDeTerre.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.object,
};

TourDeTerre.defaultProps = {
  title: "Tour de Terre",
  text: "Os eventos mais famosos do ciclismo são conhecidos como “Tour”. Na França, existe um bastante famoso. Só que, como toda competição, eles duram apenas por períodos curtos. E a nossa intenção é ir além disso. Nós queremos convidar o mundo inteiro a transformar o ato de pedalar em um hábito. Para isso, criamos o Tour de Terre. Um desafio com jeito de convite para que todo mundo pedale pelo mesmo time: a Terra. Se nos Tours mais famosos do mundo os atletas pedalam por suas equipes, no Tour de Terre, nós pedalamos juntos pelo planeta",
};

export default TourDeTerre;
