import React from 'react'
import SideBar from './SideBar'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";

const Nav = () => {
  return (
   <>
   <nav className='navbar'>
    <SideBar/>
    <div className='wrapper'>
      {/* <span>yazeed dev</span> */}
      <div className="social">
        <a href="https://github.com/ydaher97"><FaGithub/></a>
        <a href=""><FaLinkedin/></a>
      </div>
    </div>
   </nav>
   </>
  )
}

export default Nav