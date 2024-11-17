import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, Variants } from "motion/react";
import { useGlitch, GlitchHandle } from 'react-powerglitch';

import MainPage from "./pages/main/MainPage"
import NavBar from "./pages/navbar/NavBar"
import { useState } from "react";
import AboutPage from "./pages/aboutme/AboutPage";
import ProjectPage from "./pages/projects/ProjectPage";
import JourneyPage from "./pages/journey/JourneyPage";

const pagesAnimatVar: Variants = {
  initial: {
    opacity: 0,
    y: -100
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500, 
      damping: 10,    
      
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.2,
    }
  }
};

const arrowAnimateVar: Variants = {
  initial : ({ xLen, yLen }: { xLen: number; yLen: number }) => ({
    opacity: 0,
    x: xLen,
    y: yLen,
  }),
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 400, 
      damping: 10,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 6,
    }
  },
}

function App() {
  const [showMain, setShowMain] = useState(false)

  const location = useLocation()

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

  const arrowGlitch: GlitchHandle = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: true,
    glitchTimeSpan: {
      start: 0.0,
      end: 0.3,   
    },
    shake: false,
    slice: {
      count: 12, 
      velocity: 16, 
    },
    timing: {
      duration: 5000, 
      iterations: Infinity, 
      easing: "ease-in-out" 
    },
  });
  
  return (
    <>
      <NavBar navGlitch={navGlitch} setShowMain={setShowMain}/>
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage showMain={showMain} pagesAnimatVar={pagesAnimatVar} arrowAnimateVar={arrowAnimateVar}/>} />
        <Route path="/about" element={<AboutPage pagesAnimatVar={pagesAnimatVar} arrowAnimateVar={arrowAnimateVar} arrowGlitch={arrowGlitch}/>} />
        <Route path="/proj" element={<ProjectPage pagesAnimatVar={pagesAnimatVar} arrowAnimateVar={arrowAnimateVar} arrowGlitch={arrowGlitch}/>}/>
        <Route path="/journey" element={<JourneyPage pagesAnimatVar={pagesAnimatVar}/>}/>
      </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
