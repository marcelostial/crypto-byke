import React from "react";

import PropTypes from "prop-types";

import {
  DropDown,
  Grid,
  RankingCard,
  SearchBar,
  Text,
  Title,
} from "../../components";
import { getRankings } from "../../services/ranking";
import ChevronDown from "../../assets/icon-regular-chevron-down.svg";

import "./DynamicRanking.scss";

const searchOptions = [
  { value: "nickname", label: "Nickname" },
  { value: "country", label: "País" },
  { value: "state", label: "Estado" },
  { value: "city", label: "Cidade" },
];

const DynamicRanking = ({
  title,
  description,
  searchPlaceholder,
  background = {},
  mobileDropDownTitle,
  mobileSelectButton,
  mobileCancelButton,
  columnRank,
  columnName,
  columnCountry,
  columnDistance,
}) => {
  const [rankings, setRankings] = React.useState([]);
  const [isReversed, setIsReversed] = React.useState(false);
  const [selectedFilter, setSelectedFilter] = React.useState(searchOptions[0]);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    getRankings().then(({ data }) => setRankings(data.ranking));
  }, []);

  const handleSearch = () => {
    // TODO: Implement search
    console.log(`Search by ${selectedFilter.label} text ${search}`);
  };

  const sortRankings = () => {
    setRankings((prev) => [...prev].reverse());
    setIsReversed(!isReversed);
  };

  return (
    <div>
      <Grid
        className="dynamic-ranking--container"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="dynamic-ranking--heading">
          <Title variant="dark" text={title} />
          <Text
            className="p1 dynamic-ranking--description"
            text={description}
          />
          <div className="dynamic-ranking--search">
            <DropDown
              mobileTitle={mobileDropDownTitle}
              mobileSelectButton={mobileSelectButton}
              mobileCancelButton={mobileCancelButton}
              values={searchOptions}
              onChange={(value) => setSelectedFilter(value)}
            />
            <SearchBar
              placeholder={`${searchPlaceholder} ${selectedFilter.label}`}
              value={search}
              onChange={({ target }) => setSearch(target.value)}
              onSearch={handleSearch}
            />
          </div>
        </div>
      </Grid>
      <Grid className="dynamic-ranking--content">
        <div className="dynamic-ranking--table-head">
          <div className="dynamic-ranking--table-rank" onClick={sortRankings}>
            <p className="p2">{columnRank}</p>
            <img
              style={{ transform: `rotate(${isReversed ? "180deg" : "0deg"})` }}
              src={ChevronDown}
              alt="down-arrow"
            />
          </div>
          <div className="dynamic-ranking--table-name">
            <p className="p2">
              {columnName}
              <span> / {columnCountry}</span>
            </p>
          </div>
          <div className="dynamic-ranking--table-country">
            <p className="p2">{columnCountry}</p>
          </div>
          <div className="dynamic-ranking--table-score">
            <p className="p2">{columnDistance}</p>
          </div>
        </div>
        {rankings &&
          rankings.map((item) => (
            <RankingCard
              key={item.ranking}
              place={`${item.city}, ${item.state}`}
              {...item}
            />
          ))}
      </Grid>
    </div>
  );
};

DynamicRanking.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  backgroundImage: PropTypes.string,
  mobileDropDownTitle: PropTypes.string,
  mobileSelectButton: PropTypes.string,
  mobileCancelButton: PropTypes.string,
  columnRank: PropTypes.string,
  columnName: PropTypes.string,
  columnCountry: PropTypes.string,
  columnDistance: PropTypes.string,
};

DynamicRanking.defaultProps = {
  title: "Ranking Tour de Terre",
  searchPlaceholder: "Search by",
  description: "<b>Bold Text.</b> Some other text...",
  mobileDropDownTitle: "Dropdown Title",
  mobileSelectButton: "Select",
  mobileCancelButton: "Cancel",
  columnRank: "Rank",
  columnName: "Name",
  columnCountry: "Country",
  columnDistance: "Distance",
};

export default DynamicRanking;
