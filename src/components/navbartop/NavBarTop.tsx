import "./NavBarTop.css"

import { motion, AnimatePresence, Variants } from "motion/react"
import React from "react";
import { GlitchHandle } from "react-powerglitch";

const logoAnimatVar: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1, 
    transition: {
      duration: 1.6, 
      ease: "easeInOut",
    },
  },
};

type NavBarTopProps = {
  handleConsoleView: () => void;
  setConsoleView: React.Dispatch<React.SetStateAction<boolean>>;
  navGlitch: GlitchHandle;
}

const NavBarTop: React.FC<NavBarTopProps> = ({ handleConsoleView, navGlitch}) => {
  
  return (
    <AnimatePresence>
      <div className="navBarTopMainDiv">
        <motion.div
          className="navBarTopDiv"
          variants={logoAnimatVar}
          initial="initial"
          animate="animate"
          viewport={{
            once: true
          }}
        >
          <div>
            <div ref={navGlitch.ref}>
              <img src="navbar/myLogo.svg" alt="myLogo" onClick={() => {handleConsoleView() }} className="navBarTopImg" />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default NavBarTop

