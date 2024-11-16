import './ProjectScreen.css'
import React, { useState } from 'react'
import { AnimatePresence, motion, Variants } from 'motion/react'


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
  handleArrowDirection: (direction: string) => void;
}

const ProjectScreen: React.FC<ProjectScreenProps> = ({projectShown, handleArrowDirection}) =>{
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
  return (
    
      <div className='projectScreenMainDiv'  >
        <div className='projectScreenArrDiv'>
          <div 
            className='arrImgDiv' 
            onClick={() => {
              handleArrowDirection("left")
              handleScreenAnimationLeft()
            }}
          >
            <img src='/arrow.svg' alt='arrowleft' className='arrImgLeft' />
          </div>
          <div 
            className='arrImgDiv' 
            onClick={() => {
              handleArrowDirection("right")
              handleScreenAnimationRight()
            }}
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
      </div>
  )
}

export default ProjectScreen