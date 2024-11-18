import './Expreience.css'
import { experience } from '../../data/journey'

import { AnimatePresence, motion, Variants } from 'motion/react'
import React from 'react'

type ExperienceProps = {
  desAnimatVar: Variants
}

const Experience: React.FC<ExperienceProps> = ({desAnimatVar}) => {
  return (
    <motion.div>
      <AnimatePresence>
        <div className='expDisplayDiv'>
          {experience.map((obj, index) => (
            <motion.div
              key={index} 
              variants={desAnimatVar} 
              initial="initial"
              animate="animate"
              exit="exit"
              custom={{time: index, timeExit: index}}   
            >
              <motion.div className='expImgNameDiv'>
                <motion.div className='expImgDiv'>
                  <img src={obj.src} alt={obj.alt} className='expImg'/>
                </motion.div>
                <motion.div className='expNameDiv'>
                  <h5>{obj.name}</h5>
                </motion.div>
              </motion.div>
              <motion.div className='expAboutDiv'>
                <p>{obj.about}</p>
              </motion.div>
            </motion.div>
          ))}

        </div>
      </AnimatePresence>
    </motion.div>
  )
}

export default Experience