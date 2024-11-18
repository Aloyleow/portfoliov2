import React from 'react'
import './JourneyScreen.css'

import { AnimatePresence, motion, Variants } from 'motion/react'
import { useState } from 'react';
import { useGlitch, GlitchHandle } from 'react-powerglitch';

const jourScreenAnimatVar: Variants = {
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

type ScreenAnimateDirection = {
  xDirIni: number
  xDirExit: number
}

const screenAnimatVar: Variants = {
  initial: ({ xDirIni }: {xDirIni: number}) => ({
    opacity: 0,
    x: xDirIni
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1
    },
  },
  exit: ({xDirExit}: {xDirExit :number}) =>({
    opacity: 0,
    x: xDirExit,
  })
};

type JourneyScreenProps = {
  certExp: boolean
  setCertExp: React.Dispatch<React.SetStateAction<boolean>>
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>
}

const JourneyScreen: React.FC<JourneyScreenProps> = ({ certExp, setCertExp, setShowNav }) => {
  const [screenAnimateDirection, setscreenAnimateDirection] = useState<ScreenAnimateDirection>({
    xDirIni: 0,
    xDirExit: 0
  })

  const handleScreenAnimationLeft = () => {
    setscreenAnimateDirection({
      xDirIni: 50,
      xDirExit: 0
    }) 
  }
  const handleScreenAnimationRight = () => {
    setscreenAnimateDirection({
      xDirIni: -50,
      xDirExit: 0
    }) 
  }

  const scrArrowGlitch: GlitchHandle = useGlitch({
    playMode:  "click",
    createContainers: true,
    hideOverflow: true,
    glitchTimeSpan: {
      start: 0,
      end: 0.45,   
    },
    shake: {
      velocity: 5
    },
    slice: {
      count: 6, 
      velocity: 16, 
    },
    timing: {
      duration: 1000, 
      iterations: 1,
      easing: "ease-in-out" 
    },
  });

  const screenGlitch: GlitchHandle = useGlitch({
    playMode:  "always",
    createContainers: true,
    hideOverflow: false,
    glitchTimeSpan: {
      start: 0,
      end: 0.2,   
    },
    shake: {
      velocity: 5
    },
    slice: {
      count: 6, 
      velocity: 16, 
    },
    timing: {
      duration: 10000, 
      iterations: Infinity, 
    },
  });

  


  return (
    <motion.div
      className='journeyScreenMainDiv'
      variants={jourScreenAnimatVar}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <div className='journeyScreenContDiv'>
        <div
          className='journeyScreenArrowDiv'
          onClick={() => {
            setCertExp((prev) => !prev)
            setShowNav(true)
            handleScreenAnimationLeft()
          }}>
          <div ref={scrArrowGlitch.ref}>
            <img src='/arrow.svg' alt='arrowleft' className='arrImgLeft' />
          </div>
        </div>
        <div>
          <AnimatePresence mode='wait'>

            {certExp ?
              <motion.div
                key="certs.png"
                variants={screenAnimatVar}
                animate="animate"
                initial="initial"
                exit="exit"
                custom={screenAnimateDirection}
              >
                <div ref={screenGlitch.ref}>
                  <div className='journeyScreenImgDiv' style={{ "--urlcontent": `url(/journey/certs.png)` } as React.CSSProperties}>
                    <img src='/journey/certs.png' alt='certs' className='journeyScreenImg'/>
                  </div>
                </div>
              </motion.div>
              :
              <motion.div
                key="career.png"
                variants={screenAnimatVar}
                animate="animate"
                initial="initial"
                exit="exit"
                custom={screenAnimateDirection}
              >
                <div ref={screenGlitch.ref}>
                  <div className='journeyScreenImgDiv' style={{ "--urlcontent": `url(/journey/career.png)` } as React.CSSProperties}>
                    <img src='/journey/career.png' alt='career' className='journeyScreenImg' />
                  </div>
                </div>
              </motion.div>
            }

          </AnimatePresence>
        </div>
        <div
          className='journeyScreenArrowDiv'
          onClick={() => {
            setCertExp((prev) => !prev)
            setShowNav(true)
            handleScreenAnimationRight()
          }}
        >
          <div ref={scrArrowGlitch.ref}>
            <img src='/arrow.svg' alt='arrowright' className='arrImgRight' />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default JourneyScreen