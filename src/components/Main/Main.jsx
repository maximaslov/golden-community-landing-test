import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import InfoBlock from "../InfoBlock/Infoblock";
import styles from "./Main.module.css";

const Main = () => {
  const data = useContext(AppContext);
  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>GOLDEN COMMUNITY</h1>
      {data.isInfoBlockShow && <InfoBlock />}
    </main>
  );
};

export default Main;
