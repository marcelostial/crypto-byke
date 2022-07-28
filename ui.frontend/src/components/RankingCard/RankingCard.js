import React from "react";
import PropTypes from "prop-types";
import "./RankingCard.scss";

/**
 * @param {string} rank
 * @param {string} name
 * @param {string} handle
 * @param {string} score
 * @param {string} avatar
 */
const RankingCard = ({
  rank,
  name,
  handle,
  flag,
  country,
  city,
  score,
  avatar = {},
}) => {
  return (
    <li className="ranking-card--container">
      <h4 className="ranking-card--rank">{rank}</h4>
      <div className="ranking-card--content">
        <div className="ranking-card--person">
          <img
            draggable="false"
            className="ranking-card--avatar"
            src={avatar}
            alt={`${name}'s avatar`}
          />
          <div className="ranking-card--info">
            <p className="p2">{name}</p>
            <span className="p3">{handle}</span>
          </div>
        </div>
        <div className="ranking-card--rest">
          <div className="ranking-card--country">
            <img src={flag} alt="Some flag" />
            <div>
              <p className="p2">{country}</p>
              <span className="p3">{city}</span>
            </div>
          </div>
          <h5 className="p1">{score}</h5>
        </div>
      </div>
    </li>
  );
};

RankingCard.propTypes = {
  rank: PropTypes.string,
  name: PropTypes.string,
  handle: PropTypes.string,
  flag: PropTypes.string,
  country: PropTypes.string,
  city: PropTypes.string,
  score: PropTypes.string,
  avatar: PropTypes.string,
};

RankingCard.defaultProps = {
  rank: "?",
  score: "0 km",
};

export default RankingCard;
