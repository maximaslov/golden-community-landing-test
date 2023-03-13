import React, { useState } from 'react';
import styles from "./Infoblock.module.css";
import About from './About';
import Team from './Team';
import News from './News';

const FullScreen = () => {
    const [showFirstBlock, setFirstBlock] = useState(true);
    const [showSecondBlock, setSecondBlock] = useState(false);
    const [showThirdBlock, setThirdBlock] = useState(false);
    const firstBlock = () => {
        setFirstBlock(true);
        setSecondBlock(false);
        setThirdBlock(false);
    }
    const secondBlock = () => {
       setFirstBlock(false);
        setSecondBlock(true);
        setThirdBlock(false);
    }

     const thirdBlock = () => {
        setFirstBlock(false);
        setSecondBlock(false);
        setThirdBlock(true);
    }
   

    return (
        <div>
            <div className={styles.wrapperTitel}>
                <h2>01.</h2><h3>хто ми</h3>
            </div>
            <div className={styles.info}>
                <div className={styles.infoMenu}>
                    <ul className={styles.menuItems}>
                        <li className={styles.menuItem}>
                            <a href="#about" onClick={firstBlock}>ПРО WEB3</a>
                        </li>
                        <li className={styles.menuItem}>
                            <a href="#team" onClick={secondBlock}>КОМАНДА</a>
                        </li>
                        <li className={styles.menuItem}>
                        <a href="#news"  onClick={thirdBlock}>НОВИНИ</a>
                        </li>
                    </ul> 
                </div>

 
                {showFirstBlock && <About id="#about" />} 
                {showSecondBlock && <Team   id="#team"/>}
                {showThirdBlock && <News  id="#news" />}
                
                
            </div>
        </div>
        
    )
}
export default FullScreen ;