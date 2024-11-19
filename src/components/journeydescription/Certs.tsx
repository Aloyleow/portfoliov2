import './Certs.css'
import { certs } from '../../data/journey'

import { motion, Variants } from 'motion/react'
import React from 'react'

type CertificationProps = {
  desAnimatVar: Variants
}

const Certification: React.FC<CertificationProps> = ({desAnimatVar}) => {
  return (
        <div className='certDisplayDiv'>
          {certs.map((obj, index) => (
            <motion.div
            key={obj.name}
            variants={desAnimatVar}
            animate="animate"
            initial="initial"
            exit="exit"
            custom={{time: index, timeExit: index}}  
          >
            <div className='certImgNameDiv'>
              <div className='certImgDiv'>
                <img src={obj.image} alt={obj.name} className='certImg'/>
              </div>
              <div className='certNameDiv'>
                <h5>{obj.name}</h5>
              </div>
            </div>
            <div className='certSecTypeDiv'>
            <div className='certSectorDiv'>
              <h5>{obj.sector}</h5>
            </div>
            <div className='certTypeDiv'>
              <h5>{obj.type}</h5>
            </div>
            </div>
          </motion.div>
          ))}
        </div>
  )
}

export default Certification