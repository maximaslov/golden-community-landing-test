import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Background  from './images/main-planet.jpg'
import { useState } from 'react';
import { motion } from "framer-motion";

function App() {

  const [isScrolled, setScrolled] = useState(false)
  const [animate, setAnimate] = useState(null)

  return (
    <div className='appWrapper'>
      <div className='mainBackground'>
        {isScrolled 
        ? <motion.img 
        transition={{duration: 1.5, ease: "easeOut"}}
        animate={animate}
        src={Background} 
        alt='Background'/> 
        : 
        <img src={Background} alt='Background'/>}
      </div>
      <Header />
      <Main setScrolled={setScrolled} setAnimate={setAnimate}/>
    </div>
  )
}

export default App;
