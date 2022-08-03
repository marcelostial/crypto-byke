import React from "react";
import { Grid, Title } from "../../components";
import "./nossosnfts.scss";

const NossosNFTs = ({ maintitle, nftcards }) => {
  return (
    <Grid className="nossosnfts--container">
      <Title text={maintitle} variant="dark" />
      <div className="cardcontainer">
        {nftcards.map(({ icon, label, path }, index) => (
          <div className="card">
            <a href={path}>
              <img src={icon.src} alt="icon" />
              <div className="cardbottom">
                <p className="label">{label}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </Grid>
  );
};

NossosNFTs.defaultProps = {
  maintitle: "Ganhe NFTs",
  nftcards: [
    {
      icon: "",
      label: "200 KM",
      path: "",
    },
  ],
};

export default NossosNFTs;
