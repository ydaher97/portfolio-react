import React from 'react'
import Skill from './Skill'

const About = () => {
  return (
    <section id='about'>
        <h1>about me</h1>

      <div>
        <p>The experience that I got from jobs and volunteering made me develop my personality qualities of leadership and management , teamwork, is something I believe in and through it any goal can be achieved.</p>
      </div>

        <h2>my skills</h2>
        <div className='skills'>
        <Skill name="HTML" percentage={90} />
        <Skill name="css" percentage={90} />
        <Skill name="javascript" percentage={100} />
        <Skill name="react" percentage={90} />
        <Skill name="angular" percentage={90} />
        <Skill name="java" percentage={100} />
        </div>
        

    </section>
  )
}

export default About