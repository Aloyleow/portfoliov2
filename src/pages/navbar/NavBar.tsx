import NavBarRight from "../../components/navbarright/NavBarRight"
import NavBarTop from "../../components/navbartop/NavBarTop"
import "./NavBar.css"
import React from "react"
import { Variants } from "motion/react";

type NavBarProps = {
  pagesAnimatVar: Variants
}

const NavBar: React.FC<NavBarProps> = ({pagesAnimatVar}) => {
  return (
    <>
      <NavBarTop pagesAnimatVar={pagesAnimatVar}/>
      <NavBarRight/>
    </>
  )
}

export default NavBar