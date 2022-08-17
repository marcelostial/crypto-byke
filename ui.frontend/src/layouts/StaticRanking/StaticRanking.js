import React from "react";

import PropTypes from "prop-types";

import { Button, Grid, RankingCard, Text, Title } from "../../components";

import { getStaticRankings } from "../../services/ranking";

import "./StaticRanking.scss";

const StaticRanking = ({
  title,
  about,
  buttonTitle,
  buttonUrl,
  missingCountryMessage,
}) => {
  const [rankings, setRankings] = React.useState([]);

  React.useEffect(() => {
    getStaticRankings().then(({ data }) =>
      setRankings(data.ranking.slice(0, 3))
    );
  }, []);

  return (
    <Grid className="static-ranking--container">
      <span className="anchor" id="ranking" />
      <Title text={title} />

      <h5>
        <Text className="static-ranking--about" text={about} />
      </h5>
      <div className="static-ranking--content">
        {rankings &&
          rankings.map((item) => (
            <RankingCard
              key={item.ranking}
              missingCountryMessage={missingCountryMessage}
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
  missingCountryMessage: PropTypes.string,
};

StaticRanking.defaultProps = {
  title: "Add a title",
  about: "Add a description",
  buttonText: "Button",
  buttonUrl: "/",
  missingCountryMessage: "No data available",
};

export default StaticRanking;
