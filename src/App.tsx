import { Routes, Route } from "react-router-dom"
import { Variants } from "motion/react";



import MainPage from "./pages/main/MainPage"
import NavBar from "./pages/navbar/NavBar"



const pagesAnimatVar: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1, 
    transition: {
      duration: 1.2, 
      ease: "easeIn",
    },
  },
};

function App() {
  
  return (
    <>
      <NavBar pagesAnimatVar={pagesAnimatVar}/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </>
  )
}

export default App
