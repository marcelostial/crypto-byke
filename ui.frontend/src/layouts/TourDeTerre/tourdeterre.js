import "./tourdeterre.scss";
import PropTypes from "prop-types";
import { Grid } from "../../components/Grid/Grid";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";

const TourDeTerre = ({ title, text, image = {} }) => {
  return (
    <>
      <Grid className="tourdeterre--container">
        <div className="textcontainer">
          <Title text={title} variant="dark" />
          <div className="text">
            {text && <Text text={text} richText={true} />}
          </div>
        </div>
        <div className="imagecontainer">
          <img src={image.src} alt="alt" />
        </div>
      </Grid>
      {/* Desktop View  */}
      {/* <div className={styles["desktop"]}>
        <div className={styles["container"]}>
          <div className={styles["wrapper"]}>
            <div className={styles["subcontainer"]}>
              <div className={styles["textcontainer"]}>
                <Title text={title} variant="dark" />
                <div className={styles["text"]}>
                  {text && <Text text={text} richText={true} />}
                </div>
              </div>
            </div>
            <div className={styles["imagecontainer"]}>
              <img src={image.src} alt="alt" />
            </div>
          </div>
        </div>
      </div> */}
      {/* Mobile View */}
      {/* <div className={styles["mobile"]}>
        <div className={styles["container"]}>
          <div className={styles["subcontainer"]}>
            <div className={styles["textcontainer"]}>
              <Title text={title} variant="dark" />
              <div className={styles["text"]}>
                {text && <Text text={text} richText={true} />}
              </div>
            </div>
          </div>
          <div className={styles["imagecontainer"]}>
            <img src={image.src} alt="alt" />
          </div>
        </div>
      </div> */}
    </>
  );
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
