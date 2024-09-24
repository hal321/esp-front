import React from 'react'
import './About.css'
import about1 from '../../assets/about1.jpg'
import play from '../../assets/play.png'

const About = () => {
  return (
    <div className='about'>
<div className="about-left">
  <img src={about1} alt="" className='about1'/>
  <img src={play} alt="" className='play'/>
</div>
<div className="about-right">
  <h2>ABOUT ESP</h2>
  <h3>Unlock your learning potential</h3>
  <p>your trusted partner in university student recruitment and online English courses. We specialize in connecting students with top universities worldwide and offer comprehensive English language programs to enhance your academic and professional success. Join us to achieve your educational goals and unlock global opportunities.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, laboriosam earum iste reprehenderit beatae incidunt eligendi voluptatibus aut, ipsam modi sit alias ratione obcaecati voluptatum commodi officiis! Laudantium, amet explicabo.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur cupiditate deleniti. Sint commodi ab rem aliquid, nesciunt nostrum? Vel eligendi consequatur ipsam enim hic et doloribus illo. Illum, perferendis?</p>
</div>
    </div>
  )
}

export default About