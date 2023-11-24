import React from 'react'
import Skill from './Skill'

const About = () => {
  return (
    <section id='about'>
        <h1>about me</h1>
        <div className='skills'>
        <Skill name="HTML" percentage={90} />
        <Skill name="HTML" percentage={90} />
        <Skill name="CSS" percentage={100} />
        <Skill name="HTML" percentage={90} />
        <Skill name="HTML" percentage={90} />
        <Skill name="CSS" percentage={100} />
        </div>
        

    </section>
  )
}

export default About