import { Routes, Route } from "react-router-dom"
import { Variants } from "motion/react";
import { useGlitch, GlitchHandle } from 'react-powerglitch';

import MainPage from "./pages/main/MainPage"
import NavBar from "./pages/navbar/NavBar"
import { useState } from "react";

const pagesAnimatVar: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1, 
    transition: {
      duration: 1.2, 
      ease: "easeIn",
    },
  },
};

const arrowAnimateVar: Variants = {
  initial : {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 0.6,
      type: "spring",
      stiffness: 400, 
      damping: 10,
    }
  },
}

function App() {
  const [showMain, setShowMain] = useState(false)

  const navGlitch: GlitchHandle = useGlitch({
    playMode: "click",
    createContainers: true,
    hideOverflow: true,
    glitchTimeSpan: {
      start: 0,
      end: 0.25,   
    },
    shake: false,
    slice: {
      count: 6, 
      velocity: 16, 
    },
    timing: {
      duration: 500, 
      iterations: 1, 
    },
  });
  
  return (
    <>
      <NavBar navGlitch={navGlitch} setShowMain={setShowMain}/>
      <Routes>
        <Route path="/" element={<MainPage showMain={showMain} arrowAnimateVar={arrowAnimateVar}/>} />
      </Routes>
    </>
  )
}

export default App
