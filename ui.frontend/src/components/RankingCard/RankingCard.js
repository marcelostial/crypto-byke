import React from "react";
import PropTypes from "prop-types";

import "./RankingCard.scss";

const RankingCard = ({
  ranking,
  profile_img,
  name,
  nickname,
  country_code,
  country,
  place,
  distance,
}) => {
  const flag = `https://countryflagsapi.com/svg/${country_code}`;

  return (
    <li key={nickname} className="ranking-card--container">
      <h4 className="ranking-card--rank">{ranking}º</h4>
      <div className="ranking-card--content">
        <div className="ranking-card--person">
          <img
            draggable="false"
            className="ranking-card--avatar"
            src={profile_img}
            alt={`${name}'s avatar`}
          />
          <div className="ranking-card--info">
            <p className="p2">{name}</p>
            <span className="p3">{nickname}</span>
            <div className="ranking-card--country-mobile">
              <img src={flag} alt="Flag" />
              <p className="p2">{country}</p>
              <span className="p3">{place}</span>
            </div>
          </div>
        </div>
        <div className="ranking-card--rest">
          <div className="ranking-card--country">
            <img src={flag} alt="Flag" />
            <div>
              <p className="p2">{country}</p>
              <span className="p3">{place}</span>
            </div>
          </div>
          <h5 className="p1">{distance}</h5>
        </div>
      </div>
    </li>
  );
};

RankingCard.propTypes = {
  ranking: PropTypes.number,
  profile_img: PropTypes.string,
  name: PropTypes.string,
  nickname: PropTypes.string,
  country_code: PropTypes.string,
  country: PropTypes.string,
  place: PropTypes.string,
  distance: PropTypes.string,
};

RankingCard.defaultProps = {
  rank: "?",
  distance: "0 km",
};

export default RankingCard;
