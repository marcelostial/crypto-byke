import styles from "./pedalar.module.scss";
import PropTypes from "prop-types";
import Title from "../../components/Title/Title";
import { CarouselReact } from "../../components";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const Pedalar = ({ maintitle, cards }) => {
  return (
    <div className={styles["desktop"]}>
      <div className={styles["container"]}>
        <div className={styles["subcontainer"]}>
          <Title text={maintitle} />
          <div className={styles["cardscontainer"]}>
            {cards.map(({ icon, title, description }, index) => (
              <div className={styles["card"]} key={index}>
                <img src={icon.src} className={styles["icon"]} alt="svg" />
                <div className={styles["textcontainer"]}>
                  <p className={styles["title"]}>{title}</p>
                  <p className={styles["description"]}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
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
