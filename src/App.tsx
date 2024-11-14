import { Routes, Route } from "react-router-dom"
import { Variants } from "motion/react";
import { useGlitch, GlitchHandle } from 'react-powerglitch';

import MainPage from "./pages/main/MainPage"
import NavBar from "./pages/navbar/NavBar"

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

function App() {

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
      <NavBar pagesAnimatVar={pagesAnimatVar} navGlitch={navGlitch}/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </>
  )
}

export default App
