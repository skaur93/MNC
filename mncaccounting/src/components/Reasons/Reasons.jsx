import React from 'react'
import './Reasons.css'
import coins from '../../assets/img/coins.jpg'
import reason2 from '../../assets/img/reason2.jpg'
import sma from '../../assets/img/sma.jpg'
import main from '../../assets/img/main.png'
import arrow from '../../assets/img/tick.png'
import CountUp from "react-countup";

const Reasons = () => {
    return (
        <div className="reasons" id="reasons">
            <div className="right-r">
                <div>
                    <span className='stroke-text'>why </span>
                    <span>choose us?</span>
                </div>

                <div className='reasons-r'>
                    <div data-aos='zoom-out-down'>
                        <img src={arrow} alt=""></img>
                        <span>Timely and nicely taxes done</span>
                    </div>
                    <div data-aos='zoom-out-down'>
                        <img src={arrow} alt=""></img>
                        <span>Financial statement preparation</span>
                    </div>
                    <div data-aos='zoom-out-down'>
                        <img src={arrow} alt=""></img>
                        <span>Personal and corporate tax returns</span>
                    </div>
                    <div data-aos='zoom-out-down'>
                        <img src={arrow} alt=""></img>
                        <span>State of the art technology</span>
                    </div>
                    <div data-aos='zoom-out-down'>
                        <img src={arrow} alt=""></img>
                        <span>100% Accuracy</span>
                    </div>
                </div>

                <div className="otherR">
                    <div data-aos='zoom-out-down'>
                        <span><i class="fa-solid fa-calculator fa-2xl"></i> </span>
                        <CountUp enableScrollSpy duration={2} start={0} end={5} prefix="+"></CountUp>
                        <span>Years of corporate expereince</span>
                    </div>
                    <div data-aos='zoom-out-down'>
                        <span><i class="fa-solid fa-book fa-2xl"></i> </span>
                        <CountUp enableScrollSpy duration={2} start={0} end={5} prefix="+"></CountUp>
                        <span>Years of Bookkeeping</span>
                    </div>
                    <div data-aos='zoom-out-down'>
                        <span><i class="fa-solid fa-face-smile fa-2xl"></i></span>
                        <CountUp enableScrollSpy duration={10} start={0} end={100} prefix="+"></CountUp>
                        <span>Happy Customers</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Reasons
