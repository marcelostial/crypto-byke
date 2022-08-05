import React from "react";
import { Grid, Title, CardNFT } from "../../components";
import "./OurNFTs.scss";

const OurNFTs = ({ maintitle, nftcards }) => {
  return (
    <Grid className="nfts--container">
      <Title text={maintitle} variant="dark" />

      <div className="row">
        {nftcards.map(({ icon, label, path }, index) => (
          <CardNFT
            key={"nftc_" + index}
            path={path}
            label={label}
            icon={icon}
          />
        ))}
      </div>
    </Grid>
  );
};

OurNFTs.defaultProps = {
  maintitle: "Ganhe NFTs",
  nftcards: [
    {
      icon: {
        src: "",
      },
      label: "200 KM",
      path: "",
    },
  ],
};

export default OurNFTs;
