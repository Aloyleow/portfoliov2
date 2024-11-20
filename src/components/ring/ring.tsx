import "./ring.css"
import { techSkills, otherSkills } from "../../data/aboutme"

import { AnimatePresence, motion, Variants } from "motion/react"
import { GlitchHandle, useGlitch } from "react-powerglitch";
import React, { useState } from "react"

const ringItemAnimateVar: Variants = {
  initial: {
    opacity: 0,   
  },
  animate: ({ delay }: { delay: number }) => ({
    opacity: 1, 
    transition: {
      delay: 0.12 * delay,
      duration: 0.8,
      ease: "easeInOut"
    }
  }),
  exit: ({ delay }: { delay: number }) => ({
    opacity: 0,
    transition: {
      delay:0.12 * delay,
      duration: 0.8,
    }
  })
}
type RingProps = {
  setShowNavProject: React.Dispatch<React.SetStateAction<boolean>>
  darkMode: boolean
}

const Ring: React.FC<RingProps> = ({setShowNavProject, darkMode}) => {
  const [ringType, setRingType] = useState<boolean>(true)

  const handleRingTypeOnClick = (): void => setRingType((prev: boolean) => !prev)
  const isWindowHp = window.innerWidth < 999

  const ringGlitch: GlitchHandle = useGlitch({
    playMode: isWindowHp ? "always" : "hover",
    createContainers: true,
    hideOverflow: true,
    glitchTimeSpan: {
      start: isWindowHp ? 0.3 : 0,
      end: 0.33,   
    },
    shake: false,
    slice: {
      count: 12, 
      velocity: 16, 
    },
    timing: {
      duration: isWindowHp ? 15000 : 1000,  
      iterations: Infinity, 
    },
  });

  

  return (
    <AnimatePresence mode="wait">
      {ringType ? <motion.div className="ringMainCont" key="ringTypeTrue">
        <div className="ringSubCont" style={{ "--quantity": techSkills.length } as React.CSSProperties}>
          {techSkills.map((obj, index) => (
            <div 
              key={index} 
              className="ringDiv" 
              style={{ "--position": index } as React.CSSProperties} 
              onClick={() => {
                handleRingTypeOnClick()
              }}>
              <motion.div
                className="ringContent"
                variants={ringItemAnimateVar}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={{ delay: index }}
              >
                <div ref={ringGlitch.ref}>
                  <img src={obj.icon} width="20px" height="20px" alt={`${obj.name} icon`} />
                  <p style={{color: darkMode ? "white" : "black"}}>{obj.name}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div> :
        <motion.div className="ringMainCont" key="ringTypeFalse">
          <div className="ringSubCont" style={{ "--quantity": otherSkills.length } as React.CSSProperties}>
            {otherSkills.map((obj, index) => (
              <div key={index} className="ringDiv" style={{ "--position": index } as React.CSSProperties} onClick={() => handleRingTypeOnClick()}>
                <motion.div
                  className="ringContent"
                  variants={ringItemAnimateVar}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={{ delay: index }}
                  onAnimationComplete={() => setShowNavProject(true)}
                >
                  <div ref={ringGlitch.ref}>
                    <img src={obj.icon} width="20px" height="20px" alt={`${obj.name} icon`} />
                    <p style={{color: darkMode ? "white" : "black"}}>{obj.name}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default Ring