import styles from "./ExampleComponent.scss";
import PropTypes from "prop-types";
import Text from "../../components/Text/Text";
import { Grid } from "../../components/Grid/Grid";

const ExampleComponent = ({ title, text }) => {
  return (
    <Grid className="exampleComponent--container">
      {/* <div className={styles["subcontainer"]}> */}
      <div className="titlecontainer">
        <p className="title">{title}</p>
        <div className="divider" />
      </div>

      <Text text={text} richText={true} />
    </Grid>
  );
};

ExampleComponent.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

ExampleComponent.defaultProps = {
  title: "Cryptobike por Compass",

  text: `Pedalar é o jeito mais sustentável e saudável de locomoção. Grandes cidades ao redor do mundo estão preparadas para o ciclismo. Mas a “cultura do carro” ainda é muito maior e mais forte
  Então pensamos: e se pedalar tivesse uma recompensa extra? E se a gente apontasse um norte para esse meio de transporte com o objetivo de incentivar uma mudança de hábito?
  E se pedalar fosse ainda mais valioso?
  Desse questionamento surgiu a Cryptobike by Compass. Um plataforma que usa tecnologia blockchain para transformar os dados de sua pedalada em NFT’s exclusivos. 
  A cada quantidade de KM percorrida em uma bicicleta, você conquista um dos NFT’s que vão vir com todas as informações da  sua pedalada. Distância, velocidade e dias que você pedalou: tudo inserido na sua própria arte digital. 
  A partir de agora pedalar se tornou ainda mais valioso. `,
};

export default ExampleComponent;
