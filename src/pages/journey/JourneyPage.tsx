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
  animate: ({ time }: { time: number }) => ({
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: time * 0.5,
    },
  }),
  exit: ({ timeExit }: { timeExit: number }) => ({
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
  darkMode: boolean
  arrowGlitchDark: GlitchHandle
}

const JourneyPage: React.FC<JourneyPageProps> = ({ pagesAnimatVar, arrowAnimateVar, arrowGlitch, darkMode, arrowGlitchDark }) => {
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
          <div className='journeyTagDiv pageHeading' style={{ "--fillColor": darkMode ? "white" : "black" } as React.CSSProperties}>
            {!darkMode && <svg viewBox="0 0 285 45" fill="none" xmlns="http://www.w3.org/2000/svg" className='journeySvg' onAnimationEnd={() => setShowContent(true)}>
              <path d="M0.06875 36.936V23.88H10.8208V35.272H23.2368V9.544H2.11675V0.199997H33.9888V36.936L25.9248 45H8.13275L0.06875 36.936ZM39.7238 37.192V8.008L47.5318 0.199997H69.6758L77.4838 8.008V37.192L69.6758 45H47.5318L39.7238 37.192ZM50.8598 9.544V35.656H66.3478V9.544H50.8598ZM83.4158 37.192V0.199997H94.1678V35.272H108.12V0.199997H118.872V37.192L111.064 45H91.2238L83.4158 37.192ZM135.793 23.752H150.513V8.776H135.793V23.752ZM161.265 8.008V24.2L156.081 29.384L163.825 45H151.793L146.097 32.328H135.793V45H125.041V0.199997H153.457L161.265 8.008ZM167.041 45V0.199997H177.217L194.433 28.68V0.199997H204.417V45H194.241L177.025 16.52V45H167.041ZM210.541 45V0.199997H242.029V9.16H221.293V17.864H238.829V26.44H221.293V36.04H242.669V45H210.541ZM259.698 45V31.56H254.258L245.426 0.199997H256.882L262.322 22.28H267.826L273.266 0.199997H284.722L275.89 31.56H270.45V45H259.698Z" fill="black" />
            </svg>}
            {darkMode && <svg viewBox="0 0 286 45" fill="none" xmlns="http://www.w3.org/2000/svg" className='journeySvg' onAnimationEnd={() => setShowContent(true)}>
              <path d="M0.56875 36.936V23.88H11.3208V35.272H23.7368V9.544H2.61675V0.199997H34.4888V36.936L26.4248 45H8.63275L0.56875 36.936ZM40.2238 37.192V8.008L48.0318 0.199997H70.1758L77.9838 8.008V37.192L70.1758 45H48.0318L40.2238 37.192ZM51.3598 9.544V35.656H66.8478V9.544H51.3598ZM83.9158 37.192V0.199997H94.6678V35.272H108.62V0.199997H119.372V37.192L111.564 45H91.7238L83.9158 37.192ZM136.293 23.752H151.013V8.776H136.293V23.752ZM161.765 8.008V24.2L156.581 29.384L164.325 45H152.293L146.597 32.328H136.293V45H125.541V0.199997H153.957L161.765 8.008ZM167.541 45V0.199997H177.717L194.933 28.68V0.199997H204.917V45H194.741L177.525 16.52V45H167.541ZM211.041 45V0.199997H242.529V9.16H221.793V17.864H239.329V26.44H221.793V36.04H243.169V45H211.041ZM260.198 45V31.56H254.758L245.926 0.199997H257.382L262.822 22.28H268.326L273.766 0.199997H285.222L276.39 31.56H270.95V45H260.198Z" fill="white" />
            </svg>
            }
          </div>
          <div className='expCertHolder'>

            {showContent && (certExp ?
              <Certification desAnimatVar={desAnimatVar} darkMode={darkMode}/> :
              <Experience desAnimatVar={desAnimatVar} darkMode={darkMode}/>)}

          </div>
        </div>
        <div className='journeyScreenHolder'>
          {showContent && <JourneyScreen certExp={certExp} setCertExp={setCertExp} setShowNav={setShowNav} darkMode={darkMode}/>}
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
                <img src={darkMode ? '/arrowWhite.svg' : '/arrow.svg'} alt="arrowright" className="navNextImg" />
              </motion.div>
              <div ref={darkMode ? arrowGlitchDark.ref : arrowGlitch.ref}>
                <h5 style={{color: darkMode ? "white" : "black"}}>CONTACT ME</h5>
              </div>
            </div>
          </div>}
        </div>
      </motion.div>
    </div>
  )
}

export default JourneyPage

