

import React, { useState, useEffect, useRef } from 'react';

const Skill = ({ name, percentage }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const skillRef = useRef(null);

  const animateOnScroll = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && !isAnimated) {
      setIsAnimated(true);
    } else if (!entry.isIntersecting && isAnimated) {
      setIsAnimated(false);
      setCurrentPercentage(0); 
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(animateOnScroll, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, 
    });

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isAnimated) {
      const animationDuration = 1000; 
      const startTime = Date.now();

      const updatePercentage = () => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < animationDuration) {
          const progress = (elapsedTime / animationDuration) * percentage;
          setCurrentPercentage(progress);
          requestAnimationFrame(updatePercentage);
        } else {
          setCurrentPercentage(percentage);
        }
      };

      updatePercentage();
    }
  }, [isAnimated, percentage]);

  const strokeWidth = 8; 
  const radius = 48; 
  const circumference = 2 * Math.PI * radius; 
  const progress = ((100 - currentPercentage) / 100) * circumference; 

  return (
    <div className="skill-card" ref={skillRef}>
      <div className="skill-name">{name}</div>
      <svg className="skill-svg" width="120" height="120">
        <circle
          className="skill-circle-bg"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="skill-circle"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth={strokeWidth}
          style={{ strokeDasharray: circumference, strokeDashoffset: progress }}
        />
      </svg>
      <div className="skill-percentage">{percentage}%</div>
    </div>
  );
}

export default Skill;
