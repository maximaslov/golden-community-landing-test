import React, { useState, createContext } from 'react';
import { useEffect } from 'react';

export const AppContext = createContext();

const Context = (props) => {

    const [animate, setAnimate] = useState({
        x: 0,
        y: 0,
        rotate: 0,
      });
    const [isInfoBlockShow, setInfoBlockShow] = useState(true);

    useEffect(() => {
        console.log('use effect')
        const handleScroll = () => {
            if (window.scrollY >= 250) {
              console.log(`User has scrolled ${window.scrollY} pixels from the top.`);
              setAnimate({
                x: -870,
                y: -650,
                rotate: 90,
              });
              setInfoBlockShow(true);
            }
            if (window.scrollY < 250) {
              console.log(`User has scrolled ${window.scrollY} pixels to the top.`);
              setAnimate({ x: 0, y: 0, rotate: 0 });
              setInfoBlockShow(false);
            }
          };
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
    },[])



    const value = {
        animate,
        isInfoBlockShow,
    }

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
}

export default Context;


