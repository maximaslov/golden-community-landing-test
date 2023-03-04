import React, { useEffect } from 'react';
import styles from './Main.module.css';


const Main = ({setScrolled, setAnimate}) => {

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY >= 1000) {
            console.log("User has scrolled 500 pixels from the top.");
            setScrolled(true)
            setAnimate({x: -930, y:  -800, rotate:  90 })
          }
          if (window.scrollY < 1000) {
            console.log("User has scrolled 500 pixels from the top.");
            // setScrolled(false)
            setAnimate({x: 0, y:  0, rotate: 0 })
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      return (
        <main className={styles.main}></main>
      )
}

export default Main;