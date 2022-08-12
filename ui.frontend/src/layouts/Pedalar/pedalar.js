import React from "react";
import { Grid, PedalarCard, Title, Carousel } from "../../components";
import "./Pedalar.scss";

const Pedalar = ({ maintitle, cards }) => {
  return (
    <Grid className="pedalar--container">
      <span className="anchor" id="join" />
      <Title text={maintitle} />

      <Carousel
        slidesToShow={3}
        slidesToScroll={3}
        toShowMobile={1}
        toScrollMobile={1}
      >
        {cards.map(({ icon, title, description }, index) => (
          <PedalarCard
            key={"pedalar_" + index}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </Carousel>
    </Grid>
  );
};

Pedalar.defaultProps = {
  maintitle: "Pedalar",
  cards: [
    {
      icon: "",
      title: "Default Title",
      description: "Default Description",
    },
  ],
};

export default Pedalar;
