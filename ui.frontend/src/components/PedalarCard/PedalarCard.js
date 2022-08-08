import React from "react";
import "./PedalarCard.scss";

export const PedalarCard = ({ icon = {}, title, description }) => {
  return (
    <div className="pedalar--card">
      <img src={icon.src} className="icon" alt="svg" />

      <div className="text">
        <h5 className="title">{title}</h5>
        <p className="p3 description">{description}</p>
      </div>
    </div>
  );
};
