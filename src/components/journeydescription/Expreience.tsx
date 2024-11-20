import './Expreience.css'
import { experience } from '../../data/journey'

import { motion, Variants } from 'motion/react'
import React from 'react'

type ExperienceProps = {
  desAnimatVar: Variants;
  darkMode: boolean;
};

const Experience: React.FC<ExperienceProps> = ({desAnimatVar, darkMode}) => {
  return (
    
        <div className='expDisplayDiv'>
          {experience.map((obj, index) => (
            <motion.div
              key={obj.name} 
              variants={desAnimatVar} 
              initial="initial"
              animate="animate"
              
              custom={{time: index, timeExit: index}}   
            >
              <div className='expImgNameDiv'>
                <div className='expImgDiv'>
                  <img src={obj.src} alt={obj.alt} className='expImg'/>
                </div>
                <div className='expNameDiv'>
                  <h5 style={{color: darkMode ? "white" : "black"}}>{obj.name}</h5>
                </div>
              </div>
              <div className='expAboutDiv'>
                <p style={{color: darkMode ? "white" : "black"}}>{obj.about}</p>
              </div>
            </motion.div>
          ))}

        </div>
  )
}

export default Experience