import React from 'react'
import './Programs.css'
import program1 from '../../assets/program1.jpg';
import programicon1 from '../../assets/programicon1.png';
import program2 from '../../assets/program2.jpg';
import programicon2 from '../../assets/programicon2.png';
import program3 from '../../assets/program3.jpg';
import programicon3 from '../../assets/programicon3.png';

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
<img src={program1} alt="" />
<div className="caption">
  <img src={programicon1} alt="" />
  <p>Unvirsities</p>
</div>
</div>
<div className="program">
<img src={program2} alt="" />
<div className="caption">
  <img src={programicon2} alt="" />
  <p>Language Centers</p>
</div>
</div>
<div className="program">
<img src={program3} alt="" />
    <div className="caption">
  <img src={programicon3} alt="" />
  <p>Online Courses</p>
</div>  
</div>
    </div>
  )
}

export default Programs