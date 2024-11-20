import { motion, Variants } from "motion/react"
import "./MainPage.css"
import { useGlitch, GlitchHandle } from 'react-powerglitch';
import React from "react";
import { useNavigate } from "react-router-dom";

type MainPageProps = {
  showMain: boolean;
  pagesAnimatVar: Variants;
  arrowAnimateVar: Variants;
  darkMode: boolean;
};

const MainPage: React.FC<MainPageProps> = ({ pagesAnimatVar, arrowAnimateVar, darkMode}) => {
  const navigate = useNavigate();
  
  const mainGlitch: GlitchHandle = useGlitch({
    playMode: "always",
    
    glitchTimeSpan: {
      start: 0,
      end: 0.4,   
    },
    shake: false,
    slice: {
      count: 12, 
      velocity: 16, 
    },
    timing: {
      duration: 8000, 
      iterations: Infinity, 
    },
  });

  const mainGlitch2: GlitchHandle = useGlitch({
    playMode: "always",
    
    glitchTimeSpan: {
      start: 0,
      end: 0.4,   
    },
    shake: false,
    slice: {
      count: 12, 
      velocity: 16, 
    },
    timing: {
      duration: 8000, 
      iterations: Infinity, 
    },
  });
  
  return (
    <div className="pagesLayoutDiv">
      <motion.div
        variants={pagesAnimatVar}
        initial="initial"
        animate="animate"
        exit="exit"

      >
        <div className="mainPageMainDiv" onClick={() => navigate("/about")}>
          <div ref={darkMode ? mainGlitch2.ref : mainGlitch.ref} className="mainPageImgDiv">
            <div className="mainPageImgInnerDiv">
              <img src={darkMode ? '/mainWhite.svg' : '/mainBlack.svg'} alt="MainPageImage" className="mainPageImg"/>
              <img src={darkMode ? '/mainWhite.svg' : '/mainBlack.svg'} alt="MainPageImage" className="mainPageImgRe"/>
            </div>
          </div>
          <motion.div
            className="mainPageArrowDiv"
            variants={arrowAnimateVar}
            initial="initial"
            animate="animate"
            custom={{ xLen: -50, yLen: 0 }}
          >
            <img src={darkMode ? '/arrowWhite.svg' : '/arrow.svg'} alt="rightarrow" style={{ width: "3vh" }} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default MainPage