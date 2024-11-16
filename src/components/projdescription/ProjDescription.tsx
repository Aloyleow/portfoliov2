import './ProjDescription.css'
import React from 'react'
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

const projDesAnimatVar: Variants = {
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

type ProjectDescriptionProps = {
  projectShown: ProjectDescrip
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({projectShown}) => {
  return (
    <div className='projecDescriptionMainDiv'>
    <AnimatePresence>
      <div className='projectTechName'>
        <motion.div
          key={`${projectShown.name}`}
          variants={projDesAnimatVar}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h4>{projectShown.name}</h4>
        </motion.div >
      </div>
    </AnimatePresence>
    <AnimatePresence>
      <div className='projectTechStack'>
        <div>
        <p>Frontend: </p>
        </div>
        <motion.div 
           className='projectTechStackMotion' 
           key={`${projectShown.name}`}
           variants={projDesAnimatVar}
           initial="initial"
           animate="animate"
           exit="exit"
        >
        {projectShown.front.map((item, index) => (
          
            <p key={index}>{item}</p>
         
        ))}
        </motion.div>
      </div >
    </AnimatePresence>
    <AnimatePresence>
      <div className='projectTechStack'>
        <div>
          <p>Backend: </p>
        </div>
        <motion.div 
           className='projectTechStackMotion' 
           key={`${projectShown.name}`}
           variants={projDesAnimatVar}
           initial="initial"
           animate="animate"
           exit="exit"
        >
        {projectShown.back.map((item, index) => (

            <p key={index}>{item}</p>
        ))}
        </motion.div>
      </div >
    </AnimatePresence>
    <AnimatePresence>
      <div className='projectTechStack'>
        <div>
          <p>Database: </p>
        </div>
        <motion.div 
           className='projectTechStackMotion' 
           key={`${projectShown.name}`}
           variants={projDesAnimatVar}
           initial="initial"
           animate="animate"
           exit="exit"
        >
        {projectShown.data.map((item, index) => (

            <p key={index}>{item}</p>
        ))}
        </motion.div>
      </div >
    </AnimatePresence>
    <AnimatePresence>
      <div className='projectTechStack'>
        <div>
        <p>DevOps: </p>
        </div>
        <motion.div 
           className='projectTechStackMotion' 
           key={`${projectShown.name}`}
           variants={projDesAnimatVar}
           initial="initial"
           animate="animate"
           exit="exit"
        >
        {projectShown.dev.map((item, index) => (

            <p key={index}>{item}</p>
        ))}
        </motion.div>
      </div >
    </AnimatePresence>
    <AnimatePresence>
      <div className='projectTechStack'>
        <div>
        <p>APIs: </p>
        </div>
        <motion.div 
           className='projectTechStackMotion' 
           key={`${projectShown.name}`}
           variants={projDesAnimatVar}
           initial="initial"
           animate="animate"
           exit="exit"
        >
        {projectShown.api.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
        </motion.div>
      </div >
    </AnimatePresence>
    <AnimatePresence>
      <div className='projectTechStackDes'>
        <motion.div 
           key={`${projectShown.name}`}
           variants={projDesAnimatVar}
           initial="initial"
           animate="animate"
           exit="exit"
        >
          <p>{projectShown.description}</p>
        </motion.div>
      </div >
    </AnimatePresence>
  </div>
  )
}

export default ProjectDescription