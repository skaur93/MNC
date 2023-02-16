import React from 'react'
import Header from '../Header/Header';
import './Hero.css';
import coin from '../../assets/img/pot1.png'
import tax from '../../assets/img/tax-season.png'
import { motion } from "framer-motion"

export default function Hero() {

  const transiton = {type: 'spring', ease: 'linear',  delay: 0.5,repeat: Infinity, duration: 0.8, };
  return (
    <div className='hero'>
      <div className="blur blur-hero"></div>
      <div className="left-h">
        <Header></Header>
        <div className="the-best-acc">
            <motion.div 
            initial={{left: '238px'}}
            whileInView={{left: '8px'}}
            transiton={{...transiton, type: 'tween'}}>
            </motion.div>
            <span>The best accounting firm in the town</span>
        </div>

        <div className="hero-text">
            <div><span className='stroke-text'>Making </span><span>Accounting</span></div>
            <div><span>More Wise</span></div>
            <div>
                <span>We are specialized in accounting, tax planning, reconciling bank statements and making accurate financial records.
                Our commitment to our clients extends beyond the numbers. We are dedicated to building long-term relationships based on mutual respect, trust, and a shared commitment to financial success.
                We believe that our clients' success is our success, which is why we are committed to delivering the highest level of service and expertise to help them achieve their financial goals.
                </span>
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
        <motion.div  className="annoucement">
          <img src={tax} alt="" />
          <span>Tax season 2023 dealine is 30 April. </span>
          <span>Contact us now!</span>
        </motion.div>


        <img src={coin} alt="" className="hero-img" />
        <img src="" alt="" className="hero-img-back" />
      </div>
    </div>
  )
}
