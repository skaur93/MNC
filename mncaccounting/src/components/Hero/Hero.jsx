import React from 'react'
import Header from '../Header/Header';
import './Hero.css';
import coin from '../../assets/img/pot1.png'

export default function Hero() {
  return (
    <div className='hero'>
      <div className="left-h">
        <Header></Header>
        <div className="the-best-acc">
            <div></div>
            <span>The best accounting firm in the town</span>
        </div>

        <div className="hero-text">
            <div><span className='stroke-text'>Making </span><span>Accounting</span></div>
            <div><span>More Wise</span></div>
            <div>
                <span>We are specialized in accounting, tax planning and more and more and morw(TBD)....</span>
            </div>
        </div>

        {/* Hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Contact us now</button>
        <img src={coin} alt="" className="hero-img" />
        <img src="" alt="" className="hero-img-back" />
      </div>
    </div>
  )
}
