import React from 'react'

const Skill = ({ name, percentage }) => {
    const strokeWidth = 8; 
  
    const radius = 40; 
    const circumference = 2 * Math.PI * radius; 
    const progress = ((100 - percentage) / 100) * circumference;
  
    return (
      <div className="skill-card">
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

export default Skill