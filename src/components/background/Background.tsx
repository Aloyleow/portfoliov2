import './Background.css'
import { useGlitch, GlitchHandle } from 'react-powerglitch';



const Background = () => {

  const sparkGlitch: GlitchHandle = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: true,
    glitchTimeSpan: {
      start: 0.0,
      end: 0.5,   
    },
    shake: false,
    slice: {
      count: 12, 
      velocity: 16, 
    },
    timing: {
      duration: 10000, 
      iterations: Infinity, 
      easing: "ease-in-out" 
    },
  });

  return (
    <div className="backgroundMainDiv">
      <div className="sparks" style={{left: "50%", top: "50%"}}>
        <div ref={sparkGlitch.ref} className='sparkGlitch'>

        </div>
      </div>
      <div className="sparks" style={{left: "20%", top: "50%"}}>
        <div ref={sparkGlitch.ref} className='sparkGlitch'>

        </div>
      </div>
      <div className="sparks" style={{left: "70%", top: "50%"}}>
        <div ref={sparkGlitch.ref} className='sparkGlitch'>

        </div>
      </div>
      <div className="sparks" style={{left: "30%", top: "50%"}}>
        <div ref={sparkGlitch.ref} className='sparkGlitch'>

        </div>
      </div>
      <div className="sparks" style={{left: "60%", top: "50%"}}>
        <div ref={sparkGlitch.ref} className='sparkGlitch'>

        </div>
      </div>
      <div className="sparks" style={{left: "50%", top: "50%"}}>
        <div ref={sparkGlitch.ref} className='sparkGlitch'>

        </div>
      </div>
      <div className="sparks" style={{left: "30%", top: "50%"}}>
        <div ref={sparkGlitch.ref} className='sparkGlitch'>

        </div>
      </div>
      <div className="sparks" style={{left: "40%", top: "50%"}}>
        <div ref={sparkGlitch.ref} className='sparkGlitch'>

        </div>
      </div>
    </div>
  )
}

export default Background