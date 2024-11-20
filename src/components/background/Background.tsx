import React, { useEffect, useState } from 'react';
import './Background.css'
import { useGlitch, GlitchHandle } from 'react-powerglitch';


type BackgroundProps = {
  darkMode: boolean;
};

const Background: React.FC<BackgroundProps> = ({ darkMode }) => {

  const sparkGlitch: GlitchHandle = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: true,
    glitchTimeSpan: {
      start: 0.0,
      end: 0.5,
    },
    shake: {
      velocity: 16
    },
    slice: {
      count: 20,
      velocity: 16,
    },
    timing: {
      duration: 20000,
      iterations: Infinity,
    },
  });

  return (
    <div className="backgroundMainDiv">

      <div className='sparks' style={{ left: "50%", top: "50%" }}>
        <div className='sparkGlitch' ref={sparkGlitch.ref}>
        </div>
      </div>
      <div className='sparks' style={{ left: "40%", top: "50%" }}>
        <div className='sparkGlitch' ref={sparkGlitch.ref}>

        </div>
      </div>
      <div className='sparks' style={{ left: "60%", top: "50%" }}>
        <div className='sparkGlitch' ref={sparkGlitch.ref}>

        </div>
      </div>
      <div className='sparks' style={{ left: "50%", top: "40%" }}>
        <div className='sparkGlitch' ref={sparkGlitch.ref}>

        </div>
      </div>
      <div className='sparks' style={{ left: "50%", top: "60%" }}>
        <div className='sparkGlitch' ref={sparkGlitch.ref}>

        </div>
      </div>
      <div className='sparks' style={{ left: "40%", top: "60%" }}>
        <div className='sparkGlitch' ref={sparkGlitch.ref}>

        </div>
      </div>
      <div className='sparks' style={{ left: "60%", top: "60%" }}>
        <div className='sparkGlitch' ref={sparkGlitch.ref}>

        </div>
      </div>
      <div className='sparks' style={{ left: "40%", top: "40%" }}>
        <div className='sparkGlitch' ref={sparkGlitch.ref}>

        </div>
      </div>
      <div className='sparks' style={{ left: "60%", top: "40%" }}>
        <div className='sparkGlitch' ref={sparkGlitch.ref}>

        </div>
      </div>
    </div>
  )
}

export default Background