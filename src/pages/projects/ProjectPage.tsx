import './ProjectPage.css'
import { projects } from '../../data/projects'

import React, { useState } from 'react'
import { motion, Variants } from 'motion/react'
import ProjectDescription from '../../components/projdescription/ProjDescription';
import ProjectScreen from '../../components/projscreen/ProjectScreen';
import { useNavigate } from 'react-router-dom';
import { GlitchHandle } from 'react-powerglitch';

type ProjectDescrip = {
  index: string;
  name: string;
  front: string[];
  back: string[];
  data: string[];
  dev: string[];
  api: string[];
  description: string;
  image: string;
};

type ProjectPageProps = {
  pagesAnimatVar: Variants;
  arrowAnimateVar: Variants;
  arrowGlitch: GlitchHandle;
  fadeTransitionAnimatVar: Variants;
  arrowGlitchDark: GlitchHandle;
  darkMode: boolean;
};

const ProjectPage: React.FC<ProjectPageProps> = ({ pagesAnimatVar, arrowAnimateVar, arrowGlitch, fadeTransitionAnimatVar, arrowGlitchDark, darkMode }) => {
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
  };

  const handleLeftArrow = () => {
    if (projectNumber === 3) { setShowNav(true) }
    if (projectNumber === 0) {
      setProjectNumber(projects.length - 1)
      handleProjectShown(projects.length - 1)
    } else {
      setProjectNumber(projectNumber - 1)
      handleProjectShown(projectNumber - 1)
    }

  };

  const handleRightArrow = () => {
    if (projectNumber === 3) { setShowNav(true) }
    if (projectNumber === projects.length - 1) {
      setProjectNumber(0)
      handleProjectShown(0)
    } else {
      setProjectNumber(projectNumber + 1)
      handleProjectShown(projectNumber + 1)
    }
  };



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
          <div className='projectDescripfirstSect pageHeading' style={{ "--fillColor": darkMode ? "white" : "black" } as React.CSSProperties}>
            {!darkMode && 
            <svg 
              className='projectSvg' 
              viewBox="0 0 309 50" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              onAnimationEnd={() => setShowProjects(true)}
            >
              <path d="M11.2303 26.824H24.9263V8.776H11.2303V26.824ZM35.6783 8.008V27.592L27.8703 35.4H11.2303V45H0.47825V0.199997H27.8703L35.6783 8.008ZM51.2928 23.752H66.0128V8.776H51.2928V23.752ZM76.7648 8.008V24.2L71.5808 29.384L79.3248 45H67.2928L61.5968 32.328H51.2928V45H40.5408V0.199997H68.9568L76.7648 8.008ZM82.3488 37.192V8.008L90.1568 0.199997H112.301L120.109 8.008V37.192L112.301 45H90.1568L82.3488 37.192ZM93.4848 9.544V35.656H108.973V9.544H93.4848ZM124.569 36.936V23.88H135.321V35.272H147.737V9.544H126.617V0.199997H158.489V36.936L150.425 45H132.633L124.569 36.936ZM164.416 45V0.199997H195.904V9.16H175.168V17.864H192.704V26.44H175.168V36.04H196.544V45H164.416ZM201.349 37.192V8.008L209.157 0.199997H231.685V9.992H212.485V35.208H232.325V45H209.157L201.349 37.192ZM246.959 45V9.544H235.311V0.199997H269.359V9.544H257.711V45H246.959ZM274.176 45V35.656H297.984V27.272L273.536 25.16V7.624L280.96 0.199997H308.096V9.544H284.288V17.288L308.736 19.4V37.576L301.312 45H274.176Z" fill="black" />
            </svg>}
            {darkMode && 
            <svg 
              className='projectSvg' 
              viewBox="0 0 309 50" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              onAnimationEnd={() => setShowProjects(true)}    
            >
              <path d="M11.2303 26.824H24.9263V8.776H11.2303V26.824ZM35.6783 8.008V27.592L27.8703 35.4H11.2303V45H0.47825V0.199997H27.8703L35.6783 8.008ZM51.2928 23.752H66.0128V8.776H51.2928V23.752ZM76.7648 8.008V24.2L71.5808 29.384L79.3248 45H67.2928L61.5968 32.328H51.2928V45H40.5408V0.199997H68.9568L76.7648 8.008ZM82.3488 37.192V8.008L90.1568 0.199997H112.301L120.109 8.008V37.192L112.301 45H90.1568L82.3488 37.192ZM93.4848 9.544V35.656H108.973V9.544H93.4848ZM124.569 36.936V23.88H135.321V35.272H147.737V9.544H126.617V0.199997H158.489V36.936L150.425 45H132.633L124.569 36.936ZM164.416 45V0.199997H195.904V9.16H175.168V17.864H192.704V26.44H175.168V36.04H196.544V45H164.416ZM201.349 37.192V8.008L209.157 0.199997H231.685V9.992H212.485V35.208H232.325V45H209.157L201.349 37.192ZM246.959 45V9.544H235.311V0.199997H269.359V9.544H257.711V45H246.959ZM274.176 45V35.656H297.984V27.272L273.536 25.16V7.624L280.96 0.199997H308.096V9.544H284.288V17.288L308.736 19.4V37.576L301.312 45H274.176Z" fill="white" />
            </svg>}
          </div>
          {showProjects && 
          <ProjectDescription 
            projectShown={projectShown} 
            fadeTransitionAnimatVar={fadeTransitionAnimatVar} 
            darkMode={darkMode}
          />}
        </div>
        <div className='projectScreenhpHoldingDiv'>
          {showProjects && 
          <ProjectScreen
            projectShown={projectShown}
            setprojectShown={setprojectShown}
            handleRightArrow={handleRightArrow}
            handleLeftArrow={handleLeftArrow}
            fadeTransitionAnimatVar={fadeTransitionAnimatVar}
            darkMode={darkMode}
          />}
        </div>
        <div className='projectNavHolder'>
          {showNav && <div className="projectNavDiv">
            <div className="navNextImgDiv" onClick={() => navigate("/journey")}>
              <motion.div
                variants={arrowAnimateVar}
                initial="initial"
                animate="animate"
                transition={{ delay: 10 }}
                custom={{ xLen: -50, yLen: 0 }}
              >
                <img src={darkMode ? '/arrowWhite.svg' : '/arrow.svg'} alt="arrowright" className="navNextImg" />
              </motion.div>
              <div ref={darkMode ? arrowGlitchDark.ref : arrowGlitch.ref}>
                <h5 style={{color: darkMode ? "white" : "black"}}>JOURNEY</h5>
              </div>
            </div>
          </div>}
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectPage


