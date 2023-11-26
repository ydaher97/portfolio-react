import React from 'react'
import image from '../assets/profile.jpg'
const Hero = () => {

  return (
    <section id='hero'>
        <div>
            <img src={image} alt="profile" className="profile-img"/>
        </div>
        <div>
        <h1 class="hover-effect">
          <span>H</span>
          <span>E</span>
          <span>L</span>
          <span>L</span>
          <span>O</span>
          <span>&nbsp;</span>
          <span>W</span>
          <span>O</span>
          <span>R</span>
          <span>L</span>
          <span>D</span>
        </h1>
            <p>I Am Yazeed Daher a web devolper</p>
        </div>
    </section>
  )
}

export default Hero