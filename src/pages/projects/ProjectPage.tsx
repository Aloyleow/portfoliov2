import './ProjectPage.css'
import { projects } from '../../data/projects'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, Variants } from 'motion/react'
import ProjectDescription from '../../components/projdescription/ProjDescription';
import ProjectScreen from '../../components/projscreen/ProjectScreen';
import { useNavigate } from 'react-router-dom';
import { GlitchHandle } from 'react-powerglitch';

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

type ProjectPageProps = {
  pagesAnimatVar: Variants
  arrowAnimateVar: Variants
  arrowGlitch: GlitchHandle
};

const ProjectPage: React.FC<ProjectPageProps> = ({pagesAnimatVar, arrowAnimateVar, arrowGlitch}) => {
  const navigate = useNavigate()
  const [projectNumber, setProjectNumber] = useState<number>(0)
  const [projectShown, setprojectShown] = useState<ProjectDescrip>({
    index: projects[0].index,
    name: projects[0].name,
    front: projects[0].techStack.FrontEnd,
    back: projects[0].techStack.BackEnd,
    data: projects[0].techStack.DataBase,
    dev: projects[0].techStack.DevOps,
    api: projects[0].techStack.APIs,
    description: projects[0].about,
    image: projects[0].image
  });
  const [showProjects, setShowProjects] = useState<boolean>(false)
  const [showNav, setShowNav] = useState<boolean>(false)

  const handleProjectShown = (index: number) => {
    setprojectShown({
      index: projects[index].index,
      name: projects[index].name,
      front: projects[index].techStack.FrontEnd,
      back: projects[index].techStack.BackEnd,
      data: projects[index].techStack.DataBase,
      dev: projects[index].techStack.DevOps,
      api: projects[index].techStack.APIs,
      description: projects[index].about,
      image: projects[index].image
    })
  }

  
  const handleLeftArrow = () => {
    if (projectNumber === 4) {setShowNav(true)}
    if (projectNumber === 0) {
      setProjectNumber(projects.length - 1)
      handleProjectShown(projects.length - 1)
    } else {
      setProjectNumber(projectNumber - 1)
      handleProjectShown(projectNumber - 1)
    }
    
  }

  const handleRightArrow = () => {
    if (projectNumber === 4) {setShowNav(true)}
    if (projectNumber === projects.length - 1) {
      setProjectNumber(0)
      handleProjectShown(0)
    } else {
      setProjectNumber(projectNumber + 1)
      handleProjectShown(projectNumber + 1)
    }
  }

 

  return (
    <div className="pagesLayoutDiv">
      <motion.div
        variants={pagesAnimatVar}
        animate="animate"
        initial="initial"
        exit="exit" 
        className="projectMainDiv"
      >
        <div className='projectDescripDiv'>
          <div className='projectDescripfirstSect pageHeading'>
            <svg className='projectSvg' viewBox="0 0 480 70" fill="none" xmlns="http://www.w3.org/2000/svg" onAnimationEnd={() => setShowProjects(true)}>
              <path d="M14.4 43.4H40V11.6H14.4V43.4ZM54.2 10.8V44.2L43.4 55H14.4V70H0.2V-4.76837e-06H43.4L54.2 10.8ZM76.8023 37.2H103.802V11.6H76.8023V37.2ZM118.002 10.8V37.7L110.402 45.3L122.502 70H106.802L97.1023 48.8H76.8023V70H62.6023V-4.76837e-06H107.202L118.002 10.8ZM127.832 59.2V10.8L138.632 -4.76837e-06H175.032L185.832 10.8V59.2L175.032 70H138.632L127.832 59.2ZM142.432 12.4V57.6H171.232V12.4H142.432ZM193.801 58.6V38H208.001V57.2H231.601V12.4H196.601V-4.76837e-06H245.801V58.6L234.401 70H205.201L193.801 58.6ZM255.962 70V-4.76837e-06H304.762V12H270.162V28.4H299.762V40H270.162V58H305.762V70H255.962ZM313.77 59.2V10.8L324.57 -4.76837e-06H360.37V12.9H328.37V57.1H361.37V70H324.57L313.77 59.2ZM385.441 70V12.4H366.141V-4.76837e-06H418.941V12.4H399.641V70H385.441ZM426.977 70V57.6H465.777V41.4L425.977 38.1V10.4L436.377 -4.76837e-06H478.977V12.4H440.177V27.6L479.977 30.9V59.6L469.577 70H426.977Z" fill="black" />
            </svg>
          </div>
          {showProjects && <ProjectDescription projectShown={projectShown} projDesAnimatVar={projDesAnimatVar}/>}
        </div>
        <div className='projectScreenhpHoldingDiv'>
       {showProjects && <ProjectScreen 
          projectShown={projectShown} 
          setprojectShown={setprojectShown} 
          handleRightArrow={handleRightArrow}
          handleLeftArrow={handleLeftArrow}
          projDesAnimatVar={projDesAnimatVar}
        />}
        </div>
       {showNav && <div className="navNextDiv"> 
            <div className="navNextImgDiv" onClick={() => navigate("/journey")}>
              <motion.div
                variants={arrowAnimateVar}
                initial="initial"
                animate="animate"
                transition={{ delay: 10 }}
                custom={{ xLen: -50, yLen: 0 }}          
              >
                <img src="/arrow.svg" alt="arrowright" className="navNextImg" />
              </motion.div>
              <div ref={arrowGlitch.ref}>
                <h5>JOURNEY</h5>
              </div>
            </div>
        </div>}
      </motion.div>
    </div>
  )
}

export default ProjectPage


