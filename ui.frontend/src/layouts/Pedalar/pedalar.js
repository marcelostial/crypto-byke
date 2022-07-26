import styles from "./pedalar.module.scss";
import PropTypes from "prop-types";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const Pedalar = ({ maintitle, cards }) => {
  return <h1>{maintitle}</h1>;
};

Pedalar.propTypes = {
  maintitle: PropTypes.string,
  cards: PropTypes.array,
};

Pedalar.propTypes = {
  maintitle: "Comece a pedalar!",
  cards: [],
};

export default Pedalar;
