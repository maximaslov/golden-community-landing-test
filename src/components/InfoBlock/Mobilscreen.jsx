import React, { useState } from 'react';
import styles from "./Infoblock.module.css";
import arrowLeft from "../../images/Arrow_left.svg";
import arrowRight from "../../images/Arrow_right.svg";
import About from './About';
import Team from './Team';
import News from './News';



const MobilScreen = () => {
const [index, setIndex] = useState(0); 
let length = 3;

const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
    console.log('clicked');
};

const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
    console.log('clicked');
};


    return (
        <div >
            <div className={styles.wrapperTitel}>
                <h2>01.</h2><h3>хто ми</h3>
            </div>
            <div className={styles.wrapperMenuButtons}>
                <button onClick={handlePrevious} className={styles.btnArrow}>
                <img src={arrowLeft} alt="" />
                </button>
                
                <div className={styles.wrapperTitle}>
                    <h3 style={{
                    visibility: index === 0? '':'hidden',}} >ПРО WEB3</h3>
                    <h3 style={{
                    visibility: index === 1? '':'hidden',}}>КОМАНДА</h3>
                    <h3 style={{
                        visibility: index === 2 ? '' : 'hidden',}}>НОВИНИ</h3>
                </div>
                <button onClick={handleNext}className={styles.btnArrow} >
                <img src={arrowRight} alt="" />
                </button>
            </div>

            <div style={{
            visibility: index === 0? '':'hidden',}} className={styles.block}>
            <About  />
            </div>
            <div  style={{
            visibility: index === 1? '':'hidden',}} className={styles.block}>
            <Team />
            </div>
            <div  style={{
            visibility: index === 2? '':'hidden',}}  className={styles.block}>
            <News />
            </div>

      </div>
    )
}

export default MobilScreen;

