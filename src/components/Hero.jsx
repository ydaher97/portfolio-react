import React from 'react'
import image from '../assets/profile.jpg'
import 'animate.css';

const Hero = () => {

  return (
    <section id='hero'>
        <div>
            <img src={image} alt="profile" className="profile-img"/>
        </div>
        <div className='text'>
        <h1 class="hover-effect">
          <span class="animate__animated animate__backInDown ">H</span>
          <span class="animate__animated animate__backInLeft">E</span>
          <span class="animate__animated animate__backInLeft animate__delay-1s">L</span>
          <span class="animate__animated animate__backInRight animate__delay-1s"> L</span>
          <span class="animate__animated animate__fadeIn animate__delay-1s">O</span>
          <span>&nbsp;</span>
          <span class="animate__animated animate__bounceInDown animate__delay-2s">W</span>
          <span class="animate__animated animate__bounceInLeft animate__delay-2s">O</span>
          <span class="animate__animated animate__bounceInLeft animate__delay-2s">R</span>
          <span class="animate__animated animate__bounceInRight animate__delay-2s"> L</span>
          <span class="animate__animated animate__bounceInUp animate__delay-2s">D</span>
          <span class="animate__animated animate__zoomIn animate__delay-3s">!</span>
        </h1>
            <p class='animate__animated animate__bounce'>I Am Yazeed Daher a web devolper</p>
        </div>
    </section>
  )
}

export default Hero