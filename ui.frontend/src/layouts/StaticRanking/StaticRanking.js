import PropTypes from "prop-types";
import React from "react";
import { Text } from "../../components";
import ArrowRight from "../../assets/arrow--right.svg";
import RankingCard from "../../components/RankingCard/RankingCard";
import "./StaticRanking.scss";

const StaticRanking = ({ title, about, buttonTitle, buttonLink }) => {
  // Get data from the backend

  const data = [
    {
      rank: "1º",
      name: "Melissa Sampaio",
      handle: "@memartinez",
      flag: "https://via.placeholder.com/53x40",
      country: "Brasil",
      city: "São Paulo, São Paulo",
      score: "998 km",
      avatar: "https://via.placeholder.com/80",
    },
    {
      rank: "2º",
      name: "Marta Wilson",
      handle: "@millermar18",
      flag: "https://via.placeholder.com/53x40",
      country: "México",
      city: "Acapulco, Guerrero ",
      score: "784 km",
      avatar: "https://via.placeholder.com/80",
    },
    {
      rank: "3º",
      name: "Mike Johnson",
      handle: "@johmikeat",
      flag: "https://via.placeholder.com/53x40",
      country: "França",
      city: "Paris, Île-de-France",
      score: "722 km",
      avatar: "https://via.placeholder.com/80",
    },
  ];

  // TODO: Get data from the backend with API
  // React.useEffect(() => {
  //   return () => {};
  // }, []);

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
          {data.map((item, index) => (
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
