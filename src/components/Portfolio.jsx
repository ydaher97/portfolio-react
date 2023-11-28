import React from 'react'
import PortfolioCard from '../components/portfolio-card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import { FaCircleChevronLeft } from "react-icons/fa6";//<FaCircleChevronLeft />

import { FaChevronCircleRight } from "react-icons/fa";//<FaChevronCircleRight />
import amazon from '../assets/amazon.png'
import rolldice from '../assets/roll-dice.png'
import mincraft from '../assets/mincraft.png'
import flight from '../assets/Screenshot_1.png'
import Ip from '../assets/ipv6.webp'





const Portfolio = () => {

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return <button onClick={onClick} className='prev'><FaCircleChevronLeft /></button>;
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return <button onClick={onClick} className='next'><FaChevronCircleRight /></button>;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
     prevArrow: <CustomPrevArrow />, 
     nextArrow: <CustomNextArrow />,
     responsive: [
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  

  return (
    <section id='portfolio'>
    <h1>My Portfolio</h1>
    <Slider {...settings}>
      
      <div className='card-item'>
        <PortfolioCard
          imgSrc={mincraft}
          description="Minecraft JavaScript Game."
          link="https://github.com/ydaher97/mincraft"
          live="https://mincraft-2d.netlify.app/"
        />
      </div>
      <div className='card-item'>
        <PortfolioCard
          imgSrc={flight}
          description="search flights with api and book flights"
          link="https://github.com/ydaher97/flight-front"
          live="https://flight-searchapi.netlify.app/"
        />
      </div>
      <div className='card-item'>
        <PortfolioCard
          imgSrc={rolldice}
          description="Two players can play the game. *Players take turns rolling dice and accumulating scores."
          link="https://github.com/ydaher97/dice-roll"
          live="https://rolldice-game-ai.netlify.app/"
        />
      </div>
      <div className='card-item'>
        <PortfolioCard
          imgSrc={amazon}
          description="amazon clone"
          link="https://github.com/ydaher97/Amazon-clone"
          live="https://amazon-front.netlify.app/"
        />
      </div>
      <div className='card-item'>
        <PortfolioCard
          imgSrc={Ip}
          description="Ipv6Chat Java"
          link="https://github.com/ydaher97/IPv6-MulticastChat/tree/main/IPv6Chat"
          live=""
        />
      </div>
    </Slider>
  </section>
  )
}

export default Portfolio