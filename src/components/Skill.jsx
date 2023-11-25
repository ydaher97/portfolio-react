import React ,{ useState, useEffect } from 'react'


const Skill = ({ name, percentage }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
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
  }, [percentage]);

  const strokeWidth = 8; // Adjust the stroke width as needed
  const radius = 40; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const progress = ((100 - currentPercentage) / 100) * circumference; // Calculate the progress based on currentPercentage

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