import React from 'react'

const PortfolioCard = ({ imgSrc, description, link,live }) => {
    return (
      <div className="portfolio-card">
        <img src={imgSrc} alt="Portfolio" className="portfolio-img" />
        <div className="portfolio-content">
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">View Code</a>
          <a href={live} target="_blank" rel="noopener noreferrer" className='live'>Live Project</a>

        </div>
      </div>
    );
  }

export default PortfolioCard