import React from "react";
import styles from "./Rings.module.css";
import SmallRing from "./SmallRing";
import MiddleRing from "./MiddleRing";
import LargeRing from "./LargeRing";

const Rings = () => {
  return (
    <div className={styles.ringsWrapper}>
      <SmallRing />
      <MiddleRing />
      <LargeRing />
    </div>
  );
};

export default Rings;
