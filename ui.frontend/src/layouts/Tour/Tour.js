import React from "react";

import { Grid, Title, Text } from "../../components";

import "./Tour.scss";

const Tour = ({ title, text, image = {} }) => {
  return (
    <Grid className="tour--container">
      <div className="content">
        <Title text={title} variant="dark" />

        <Text text={text} className="tour-text p3" />
      </div>

      <img src={image.src} className="image" alt="alt" />
    </Grid>
  );
};

Tour.defaultProps = {
  title: "Tour de Terre",
  text: "Default text",
};

export default Tour;
