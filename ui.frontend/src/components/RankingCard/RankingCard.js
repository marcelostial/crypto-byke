import React from "react";
import PropTypes from "prop-types";

import "./RankingCard.scss";

const RankingCard = ({
  ranking,
  profile_img,
  full_name,
  nickname,
  country_code,
  country,
  city,
  state,
  distance,
  missingCountryMessage,
}) => {
  const flag = `https://countryflagsapi.com/svg/${country_code}`;
  const place = city && state ? `${city}, ${state}` : missingCountryMessage;

  // Getting name initials
  const rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
  let initials = [...full_name.matchAll(rgx)] || [];
  initials = (
    (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
  ).toUpperCase();

  const onFlagLoad = ({ target }) => {
    target.style.backgroundColor = "transparent";
  };

  return (
    <li key={nickname} className="ranking-card--container">
      <h4 className="ranking-card--rank">{ranking}º</h4>
      <div className="ranking-card--content">
        <div className="ranking-card--person">
          <img
            draggable="false"
            className="ranking-card--avatar"
            src={profile_img}
            alt={initials}
          />
          <div className="ranking-card--info">
            <p className="p2">{full_name}</p>
            <span className="p3">@{nickname}</span>
            <div className="ranking-card--country-mobile">
              <img src={flag} alt="Flag" onLoad={onFlagLoad} />
              <p className="p2">{country}</p>
              <span className="p3">{place}</span>
            </div>
          </div>
        </div>
        <div className="ranking-card--rest">
          <div className="ranking-card--country">
            <img src={flag} alt="Flag" onLoad={onFlagLoad} />
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
  full_name: PropTypes.string,
  nickname: PropTypes.string,
  country_code: PropTypes.string,
  country: PropTypes.string,
  place: PropTypes.string,
  distance: PropTypes.string,
  missingCountryMessage: PropTypes.string,
};

RankingCard.defaultProps = {
  rank: "?",
  distance: "0 km",
  full_name: "Person Name",
  nickname: "nickname",
  missingCountryMessage: "No data available",
};

export default RankingCard;
