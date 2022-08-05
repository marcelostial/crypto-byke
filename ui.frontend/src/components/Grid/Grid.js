import React from "react";
import "./Grid.scss";

export const Grid = ({ children, className, style, ...props }) => {
  return (
    <div className={`grid--container ${className}`} style={style} {...props}>
      <div className="grid--inner">{children}</div>
    </div>
  );
};
