import './Certs.css'
import { certs } from '../../data/journey'

import { AnimatePresence, motion, Variants } from 'motion/react'
import React from 'react'

type CertificationProps = {
  desAnimatVar: Variants
}

const Certification: React.FC<CertificationProps> = ({desAnimatVar}) => {
  return (
    <motion.div>
      <AnimatePresence>
        <div className='certDisplayDiv'>
          {certs.map((obj, index) => (
            <motion.div
            key={index}
            variants={desAnimatVar}
            animate="animate"
            initial="initial"
            exit="exit"
            custom={{time: index, timeExit: index}}  
          >
            <motion.div className='certImgNameDiv'>
              <motion.div className='certImgDiv'>
                <img src={obj.image} alt={obj.name} className='certImg'/>
              </motion.div>
              <motion.div className='certNameDiv'>
                <h5>{obj.name}</h5>
              </motion.div>
            </motion.div>
            <motion.div className='certSecTypeDiv'>
            <motion.div className='certSectorDiv'>
              <h5>{obj.sector}</h5>
            </motion.div>
            <motion.div className='certTypeDiv'>
              <h5>{obj.type}</h5>
            </motion.div>
            </motion.div>
          </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </motion.div>
  )
}

export default Certification