import React from "react";
import "./PedalarCard.scss";
import { useRichText } from "../../hooks/useRichText";
import { Grid, Text, Title } from "../../components";

export const PedalarCard = ({ icon = {}, title, description }) => {
  return (
    <div className="pedalar--card">
      <img src={icon.src} className="icon" alt="svg" />

      <div className="text">
        <Text text={title} className="text title" />
        {/* <h5 className="title" dangerouslySetInnerHTML={useRichText(title)}>
          {title}
        </h5> */}
        <p className="p3 description">{description}</p>
      </div>
    </div>
  );
};
