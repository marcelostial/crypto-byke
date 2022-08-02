import React from "react";
import { Grid, Title } from "../../components";
import "./nossosnfts.scss";

const NossosNFTs = ({ maintitle, nftcards }) => {
  return (
    <Grid>
      <Title text={maintitle} />
      {nftcards.map(({ icon, label, path }, index) => (
        <div className="card">
          <a href={path}>
            <img src={icon.src} alt="icon" />
            <div>{label}</div>
          </a>
        </div>
      ))}
    </Grid>
  );
};

NossosNFTs.defaultProps = {
  maintitle: "Nossos NFTs",
  nftcards: [
    {
      icon: "",
      label: "200 KM",
      path: "",
    },
  ],
};

export default NossosNFTs;
