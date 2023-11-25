import React from 'react'
import PortfolioCard from '../components/portfolio-card';

const Portfolio = () => {
  return (
    <section id='portfolio'>

      <h1>my portfolio</h1>

      <div className='projects'>
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
      </div>
     
    </section>
  )
}

export default Portfolio