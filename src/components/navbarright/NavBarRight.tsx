import { useNavigate } from "react-router-dom"
import "./NavBarRight.css"

import { AnimatePresence, motion } from "motion/react"

type Links = {
  name: string
  route: string
}[]

const links: Links = [
  {
    name: "About",
    route: "/about"
  },
  {
    name: "Projects",
    route: "/proj",
  },
  {
    name: "Journey",
    route: "/exp",
  },
  {
    name: "Docs",
    route: "/certs",
  },
  {
    name: "Contact",
    route: "/contact",
  }
]

const NavBarRight = () => {
  const navigate = useNavigate()

  return (
    <AnimatePresence>
      <div className="navBarRightMainDiv">
        <motion.div>
          <div className="navBarRightCont">
            {links.map((item) => (
              <div className="navBarRightLinks" onClick={() => navigate(item.route)}>
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default NavBarRight