import React from "react";
import styles from "./pedalar.module.scss";
import PropTypes from "prop-types";
import Title from "../../components/Title/Title";
import Carousel from "../../components/Carousel/Carousel";
import { Card } from "../../components/Pedalar/Card";
import { Grid } from "../../components";

const Pedalar = ({ maintitle, cards }) => {
  React.useEffect(() => {
    console.log(cards);
  });
  return (
    <Grid>
      <Title text={maintitle} />
      <div className={styles["cardscontainer"]}>
        <Carousel
          slidesToShow={3}
          slidesToScroll={3}
          toShowMobile={1}
          toScrollMobile={1}
        >
          {cards.map(({ icon, title, description }, index) => (
            <Card
              key={"pedalar_" + index}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </Carousel>
      </div>
    </Grid>
  );
};

// Pedalar.propTypes = {
//   maintitle: PropTypes.string,
//   cards: PropTypes.array,
// };

// Pedalar.propTypes = {
//   maintitle: "Comece a pedalar!",
//   cards: [],
// };

export default Pedalar;
