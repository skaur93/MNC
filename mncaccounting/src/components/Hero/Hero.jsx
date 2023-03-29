import React from 'react'
import Header from '../Header/Header';
import './Hero.css';
import coin from '../../assets/img/pot1.png'
import tax from '../../assets/img/tax-season.png'
import { motion } from "framer-motion"

export default function Hero() {

  const transiton = { type: 'spring', ease: 'linear', delay: 0.5, repeat: Infinity, duration: 0.8, };
  return (
    <div className='hero'>
      <div className="left-h">
        <Header></Header>
        <div className="the-best-acc">
          <motion.div
            initial={{ left: '238px' }}
            whileInView={{ left: '8px' }}
            transiton={{ ...transiton, type: 'tween' }}>
          </motion.div>
          <span>The best and trusted accounting firm in the Lower Mainland.</span>
        </div>

        <div className="hero-text" data-aos='fade-up-right'>
          <div><span className='stroke-text'>Making </span><span>Accounting</span></div>
          <div><span>More Wise</span></div>
          <div>
            <span>We are specialized in accounting, tax planning, reconciling bank statements and making accurate financial records.
              Our commitment to our clients extends beyond the numbers. We are dedicated to building long-term relationships based on mutual respect, trust, and a shared commitment to financial success.
              We believe that our clients' success is our success, which is why we are committed to delivering the highest level of service and expertise to help them achieve their financial goals.
            </span>
            <div style={{ marginTop: '1rem' }}></div>
            {/* <span>We would like to inform you that our location is in Surrey. As such, we kindly request that you contact us via phone before making any plans to visit our premises.
              We are available to answer any questions or concerns you may have and will be happy to assist you in any way we can. We appreciate your cooperation and look forward to hearing from you soon.</span> */}
          </div>

        </div>



      </div>

    </div >
  )
}
