import React from "react";
import styles from "../../layouts/Pedalar/pedalar.module.scss";

export const Card = ({ icon, title, description }) => {
  return (
    <div className={styles["card"]}>
      <img src={icon.src} className={styles["icon"]} alt="svg" />
      <div className={styles["textcontainer"]}>
        <p className={styles["title"]}>{title}</p>
        <p className={styles["description"]}>{description}</p>
      </div>
    </div>
  );
};
