import React from "react";

import PropTypes from "prop-types";

import Icon from "../../assets/icon-regular-search.svg";

import "./SearchBar.scss";

const SearchBar = ({ placeholder, value, onChange, onSearch }) => {
  const searchInputEl = React.useRef(null);

  const focusInput = ({ target }) => {
    if (target.id !== "search-icon") {
      searchInputEl.current.focus();
    }
  };

  return (
    <div className="search-bar--container" onClick={focusInput}>
      <img id="search-icon" src={Icon} alt={"search-icon"} onClick={onSearch} />
      <input
        ref={searchInputEl}
        className="p2"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={({ key }) => {
          if (key === "Enter" || key === "NumpadEnter") {
            onSearch();
          }
        }}
      />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
};

SearchBar.defaultProps = {
  placeholder: "Search Placeholder",
  value: "",
  onChange: () => null,
  onSearch: () => null,
};

export default SearchBar;
