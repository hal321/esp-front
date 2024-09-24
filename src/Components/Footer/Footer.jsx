import React from 'react'
import './Footer.css'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import tiktok from '../../assets/tiktok.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='social-media'>
        <ul>
          <li><a href="https://www.instagram.com/" target='_blank'><img src={instagram} alt="" /></a></li>
          <li><a href="https://www.tiktok.com/en/" target='_blank'><img src={tiktok} alt="" /></a></li>
          <li><img src={facebook} alt="" /></li>
        </ul>
      </div>
      <div className='copyright'>
      <p>&copy;ESP 2020. All right Reserved</p>
      <span className='verticle-line'></span>
      <ul>
        <li>Terms of Services  </li>        
             <span className='verticle-line'></span>
             </ul>
              <span className='verticle-line'></span>
             <ul>

        <li> Privacy Policy</li>
        
      </ul>
                  

      </div>
    </div>
  )
}

export default Footer