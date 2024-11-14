import NavBarRight from "../../components/navbarright/NavBarRight"
import NavBarTop from "../../components/navbartop/NavBarTop"
import "./NavBar.css"
import React, {useState} from "react"
import { Variants } from "motion/react";

type NavBarProps = {
  pagesAnimatVar: Variants
}

const consoleAnimateVar: Variants = {
  initial : (num: number = 50) => ({
    opacity: 0,
    x: num,
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  exit: (num: number = 50) => ({
    opacity: 0,
    x: num,
    transition: {
      delay: 0.1,
      duration: 0.3,
    }
  })
}

const NavBar: React.FC<NavBarProps> = ({pagesAnimatVar}) => {
  const [consoleView, setConsoleView] = useState(false)
  
  
  const handleConsoleView = () => {
    if (consoleView === false){
      setConsoleView(true)
    } else if ( consoleView=== true) {
      setConsoleView(false)
    }
  }
  console.log(consoleView)

  return (
    <>
      <NavBarTop pagesAnimatVar={pagesAnimatVar} handleConsoleView={handleConsoleView}/>
      <NavBarRight consoleAnimateVar={consoleAnimateVar} setConsoleView={setConsoleView} consoleView={consoleView}/>
    </>
  )
}

export default NavBar