import React from "react";

import PropTypes from "prop-types";

import { RankingCard, Text } from "../../components";

import ArrowRight from "../../assets/arrow--right.svg";
import { getRankings } from "../../services/ranking";

import "./StaticRanking.scss";

const StaticRanking = ({ title, about, buttonTitle, buttonLink }) => {
  const [rankings, setRankings] = React.useState([]);

  React.useEffect(() => {
    getRankings().then((data) => setRankings(data));
  }, []);

  return (
    <div className="static-ranking--container">
      <div className="static-ranking--sub-container">
        <h1 className="static-ranking--title">
          {title}
          <div className="static-ranking--line" />
        </h1>
        <h5>
          <Text className="static-ranking--about" text={about} />
        </h5>
        <div className="static-ranking--content">
          {rankings &&
            rankings.map((item, index) => (
              <RankingCard key={index} {...item} />
            ))}
        </div>
        <a className="static-ranking--button" href={buttonLink}>
          <div className="static-ranking--button-text">
            <p>{buttonTitle}</p>
            <img src={ArrowRight} alt="arrow" />
          </div>
        </a>
      </div>
    </div>
  );
};

StaticRanking.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};

StaticRanking.defaultProps = {
  title: "Add a title",
  about: "Add a description",
  buttonText: "Button",
  buttonLink: "/",
};

export default StaticRanking;
