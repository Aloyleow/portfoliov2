import './JourneyPage.css'

import { motion, Variants } from 'motion/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlitchHandle } from 'react-powerglitch'

import Experience from '../../components/journeydescription/Expreience'
import Certification from '../../components/journeydescription/Certs'
import JourneyScreen from '../../components/journeyscreen/JourneyScreen'

const desAnimatVar: Variants = {
  initial: {
    opacity: 0,
  },
  animate: ({time}: {time: number}) => ({
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: time * 0.5,
    },
  }),
  exit: ({timeExit}: {timeExit: number}) => ({
    opacity: 0,
    transition: {
      delay: timeExit * 0.2, 
      duration: 2,
    }
  })
};

type JourneyPageProps = {
  pagesAnimatVar: Variants
  arrowAnimateVar: Variants
  arrowGlitch: GlitchHandle
}

const JourneyPage: React.FC<JourneyPageProps> = ({pagesAnimatVar, arrowAnimateVar, arrowGlitch}) => {
  const [certExp, setCertExp] = useState<boolean>(false)
  const [showContent, setShowContent] = useState<boolean>(false)
  const [showNav, setShowNav] = useState<boolean>(false)

  const navigate = useNavigate()

  return (
    <div className="pagesLayoutDiv">
      <motion.div
        key="journeyPagemotiondiv"
        variants={pagesAnimatVar}
        animate="animate"
        initial="initial"
        exit="exit" 
        className='journeyMainDiv'  
      >
        <div className='journeyDescripDiv'>
          <div className='journeyTagDiv pageHeading'>
            <svg viewBox="0 0 480 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='journeySvg' onAnimationEnd={() => setShowContent(true)}>
              <path d="M1.19209e-07 58.6V38H14.2V57.2H37.8V12.4H2.8V-4.76837e-06H52V58.6L40.6 70H11.4L1.19209e-07 58.6ZM61.9609 59.2V10.8L72.7609 -4.76837e-06H109.161L119.961 10.8V59.2L109.161 70H72.7609L61.9609 59.2ZM76.5609 12.4V57.6H105.361V12.4H76.5609ZM130.13 59.2V-4.76837e-06H144.33V57.2H170.53V-4.76837e-06H184.73V59.2L173.93 70H140.93L130.13 59.2ZM209.369 37.2H236.369V11.6H209.369V37.2ZM250.569 10.8V37.7L242.969 45.3L255.069 70H239.369L229.669 48.8H209.369V70H195.169V-4.76837e-06H239.769L250.569 10.8ZM260.598 70V-4.76837e-06H275.498L304.798 49.5V-4.76837e-06H318.198V70H303.298L273.998 20.5V70H260.598ZM328.567 70V-4.76837e-06H377.367V12H342.767V28.4H372.367V40H342.767V58H378.367V70H328.567ZM406.275 70V49H397.675L383.075 -4.76837e-06H398.175L408.175 36.7H418.575L428.575 -4.76837e-06H443.675L429.075 49H420.475V70H406.275Z" fill="black" />
            </svg>
          </div>
          <div className='expCertHolder'>
            
           {showContent && (certExp ? 
            <Certification desAnimatVar={desAnimatVar}/> :
            <Experience desAnimatVar={desAnimatVar}/>)} 
 
          </div>
        </div>
        <div className='journeyScreenHolder'>
          {showContent && <JourneyScreen certExp={certExp} setCertExp={setCertExp} setShowNav={setShowNav}/>}
        </div>
        <div className='journeyNavHolder'>
        {showNav && <div className="navJourneyDiv"> 
            <div className="navNextImgDiv" onClick={() => navigate("/contact")}>
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
                <h5>CONTACT ME</h5>
              </div>
            </div>
        </div>}
        </div>
      </motion.div>
    </div>
  )
}

export default JourneyPage

