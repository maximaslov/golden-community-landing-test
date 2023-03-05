import React from "react";
import InfoBlock from "../InfoBlock/Infoblock";
import styles from "./Main.module.css";

const Main = ({}) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>GOLDEN COMMUNITY</h1>
      <InfoBlock />
    </main>
  );
};

export default Main;
