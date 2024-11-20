import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import { AnimatePresence, Variants } from "motion/react";
import { useGlitch, GlitchHandle } from 'react-powerglitch';

import MainPage from "./pages/main/MainPage"
import NavBar from "./pages/navbar/NavBar"
import { useState } from "react";
import AboutPage from "./pages/aboutme/AboutPage";
import ProjectPage from "./pages/projects/ProjectPage";
import JourneyPage from "./pages/journey/JourneyPage";
import ContactPage from "./pages/contact/ContactPage";
import Landing from "./components/landing/Landing";


const pagesAnimatVar: Variants = {
  initial: {
    opacity: 0,
    
  },
  animate: {
    opacity: 1,
    
    transition: {
      duration: 1.2,
      
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
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

const fadeTransitionAnimatVar: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    }
  }
};

function App() {
  const [showMain, setShowMain] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const location = useLocation()

  // useEffect(() => {
  //   const darkModeSettings = window.matchMedia('(prefers-color-scheme: dark)')

  //   setDarkMode(darkModeSettings.matches)
  // },[])

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

  const navGlitchDark: GlitchHandle = useGlitch({
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

  const arrowGlitchDark: GlitchHandle = useGlitch({
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
    <div style={{backgroundColor: darkMode ? "black" : "white"}} className="routesDiv">
      <NavBar navGlitch={navGlitch} showMain={showMain} setDarkMode={setDarkMode} darkMode={darkMode}/>
      {/* <Background darkMode={darkMode}/> */}
      <AnimatePresence mode="wait">
      {!showMain && <Landing darkMode={darkMode} setShowMain={setShowMain} pagesAnimatVar={pagesAnimatVar}/>}
      {showMain && 
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <MainPage 
              darkMode={darkMode} 
              showMain={showMain} 
              pagesAnimatVar={pagesAnimatVar} 
              arrowAnimateVar={arrowAnimateVar}
            />} 
        />
        <Route 
          path="/about" 
          element={
            <AboutPage 
              darkMode={darkMode} 
              pagesAnimatVar={pagesAnimatVar} 
              arrowAnimateVar={arrowAnimateVar} 
              arrowGlitch={arrowGlitch}
              arrowGlitchDark={arrowGlitchDark}
            />}
         />
        <Route 
          path="/proj" 
          element={
            <ProjectPage 
              darkMode={darkMode}
              pagesAnimatVar={pagesAnimatVar} 
              arrowAnimateVar={arrowAnimateVar} 
              arrowGlitch={arrowGlitch} 
              fadeTransitionAnimatVar={fadeTransitionAnimatVar}
              arrowGlitchDark={arrowGlitchDark}
            />}
        />
        <Route 
          path="/journey" 
          element={
            <JourneyPage 
              darkMode={darkMode}
              pagesAnimatVar={pagesAnimatVar} 
              arrowAnimateVar={arrowAnimateVar} 
              arrowGlitch={arrowGlitch}  
              arrowGlitchDark={arrowGlitchDark}
            />}
        />
        <Route 
          path="/contact" 
          element={
            <ContactPage 
              darkMode={darkMode}
              pagesAnimatVar={pagesAnimatVar} 
              navGlitch={navGlitch} 
              fadeTransitionAnimatVar={fadeTransitionAnimatVar}
              navGlitchDark={navGlitchDark}
            />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>}
      </AnimatePresence>
    </div>
  )
}

export default App
