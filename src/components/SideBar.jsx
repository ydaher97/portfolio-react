import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from 'framer-motion'

const SideBar = () => {
    const [open, setOpen] = useState(false)

    const variants = {
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:20,
            }
        },
        closed:{
            clipPath: "circle(30px at 56px 52px)",
            transition:{
                delay:0.5,
                type:"spring",
                stiffness:400,
                damping:40
            }
        }
    }

    // const items = ["hero", "about", "portfolio", "contact"]

  return (
    <motion.div className='side-list' animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
            <div className='links'>
            <a href="#hero" onClick={()=> setOpen((prev) => !prev)}>Home</a>
             <a href="#about"  onClick={()=> setOpen((prev) => !prev)}>About</a>
            <a href="#portfolio"  onClick={()=> setOpen((prev) => !prev)}>Portfolio</a>
            <a href="#contact"  onClick={()=> setOpen((prev) => !prev)}>Contact</a>
            </div>
        </motion.div>
        <button onClick={()=> setOpen((prev) => !prev)}>
            <GiHamburgerMenu />
        </button>
    </motion.div>
  )
}

export default SideBar