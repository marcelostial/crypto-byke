import React from "react";

const RichText = ({ text, className }) => {
  return (
    <div
      className={`text--container ${className ? className : ""}`}
      data-rte-editelement
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
};

export default RichText;
