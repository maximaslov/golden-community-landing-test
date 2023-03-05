import React, { useEffect, useState } from "react";
import styles from "./BackgroundImage.module.css";
import Background from "../../images/main-planet.jpg";
import { motion } from "framer-motion";

const BackgroundImage = () => {
  const [animate, setAnimate] = useState({
    x: 0,
    y: 0,
    rotate: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        console.log(`User has scrolled ${window.scrollY} pixels from the top.`);
        setAnimate({
          x: -870,
          y: -650,
          rotate: 90,
        });
      }
      if (window.scrollY < 400) {
        console.log(`User has scrolled ${window.scrollY} pixels to the top.`);
        setAnimate({ x: 0, y: 0, rotate: 0 });
        
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.mainBackground}>
      <motion.img
        transition={{ duration: 1.8, ease: "easeInOut" }}
        animate={animate}
        src={Background}
        alt="Background"
      />
    </div>
  );
};

export default BackgroundImage;