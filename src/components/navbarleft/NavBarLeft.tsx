import "./NavBarLeft.css"

import { AnimatePresence, motion, Variants } from "motion/react"
import React from "react"
import { GlitchHandle } from "react-powerglitch"
import { useNavigate } from "react-router-dom"

type Logos = {
  imageSrcLight: string
  imageSrcDark: string
  link: string
  alttxt: string
}[];

const logos: Logos = [
  {
    imageSrcLight: "/navbar/gitblack.svg",
    imageSrcDark: "/navbar/gitwhite.svg",
    link: "https://github.com/Aloyleow/",
    alttxt: "githubLogo",
  },
  {
    imageSrcLight: "/navbar/linkblack.svg",
    imageSrcDark: "/navbar/linkwhite.svg",
    link: "https://www.linkedin.com/in/aloyleow",
    alttxt: "linkinLogo",
  },
];

type Settings = {
  imageSrcLight: string;
  imageSrcDark: string;
  alttxt: string;
  name: string;
}[];

const settings: Settings = [
  {
    name: "color",
    imageSrcLight: "/navbar/moon.svg",
    imageSrcDark: "/navbar/sun.svg",   
    alttxt: "ColorThemeLogo",
  },
  {
    name: "language",
    imageSrcLight: "/navbar/globeblack.svg",
    imageSrcDark: "/navbar/globewhite.svg", 
    alttxt: "LanguageLogo",
  },
];


type NavBarLeftProps = {
  setConsoleView: React.Dispatch<React.SetStateAction<boolean>>;
  consoleView: boolean
  consoleAnimateVar: Variants
  navGlitch: GlitchHandle
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
}

const NavBarLeft: React.FC<NavBarLeftProps> = ({ consoleAnimateVar, setConsoleView, consoleView, navGlitch, darkMode, setDarkMode}) => {
  const navigate = useNavigate();
  
  const handleSettings = (name: string) => {
    if (name === "color") {
      setDarkMode((prev) => !prev)
    } else if (name === "language"){
      return null
    }
  }

  return (
    <div className="navBarLeftMainDiv">
      <AnimatePresence>
        {consoleView && (
          <motion.div
            className="navBarLeftCont"
            variants={consoleAnimateVar}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={-50}
          >
            <div className="navBarLeftSet">
              {settings.map((settings, index) => (
                <div 
                  ref={navGlitch.ref}  
                  key={index} 
                  onClick={() => {
                    setConsoleView(false)
                    handleSettings(settings.name)
                  }}>
                  <img src={darkMode ? settings.imageSrcDark : settings.imageSrcLight} alt={settings.alttxt} width="32px"/>
                </div>
              ))}
            </div>
            <div className="navBarLeftLogo">
              {logos.map((logos, index) => (
                <div ref={navGlitch.ref} key={index}>
                  <a href={logos.link} target="_blank" rel="noopener noreferrer" onClick={() => setConsoleView(false)}>
                    <img src={darkMode ? logos.imageSrcDark : logos.imageSrcLight} alt={logos.alttxt} width="32px" />
                  </a>
                </div>
              ))}
              <div 
                onClick={() => {
                  navigate("/contact")
                  setConsoleView(false)
                }} 
                ref={navGlitch.ref} 
                style={{ cursor: 'pointer' }}>
                <img src={darkMode ? '/navbar/mailwhite.svg' : '/navbar/mailblack.svg'} alt='homelogo' width="32px" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NavBarLeft