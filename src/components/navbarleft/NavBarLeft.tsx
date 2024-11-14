import "./NavBarLeft.css"

import { AnimatePresence, motion, Variants } from "motion/react"
import React from "react"
import { GlitchHandle } from "react-powerglitch"

type Logos = {
  imageSrcLight: string
  imageSrcDark: string
  link: string
  alttxt: string
}[]

const logos: Logos = [
  {
    imageSrcLight: "/navbar/gitblack.svg",
    imageSrcDark: "",
    link: "https://github.com/Aloyleow/",
    alttxt: "githubLogo",
  },
  {
    imageSrcLight: "/navbar/linkblack.svg",
    imageSrcDark: "",
    link: "https://www.linkedin.com/in/aloyleow",
    alttxt: "linkinLogo",
  },
  {
    imageSrcLight: "/navbar/mailblack.svg",
    imageSrcDark: "",
    link: "",
    alttxt: "gmailLogo",
  },
]

type Settings = {
  imageSrcLight: string
  imageSrcDark: string
  alttxt: string
}[]

const settings: Settings = [
  {
    imageSrcLight: "/navbar/moon.svg",
    imageSrcDark: "",   
    alttxt: "ColorThemeLogo",
  },
  {
    imageSrcLight: "/navbar/globeblack.svg",
    imageSrcDark: "", 
    alttxt: "LanguageLogo",
  },
]


type NavBarLeftProps = {
  setConsoleView: React.Dispatch<React.SetStateAction<boolean>>;
  consoleView: boolean
  consoleAnimateVar: Variants
  navGlitch: GlitchHandle
}

const NavBarLeft: React.FC<NavBarLeftProps> = ({ consoleAnimateVar, setConsoleView, consoleView, navGlitch}) => {

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
                <div ref={navGlitch.ref}  key={index} onClick={() => setConsoleView(false)}>
                  <img src={settings.imageSrcLight} alt={settings.alttxt} width="32px"/>
                </div>
              ))}
            </div>
            <div className="navBarLeftLogo">
              {logos.map((logos, index) => (
                <div ref={navGlitch.ref}  key={index}>
                  <a href={logos.link} target='_blank' rel="noopener noreferrer" onClick={() => setConsoleView(false)}>
                    <img src={logos.imageSrcLight} alt={logos.alttxt} width="32px" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NavBarLeft