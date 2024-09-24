import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
<div className="hero-text">
  <h1>Unlock your learning potential</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatum tempora aliquam amet corporis nisi debitis excepturi natus soluta similique reiciendis blanditiis dolor maxime magnam sint aperiam, necessitatibus vitae nemo.</p>
  <button className='btn'>Explore more <img src={arrow} alt="" /></button>
</div>
    </div>
  )
}

export default Hero