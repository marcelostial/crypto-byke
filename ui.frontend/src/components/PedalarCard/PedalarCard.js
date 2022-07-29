import React from "react";
import "./PedalarCard.scss";

export const PedalarCard = ({ icon, title, description }) => {
  return (
    <div className="card">
      <img src={icon.src} className="icon" alt="svg" />
      <div className="textcontainer">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
