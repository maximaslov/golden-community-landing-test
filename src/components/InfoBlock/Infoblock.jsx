import React, { useState , useEffect} from 'react';
import styles from "./Infoblock.module.css";
import MobilScreen from './Mobilscreen';
import FullScreen from './Fullscreen';

const InfoBlock = () => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 870px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 870px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
 
    return (
      <div className={styles.wrapper}>
            {matches && <FullScreen />}
            {!matches && <MobilScreen/>}
        </div>
        
    )
}

export default InfoBlock;