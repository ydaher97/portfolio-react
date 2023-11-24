import React from 'react'
import PortfolioCard from '../components/portfolio-card';

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <PortfolioCard
        imgSrc="src\assets\profile.jpg"
        description="Description of the project."
        link="https://yourprojectlink.com"
      />
       <PortfolioCard
        imgSrc="src\assets\profile.jpg"
        description="Description of the project."
        link="https://yourprojectlink.com"
      />
    </section>
  )
}

export default Portfolio