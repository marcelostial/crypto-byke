import React from "react";
import { Grid, Text, Title } from "../../components";

import "./CryptobikePorCompass.scss";

const CryptoPorCompass = ({ title, text }) => {
  return (
    <Grid className="by-compass">
      <span className="anchor" id="about" />
      <Title text={title} variant="light" />

      <Text text={text} className="text p3" />
    </Grid>
  );
};

CryptoPorCompass.defaultProps = {
  title: "Cryptobike por Compass",

  text: `Pedalar é o jeito mais sustentável e saudável de locomoção. Grandes cidades ao redor do mundo estão preparadas para o ciclismo. Mas a “cultura do carro” ainda é muito maior e mais forte. `,
};

export default CryptoPorCompass;
