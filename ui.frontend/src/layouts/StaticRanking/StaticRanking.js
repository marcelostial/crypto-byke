import React from "react";

import PropTypes from "prop-types";

import { Button, Grid, RankingCard, Text, Title } from "../../components";

import { getRankings } from "../../services/ranking";

import "./StaticRanking.scss";

const StaticRanking = ({ title, about, buttonTitle, buttonUrl }) => {
  const [rankings, setRankings] = React.useState([]);

  React.useEffect(() => {
    getRankings().then(({ data }) => setRankings(data.ranking.slice(0, 3)));
  }, []);

  return (
    <Grid className="static-ranking--container">
      <div className="static-ranking--title">
        <Title text={title} />
      </div>
      <h5>
        <Text className="static-ranking--about" text={about} />
      </h5>
      <div className="static-ranking--content">
        {rankings &&
          rankings.map((item) => (
            <RankingCard
              key={item.ranking}
              place={`${item.city}, ${item.state}`}
              {...item}
            />
          ))}
      </div>
      <div className="static-ranking--button">
        <Button
          linkType={"externo"}
          label={buttonTitle}
          alignIcon={"right"}
          type="quinary"
          url={buttonUrl}
          icon="arrow-right"
        />
      </div>
    </Grid>
  );
};

StaticRanking.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
};

StaticRanking.defaultProps = {
  title: "Add a title",
  about: "Add a description",
  buttonText: "Button",
  buttonUrl: "/",
};

export default StaticRanking;
