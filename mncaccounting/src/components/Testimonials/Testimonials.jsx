import React from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/img/left.svg'
import rightArrow from '../../assets/img/right.svg'
import { useState } from 'react'


function Testimonials() {
  const [selected, setSelecetd] = useState(0);
  const length = testimonialsData.length;

  return (
    <div className='testimonials'>
      <div className="left-t">
        <span></span>
        <span className='stroke-text'>What customers</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].content}</span>
        <span>
          <span style={{ color: 'var(--orange)' }}>{testimonialsData[selected].name}</span> {" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        {/* <div></div>
        <div></div> */}
        <div className="arrows">
          <img onClick={() => { selected === 0 ? setSelecetd(length - 1) : setSelecetd((prev) => prev - 1) }} src={leftArrow} alt="" />
          <img onClick={() => { selected === length - 1 ? setSelecetd(0) : setSelecetd((prev) => prev + 1) }} src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
