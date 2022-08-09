import React from "react";

import PropTypes from "prop-types";

import ChevronDown from "../../assets/icon-regular-chevron-down.svg";

import "./DropDown.scss";
import Button from "../Button/Button";

const DropDown = ({
  values,
  onChange,
  mobileTitle,
  mobileSelectButton,
  mobileCancelButton,
}) => {
  const [focus, setFocus] = React.useState(false);
  const [selected, setSelected] = React.useState(values[0]);
  const [mobileSelected, setMobileSelected] = React.useState(selected);

  const isMobile = window.screen.availWidth < 576;

  React.useEffect(() => {
    document.body.style.overflow = focus && isMobile ? "hidden" : "unset";
  }, [focus, isMobile]);

  const handleClick = (data) => {
    setSelected(data);
    onChange(data);
    setFocus(false);
  };

  const handleFocusChange = ({ target }) => {
    if (target.id !== "select-option") {
      setFocus(false);
    }
  };

  return (
    <div tabIndex={isMobile ? "" : 0} onBlur={handleFocusChange}>
      <div
        className="drop-down--container"
        onClick={() => setFocus(!focus)}
        onFocus={() => setFocus(true)}
      >
        <div className="drop-down--content">
          <p className="p2 drop-down--selected">{selected.label}</p>
          <img
            className="drop-down--icon"
            src={ChevronDown}
            alt="chevron-down"
          />
        </div>
      </div>
      {focus && (
        <div>
          <ul className="drop-down--list">
            {values.map(({ label, value }, index) => (
              <li
                id="select-option"
                className="drop-down--item"
                key={`${index}-${value}`}
                onClick={() => handleClick({ label, value })}
              >
                {label}
              </li>
            ))}
          </ul>
          <div
            id="modal"
            className="drop-down--mobile-background"
            onClick={({ target }) => target.id === "modal" && setFocus(false)}
          >
            <div className="drop-down--mobile">
              <div className="drop-down--title">
                <p className="p1">{mobileTitle}</p>
              </div>
              <hr className="drop-down--line" />
              <div className="drop-down--select">
                {values.map(({ label, value }, index) => (
                  <div key={value} className="drop-down--options">
                    <input
                      id="select-option"
                      type="radio"
                      key={`${index}-${value}`}
                      name="drop-down--options"
                      value={value}
                      onChange={() => setMobileSelected({ label, value })}
                      checked={mobileSelected.value === value}
                    />
                    <span className="p3 drop-down--option">{label}</span>
                  </div>
                ))}
              </div>
              <div className="drop-down--buttons">
                <Button
                  label={mobileSelectButton}
                  type="quinary"
                  icon="none"
                  onClick={() => handleClick(mobileSelected)}
                />
                <Button
                  className="drop-down--button-cancel"
                  label={mobileCancelButton}
                  type="secondary"
                  icon="none"
                  theme="light"
                  onClick={() => setFocus(false)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

DropDown.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  mobileTitle: PropTypes.string.isRequired,
  mobileSelectButton: PropTypes.string.isRequired,
  mobileCancelButton: PropTypes.string.isRequired,
};

DropDown.defaultProps = {
  values: [{ label: "Label", value: "value" }],
  onChange: () => null,
  mobileTitle: "Dropdown Mobile Title",
  mobileSelectButton: "Select",
  mobileCancelButton: "Cancel",
};

export default DropDown;
