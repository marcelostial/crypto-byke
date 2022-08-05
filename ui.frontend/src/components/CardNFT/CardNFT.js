import React from "react";
import "./CardNFT.scss";

export const CardNFT = ({ path, label, icon = {} }) => {
  return (
    <a href={path} className="nft-card">
      <img src={icon.src} alt={`NFT ${label}`} />
      <h5 className="label">{label}</h5>
    </a>
  );
};
