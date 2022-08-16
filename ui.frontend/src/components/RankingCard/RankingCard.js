import React from "react";
import PropTypes from "prop-types";

import AvatarPlaceholder from "../../assets/avatar-placeholder.svg";
import FlagPlaceholder from "../../assets/flag-placeholder.svg";

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
}) => {
  const [profileImgLoaded, setProfileImgLoaded] = React.useState(false);

  // Data when user doesn't has a country set
  const hasCountry = country_code !== "XX";

  const flag = hasCountry
    ? `https://countryflagsapi.com/svg/${country_code}`
    : FlagPlaceholder;

  // TODO: Use this when state data comes from API
  // const place = city && state ? `${city}, ${state}` : "No data available";
  const place = city ? `${city}` : "No data available";

  return (
    <li key={nickname} className="ranking-card--container">
      <h4 className="ranking-card--rank">{ranking}º</h4>
      <div className="ranking-card--content">
        <div className="ranking-card--person">
          {/* Actual avatar */}
          <img
            style={{ display: profileImgLoaded ? "block" : "none" }}
            draggable="false"
            className="ranking-card--avatar"
            src={profile_img}
            alt={`${full_name}'s avatar`}
            onLoad={() => setProfileImgLoaded(true)}
          />
          {/* Placeholder, in case avatar doesn't load */}
          <img
            style={{ display: profileImgLoaded ? "none" : "block" }}
            draggable="false"
            className="ranking-card--avatar"
            src={AvatarPlaceholder}
            alt="avatar-placeholder"
          />
          <div className="ranking-card--info">
            <p className="p2">{full_name}</p>
            <span className="p3">@{nickname}</span>
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
  full_name: PropTypes.string,
  nickname: PropTypes.string,
  country_code: PropTypes.string,
  country: PropTypes.string,
  place: PropTypes.string,
  distance: PropTypes.string,
};

RankingCard.defaultProps = {
  rank: "?",
  distance: "0 km",
  nickname: "nickname",
};

export default RankingCard;
