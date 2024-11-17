import React from 'react'
import './JourneyScreen.css'

import { AnimatePresence, motion, Variants } from 'motion/react'

type JourneyScreenProps = {
  certExp: boolean
  setCertExp: React.Dispatch<React.SetStateAction<boolean>>
}

const JourneyScreen: React.FC<JourneyScreenProps> = ({ certExp, setCertExp }) => {
  return (
    <motion.div
      className='journeyScreenMainDiv'
    >
      <div className='journeyScreenContDiv'>
        <div className='journeyScreenArrowDiv'>
          <img src='/arrow.svg' alt='arrowleft' className='arrImgLeft' />
        </div>
        <div>
          <AnimatePresence>
            <motion.div>
              {certExp ?
                <div>
                  <div>
                    <div className='journeyScreenImgDiv' style={{ "--urlcontent": `url(/journey/certs.svg)` } as React.CSSProperties}>
                      <img src='/journey/certs.svg' alt='certs' />
                    </div>
                  </div>
                </div>
                :
                <div>
                  <div>
                    <div className='journeyScreenImgDiv' style={{ "--urlcontent": `url(/journey/career.svg)` } as React.CSSProperties}>
                      <img src='/journey/career.svg' alt='career' />
                    </div>
                  </div>
                </div>
              }
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='journeyScreenArrowDiv'>
          <img src='/arrow.svg' alt='arrowright' className='arrImgRight' />
        </div>
      </div>
    </motion.div>
  )
}

export default JourneyScreen