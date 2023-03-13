import React from 'react';
import styles from "./Infoblock.module.css";
import Button from "../Button/Button";

const News = () => {
    return (
        <div className={styles.thirdBlock}>
            <h2>Приймай активну участь</h2>
            <p>А можливо тобі стане цікаво як працює web3? Хочеш знати новини 
                про наші нові проекти раз на місяць та вносити пропозиції?
                <br />
                <br />
                
                Реєструйся на сайті:</p>
            <Button text='ЗАРЕЄСТРУВАТИСЯ'/>
        </div>
    )
}

export default News;