import React from "react";

import PropTypes from "prop-types";

import { Grid, Text } from "../../components";

import Question from "../../assets/question-mark.svg";
import ArrowRight from "../../assets/arrow--right.svg";

import "./NotFound.scss";
import { Link } from "react-router-dom";
import resolvePath from "../../routing/resolvePath";

const NotFound = ({ title, description, homeLabel, homeUrl }) => {
  return (
    <Grid className="not-found--container">
      <img className="not-found--question" src={Question} alt="Question mark" />
      <div className="not-found--sub-container">
        <h3>
          <Text className="not-found--title" text={title} />
        </h3>
        <p className="p3 not-found--description">{description}</p>
        <Link className="not-found--link" to={resolvePath(homeUrl)}>
          <p>{homeLabel}</p>
          <img src={ArrowRight} alt="Arrow Right" />
        </Link>
      </div>
    </Grid>
  );
};

NotFound.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  homeLabel: PropTypes.string,
  homeUrl: PropTypes.string,
};

NotFound.defaultProps = {
  title: "Not Found Title",
  description: "Not Found Description",
  homeLabel: "Go back",
  homeUrl: "/",
};

export default NotFound;
