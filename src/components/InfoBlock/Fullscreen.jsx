import React, { useContext, useState } from "react";
import styles from "./Infoblock.module.css";

import { AppContext } from '../../context/Context'
import Button from "../Button/Button";

const FullScreen = () => {
  
  const data = useContext(AppContext);
   const [currentBlock, setCurrentBlock] = useState(data.infoBlock[0]);
 
  const Block = () => {
        return (
             <article className={styles.Block}>
                <h2>{currentBlock.mainText}</h2>
                <p>{currentBlock.text}</p>
                <Button text={currentBlock.textBTN} />
        </article>
         )
     }
  const NavButtons = () => {
        return (
          data.infoBlock.map((e,i=0) => (<li key={i+1} className={styles.menuItem}><a onClick={() => setCurrentBlock(e)}>
               {e.title}
              </a></li>)) 
        )
    }
  return (
    <div>
      <div className={styles.wrapperTitel}>
        <h2>01.</h2>
        <h3>хто ми</h3>
      </div>
          <div className={styles.info}>
            <nav className={styles.infoMenu}>
              <ul className={styles.menuItems}>
              <NavButtons />
              </ul>
            </nav>
        <Block />
      </div>
    </div>
  );
};
export default FullScreen;
