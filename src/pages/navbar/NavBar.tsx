import NavBarRight from "../../components/navbarright/NavBarRight"
import NavBarTop from "../../components/navbartop/NavBarTop"
import "./NavBar.css"
import React, {useState} from "react"
import { Variants } from "motion/react";
import NavBarLeft from "../../components/navbarleft/NavBarLeft";
import { GlitchHandle } from "react-powerglitch";



const consoleAnimateVar: Variants = {
  initial : (num: number = 50) => ({
    opacity: 0,
    x: num,
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.6,
      ease: "easeInOut"
    }
  },
  exit: (num: number = 50) => ({
    opacity: 0,
    x: num,
    transition: {
      delay: 0.1,
      duration: 0.6,
    }
  })
};

type NavBarProps = {
  navGlitch: GlitchHandle;
  showMain: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean; 
};

const NavBar: React.FC<NavBarProps> = ({ navGlitch, showMain, setDarkMode, darkMode}) => {
  const [consoleView, setConsoleView] = useState(false)
  
  
  const handleConsoleView = () => {
    if (consoleView === false){
      setConsoleView(true)
    } else if ( consoleView=== true) {
      setConsoleView(false)
    }
  };

  return (
    
    <>
      {showMain && <NavBarTop handleConsoleView={handleConsoleView} setConsoleView={setConsoleView} navGlitch={navGlitch}/>}
      <NavBarRight consoleAnimateVar={consoleAnimateVar} setConsoleView={setConsoleView} consoleView={consoleView} navGlitch={navGlitch}/>
      <NavBarLeft 
        consoleAnimateVar={consoleAnimateVar} 
        setConsoleView={setConsoleView} 
        consoleView={consoleView} 
        navGlitch={navGlitch}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </>
  )
}

export default NavBar