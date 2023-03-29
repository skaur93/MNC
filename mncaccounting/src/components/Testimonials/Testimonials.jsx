import React from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/img/left.svg'
import rightArrow from '../../assets/img/right.svg'
import { useState } from 'react'
import Slider from "react-slick";
import Carousel from "react-material-ui-carousel";

function Testimonials() {
  const [selected, setSelecetd] = useState(0);
  const length = testimonialsData.length;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='testimonials'>
      <div className="left-t">
        <div>
          <span className='stroke-text'>What customers </span>
          <span>say about us</span>
        </div>
        {/* <Corousel>
          <span>{testimonialsData[selected].content}</span>
          <span>
            <span className='customerName'>{testimonialsData[selected].name}</span>
          </span>
        </Corousel> */}

        <Carousel>
          {
            testimonialsData.map((item, i) => <Item key={i} item={item} />)
          }
        </Carousel>
        {/* <div className="arrows">
          <img onClick={() => { selected === 0 ? setSelecetd(length - 1) : setSelecetd((prev) => prev - 1) }} src={leftArrow} alt="" />
          <img onClick={() => { selected === length - 1 ? setSelecetd(0) : setSelecetd((prev) => prev + 1) }} src={rightArrow} alt="" />
        </div> */}
      </div>
    </div>
  )
}

function Item(props) {
  return (
    <div className='corousel-content'>
      <div>{props.item.content}</div>
      <div>{props.item.name}</div>
      <div>{props.item.location}</div>
    </div>
  )
}
export default Testimonials
