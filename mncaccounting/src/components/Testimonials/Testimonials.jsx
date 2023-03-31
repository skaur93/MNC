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
      <div>
        <span className='stroke-text'>What customers </span>
        <span>say about us</span>
      </div>
      <div className="left-t">
        <Carousel>
          {
            testimonialsData.map((item, i) => <Item key={i} item={item} />)
          }
        </Carousel>

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
