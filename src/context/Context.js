import React, { useState, createContext } from "react";
import { useEffect } from "react";

export const AppContext = createContext();

const Context = (props) => {
  const [animate, setAnimate] = useState({
    x: 0,
    y: 0,
    rotate: 0,
  });

  const [isInfoBlockShow, setInfoBlockShow] = useState(false);
  const [infoBlock, setInfoBlock] = useState([
    {
      id: 1,
      title: "ПРО WEB3",
      mainText:
        "Ми – ком’юніті, яке покаже тобі, що таке WEB3 та як воно працює",
      text: "Пояснимо, чому всі говорять що за криптографією майбутнє та як мати крипто-гроші. Ми архітектори та будівельники, які будують в новій світовій мережі, в новому інтернеті - WEB3. Ми команда, різних людей але єдиною метою, зробити світ зручнішим для використання.",
      textBTN: "СТАТИ ЧАСТИНОЮ КОМАНДИ",
    },
    {
      id: 2,
      title: "КОМАНДА",
      mainText: "Стань частиною команди",
      text: (
        <>
          Хочеш стати частиною команди? Поспілкуватись з розробниками, розпитати
          дизайнерів, чи дізнатись що таке таргетинг?
          <br />
          <br />
          Долучайся до нашого діскорду, ти опинишся в нашій команді, де зможеш
          отримати перший досвід у web3 та роботі з командою. Дізнаєшся як
          працює ІТ сфера та отримаєш досвід.
        </>
      ),
      textBTN: "ПРИЄДНАТИСЯ",
    },
    {
      id: 3,
      title: "НОВИНИ",
      mainText: "Приймай активну участь",
      text: (
        <>
          А можливо тобі стане цікаво як працює web3? Хочеш знати новини про
          наші нові проекти раз на місяць та вносити пропозиції?
          <br />
          <br />
          <br />
          <br />
          Реєструйся на сайті:
        </>
      ),
      textBTN: "ЗАРЕЄСТРУВАТИСЯ",
    },
  ]);

  useEffect(() => {
    console.log(isInfoBlockShow)
    const handleScroll = () => {
      if (window.scrollY >= 250) {
        console.log(`Пользователь скроллит вниз`)
        setAnimate({
          x: -870,
          y: -650,
          rotate: 90,
        })

        // setTimeout(() => {
        //   setInfoBlockShow(true)
        // }, 1800);
        setInfoBlockShow(true)
      }
    
      if (window.scrollY < 250) {
        console.log("Пользователь скроллит вверх")
        console.log(isInfoBlockShow)
        setAnimate({ x: 0, y: 0, rotate: 0 });
        // setTimeout(() => {
        //   setInfoBlockShow(false)
        // }, 1800);
        setInfoBlockShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const value = {
    animate,
    isInfoBlockShow,
    setInfoBlockShow,
    infoBlock,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default Context;
