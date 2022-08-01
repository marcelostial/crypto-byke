import React from "react";
import "./Title.scss";

/**
 * @param {string} variant - light or dark
 */
export default function Title({ text, variant }) {
  return (
    <div className={`title--container title--${variant}`}>
      <h2 className="title--text">
        {text}
        <div className="title--underline" />
      </h2>
    </div>
  );
}

Title.defaultProps = {
  text: "Title",
  variant: "light",
};
