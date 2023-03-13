import React from 'react';
import styles from "./Infoblock.module.css";
import Button from "../Button/Button";

const About = () => {
    return (
        <div className={styles.firstBlock}>
            <h2>Ми – ком’юніті, яке покаже тобі, 
                що таке WEB3 та як воно працює</h2>
            <p>Пояснимо, чому всі говорять що за криптографією майбутнє та як мати 
крипто-гроші. Ми архітектори та будівельники, які будують в новій світовій мережі, 
                в новому інтернеті - WEB3. Ми команда, різних людей але єдиною метою, зробити світ зручнішим для використання.</p>
            <Button text='СТАТИ ЧАСТИНОЮ КОМАНДИ'/>
        </div>
    )
}

export default About;