import { useNavigate } from "react-router-dom"
import "./NavBarRight.css"

import { AnimatePresence, motion, Variants } from "motion/react"
import React from "react"
import { GlitchHandle } from "react-powerglitch"

type Links = {
  name: string
  route: string
}[]


const links: Links = [
  {
    name: "About",
    route: "/about"
  },
  {
    name: "Projects",
    route: "/proj",
  },
  {
    name: "Journey",
    route: "/journey",
  },
  {
    name: "Contact",
    route: "/contact",
  }
]


type NavBarRightProps = {
  setConsoleView: React.Dispatch<React.SetStateAction<boolean>>;
  consoleView: boolean
  consoleAnimateVar: Variants
  navGlitch: GlitchHandle
}


const NavBarRight: React.FC<NavBarRightProps> = ({ consoleAnimateVar, setConsoleView, consoleView, navGlitch}) => {
  const navigate = useNavigate()

  return (
    <div className="navBarRightMainDiv">
      <AnimatePresence>
        {consoleView && (
          <motion.div
            className="navBarRightCont"
            variants={consoleAnimateVar}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {links.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  navigate(item.route);
                  setConsoleView(false);
                }}
                ref={navGlitch.ref}
              >
                <h3>{item.name}</h3>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NavBarRight