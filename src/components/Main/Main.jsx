import React, { useContext, useRef } from "react";
import { AppContext } from "../../context/Context";
import InfoBlock from "../InfoBlock/Infoblock";
import styles from "./Main.module.css";

const Main = () => {
  const data = useContext(AppContext);
  const containerRef = useRef(null);

  const handleScroll = (event) => {
    const { scrollTop, scrollLeft } = event.target;
    console.log(`User scrolled to (${scrollLeft}, ${scrollTop})`);
  };
  
  return (
    <main className={styles.main}
      ref={containerRef}
      onScroll={handleScroll}>
      <h1 className={styles.mainTitle}>GOLDEN COMMUNITY</h1>
      {data.isInfoBlockShow && <InfoBlock />}
    </main>
  );
};

export default Main;
