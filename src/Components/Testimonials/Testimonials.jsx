import React, { useRef } from 'react'
import './Testimonials.css'
import back from '../../assets/back.png'
import next from '../../assets/next.png'
import student1 from '../../assets/student1.jpg'
import student2 from '../../assets/student2.jpg'
import student3 from '../../assets/student3.jpg'

const Testimonials = () => {
const slider = useRef();
let tx=0;
const slideForward=()=>{
if(tx>-50){
  tx -= 25;
}
slider.current.style.transform=`translateX(${tx}%)`
}
const slideBackward=()=>{
  if(tx < 0){
  tx += 25;
}
slider.current.style.transform=`translateX(${tx}%)`
}

  return (
    <div className='testimonials'>
      <img src={back} alt="" className='back' onClick={slideBackward}/>
      <img src={next} alt="" className='next' onClick={slideForward}/>
      
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
            <div className="user-info">
              <img src={student1} alt="" />
              <div>
                <h3>Aisha</h3>
                <span>UAE, Dubai</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta deleniti sit adipisci quia magnam deserunt dolorum odio aliquid pariatur labore blanditiis nisi cum, odit totam illum expedita id atque.</p>
            </div>
            </li>
             <li>
            <div className="slide">
            <div className="user-info">
              <img src={student2} alt="" />
              <div>
                <h3>Sohaib</h3>
                <span>Yemen, Sana'a</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta deleniti sit adipisci quia magnam deserunt dolorum odio aliquid pariatur labore blanditiis nisi cum, odit totam illum expedita id atque.</p>
            </div>
            </li>
             <li>
            <div className="slide">
            <div className="user-info">
              <img src={student2} alt="" />
              <div>
                <h3>Abdu</h3>
                <span>Britin, London</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta deleniti sit adipisci quia magnam deserunt dolorum odio aliquid pariatur labore blanditiis nisi cum, odit totam illum expedita id atque.</p>
            </div>
            </li>
              <li>
            <div className="slide">
            <div className="user-info">
              <img src={student2} alt="" />
              <div>
                <h3>Abdu</h3>
                <span>Britin, London</span>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta deleniti sit adipisci quia magnam deserunt dolorum odio aliquid pariatur labore blanditiis nisi cum, odit totam illum expedita id atque.</p>
            </div>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Testimonials