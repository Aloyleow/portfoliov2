import "./AboutPage.css"
import { aboutMe, techSkills } from "../../data/aboutme"
import { AnimatePresence, motion, Variants } from "motion/react"
import React, { useEffect, useState } from "react"
import { ReactTyped } from "react-typed";
import { GlitchHandle, useGlitch } from "react-powerglitch";

type AboutPageProps = {
  arrowAnimateVar: Variants
  pagesAnimatVar: Variants
  arrowGlitch: GlitchHandle
}

const AboutPage: React.FC<AboutPageProps> = ({ pagesAnimatVar, arrowAnimateVar, arrowGlitch }) => {
  const [startText, setStartText] = useState(false)
  const [isMediaHp, setIsMediaHp] = useState(false)
  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMediaHp(true)
    }
  }, [])

  const imageGlitch: GlitchHandle = useGlitch({
    playMode: "always",
    reateContainers: true,
    hideOverflow: true,
    glitchTimeSpan: {
      start: 0,
      end: 0.1,   
    },
    shake: false,
    slice: {
      count: 5, 
      velocity: 10, 
    },
    timing: {
      duration: 12000, 
      iterations: Infinity, 
    },
  });

  return (
    <div className="aboutPageDiv">
      <motion.div
        variants={pagesAnimatVar}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div>
          <div className="aboutPageFirstSectDiv">
            <div className="aboutPageFirstSectCont">
              <svg
                viewBox="0 0 851 271"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="aboutPageFirstSectSvg"
                onAnimationEnd={() => setStartText(true)}
              >
                <path className="aboutPageSvgPathBlack" d="M3.8 71V0.999995H20.6V27.4H43.2V0.999995H60V71H43.2V42.6H20.6V71H3.8ZM69.3203 71.4V58.3L77.9203 57.8V14.2L69.3203 13.7V0.599994L86.3203 1.4L103.32 0.599994V13.7L94.7203 14.2V57.8L103.32 58.3V71.4L86.3203 70.6L69.3203 71.4ZM114.389 71V55H130.189V71L120.089 85H109.689L119.789 71H114.389ZM165.023 71.4V58.3L173.623 57.8V14.2L165.023 13.7V0.599994L182.023 1.4L199.023 0.599994V13.7L190.423 14.2V57.8L199.023 58.3V71.4L182.023 70.6L165.023 71.4ZM230.569 71L245.969 0.999995H278.569L293.969 71H276.169L273.269 56H251.269L248.369 71H230.569ZM253.369 43.9H271.169L265.369 14.3H259.169L253.369 43.9ZM299.894 71V0.999995H320.094L334.094 30.8L348.094 0.999995H368.294V71H351.794V22.4L337.694 51.4H330.494L316.394 22.4V71H299.894ZM3.8 271V201H51.8V216.2H20.6V234.6H49.8V249.2H20.6V271H3.8ZM59.5617 258.8V201H76.3617V255.8H98.1617V201H114.962V258.8L102.762 271H71.7617L59.5617 258.8ZM124.601 271V201H141.401V257H160.201V243H175.001V271H124.601ZM182.511 271V201H199.311V257H218.111V243H232.911V271H182.511ZM241.121 271V256.4H278.321V243.3L240.121 240V212.6L251.721 201H294.121V215.6H256.921V227.7L295.121 231V259.4L283.521 271H241.121ZM319.786 271V215.6H301.586V201H354.786V215.6H336.586V271H319.786ZM352.053 271L367.453 201H400.053L415.453 271H397.653L394.753 256H372.753L369.853 271H352.053ZM374.853 243.9H392.653L386.853 214.3H380.653L374.853 243.9ZM420.688 258.8V213.2L432.888 201H468.088V216.3H438.088V255.7H469.088V271H432.888L420.688 258.8ZM476.554 271V201H493.354V228.2H503.354L516.854 201H535.454L518.054 234L536.954 271H518.154L504.154 242.8H493.354V271H476.554ZM584.76 256.4H605.36V215.6H584.76V256.4ZM567.96 271V201H609.96L622.16 213.2V258.8L609.96 271H567.96ZM631.437 271V201H680.637V215H648.237V228.6H675.637V242H648.237V257H681.637V271H631.437ZM701.145 271L685.745 201H704.045L714.345 255.8H720.545L730.945 201H749.145L733.745 271H701.145Z" fill="black" />
                <path className="aboutPageSvgPathBlue" d="M0.1 171L15.5 101H48.1L63.5 171H45.7L42.8 156H20.8L17.9 171H0.1ZM22.9 143.9H40.7L34.9 114.3H28.7L22.9 143.9ZM69.425 171V101H86.225V157H105.025V143H119.825V171H69.425ZM127.035 158.8V113.2L139.235 101H173.835L186.035 113.2V158.8L173.835 171H139.235L127.035 158.8ZM144.435 115.6V156.4H168.635V115.6H144.435ZM212.151 171V150H203.651L189.851 101H207.751L216.251 135.5H224.851L233.351 101H251.251L237.451 150H228.951V171H212.151ZM258.016 171V156.4H295.216V143.3L257.016 140V112.6L268.616 101H311.016V115.6H273.816V127.7L312.016 131V159.4L300.416 171H258.016ZM320.98 171.4V158.3L329.58 157.8V114.2L320.98 113.7V100.6L337.98 101.4L354.98 100.6V113.7L346.38 114.2V157.8L354.98 158.3V171.4L337.98 170.6L320.98 171.4ZM363.949 158.8V113.2L376.149 101H410.749L422.949 113.2V158.8L410.749 171H376.149L363.949 158.8ZM381.349 115.6V156.4H405.549V115.6H381.349ZM432.218 158.8V101H449.018V155.8H470.818V101H487.618V158.8L475.418 171H444.418L432.218 158.8ZM497.957 171V156.4H535.157V143.3L496.957 140V112.6L508.557 101H550.957V115.6H513.757V127.7L551.957 131V159.4L540.357 171H497.957ZM587.198 171V101H603.998V157H622.798V143H637.598V171H587.198ZM645.109 171V101H694.309V115H661.909V128.6H689.309V142H661.909V157H695.309V171H645.109ZM702.816 158.8V113.2L715.016 101H749.616L761.816 113.2V158.8L749.616 171H715.016L702.816 158.8ZM720.216 115.6V156.4H744.416V115.6H720.216ZM778.285 171L767.085 101H785.085L792.185 153.4H795.385L802.785 112H815.185L822.585 153.4H825.785L832.885 101H850.885L839.685 171H815.785L808.985 133.7L802.185 171H778.285Z" fill="#3176AF" />
              </svg>
              <div className="aboutPageFirstSectTyped">
                {startText && <ReactTyped strings={[`${aboutMe}`]} typeSpeed={15} cursorChar="█" onComplete={() => setShowArrow(true)} />}
              </div>
              <motion.div
                className="aboutPageFirstSectArrow"
                variants={arrowAnimateVar}
                initial="initial"
                animate="animate"
                custom={{ xLen: 0, yLen: -38 }}
              >
                {isMediaHp && showArrow &&
                  <div ref={arrowGlitch.ref}>
                    <img src="/arrowDown.svg" style={{ width: "3vh" }} alt="downarrow" />
                  </div>
                }
              </motion.div>
            </div>
          </div>
          <div className="aboutPageSecondSectDiv">
            <div className="aboutPageRingCont">
              <div ref={imageGlitch.ref}>
                <img src="/aboutme/myImage.png" alt="aloyleowimage" className="aboutPageRevImage" />
              </div>
              <div className="aboutPageRingContTwo" style={{ "--quantity": techSkills.length} as React.CSSProperties}>
                {techSkills.map((obj, index) => (
                  <div key={index} className="aboutPageRing" style={{ "--position": index} as React.CSSProperties}>
                    <div className="aboutPageRingContent">
                      <img src={obj.icon} width="20px" height="20px" alt={`${obj.name} icon`} />
                      <p style={{ color: "#3176AF" }}>{obj.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutPage