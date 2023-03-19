import React, { useContext, useEffect } from "react";
import styles from "./BackgroundImage.module.css";
import Background from "../../images/main-planet.jpg";
import { motion } from "framer-motion";
import { AppContext } from '../../context/Context';

const BackgroundImage = () => {

  const data = useContext(AppContext);

  // useEffect(() => {
  //   if(data.animate.rotate === 90) {
  //     setTimeout(() => {
  //       data.setInfoBlockShow(true)
  //       console.log('усановили тру')
  //     }, 1500);
  //   } else (
  //     data.setInfoBlockShow(false)
  //   )
  // },[data.animate])
  

  return (
    <div className={styles.mainBackground}>
      <motion.img
        transition={{ duration: 1.8, ease: "easeInOut" }}
        animate={data.animate}
        src={Background}
        alt="Background"
      />
    </div>
  );
};

export default BackgroundImage;