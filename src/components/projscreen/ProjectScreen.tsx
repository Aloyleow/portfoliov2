import './ProjectScreen.css'
import React, { useState } from 'react'
import { AnimatePresence, motion, Variants } from 'motion/react'
import { useGlitch, GlitchHandle } from 'react-powerglitch';


type ProjectDescrip = {
  index: string
  name: string
  front: string[]
  back: string[]
  data: string[]
  dev: string[]
  api: string[]
  description: string
  image: string
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

type ProjectScreenProps = {
  projectShown: ProjectDescrip
  setprojectShown: React.Dispatch<React.SetStateAction<ProjectDescrip>>
  handleLeftArrow: () => void
  handleRightArrow: () => void
  projDesAnimatVar: Variants
}

const ProjectScreen: React.FC<ProjectScreenProps> = ({projectShown, handleLeftArrow, handleRightArrow, projDesAnimatVar}) =>{
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

  const screenGlitch: GlitchHandle = useGlitch({
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

  return (
      <motion.div 
        className='projectScreenMainDiv'
        animate="animate"
        variants={projDesAnimatVar}
        initial="initial"
        exit="exit"     
      >
        <div className='projectScreenArrDiv'>
          <div 
            className='arrImgDiv' 
            onClick={() => {
              handleLeftArrow()
              handleScreenAnimationLeft()
            }}
            ref={screenGlitch.ref}
          >
            <img src='/arrow.svg' alt='arrowleft' className='arrImgLeft' />
          </div>
          <div 
            className='arrImgDiv' 
            onClick={() => {
              handleRightArrow()
              handleScreenAnimationRight()
            }}
            ref={screenGlitch.ref}
          >
            <img src='/arrow.svg' alt='arrowright' className='arrImgRight' />
          </div>
        </div>
        <AnimatePresence mode='wait'>
        <motion.div
          key={projectShown.index} 
          className='projectPageScreenInnDiv'
          variants={screenAnimatVar}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={screenAnimateDirection}
        >
          <div className='screenImgDiv' style={{ "--urlcontent": `url(${projectShown.image})` } as React.CSSProperties}>
            <img src={projectShown.image} alt={projectShown.name} />
          </div>
        </motion.div>
        </AnimatePresence>
      </motion.div>
  )
}

export default ProjectScreen