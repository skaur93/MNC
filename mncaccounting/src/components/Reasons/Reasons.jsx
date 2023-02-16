import React from 'react'
import './Reasons.css'
import coins from '../../assets/img/coins.jpg'
import reason2 from '../../assets/img/reason2.jpg'
import sma from '../../assets/img/sma.jpg'
import main from '../../assets/img/main.png'
import arrow from '../../assets/img/tick.png'

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
        <div className="left-r">
            <img src={coins} alt="" />
            <img src={reason2} alt="" />
            <img src={sma} alt="" />
            <img src={main} alt="" />
        </div>
        <div className="right-r">
            {/* <span>some reasons</span> */}

            <div>
                <span className='stroke-text'>why </span>
                <span>choose us?</span>
            </div>

            <div className='reasons-r'>
                <div>
                    <img src={arrow} alt=""></img>
                    <span>Over 100+ customers</span>
                </div>
                <div>
                    <img src={arrow} alt=""></img>
                    <span>Timely and nicely taxes done</span>
                </div>
                <div>
                    <img src={arrow} alt=""></img>
                    <span>Financial statement preparation</span>
                </div>
                <div>
                    <img src={arrow} alt=""></img>
                    <span>Personal and corporate tax returns</span>
                </div>
                <div>
                    <img src={arrow} alt=""></img>
                    <span>Personal and corporate tax returns</span>
                </div>
                <div>
                    <img src={arrow} alt=""></img>
                    <span>Personal and corporate tax returns</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reasons
