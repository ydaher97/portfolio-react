import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/contact'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import SideBar from './components/SideBar'


function App() {

  return (
    <>
     <Parallax pages={3.9}>
      <ParallaxLayer >
     
        <Nav />
        </ParallaxLayer>

        <ParallaxLayer sticky={{start:0, end: 2.9}} className='sticky-bar'>
          <SideBar/>
        </ParallaxLayer>
     <ParallaxLayer offset={0.3} speed={0.1}>
        <Hero />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2}>
        <About />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.5}>
        <Portfolio />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.8}>
        <Contact />
      </ParallaxLayer>
    </Parallax>
    </>
  )
}

export default App
