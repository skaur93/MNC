import React from 'react'
import './Programs.css'

import tax from '../../assets/img/financial.svg'

function Programs() {
  return (
    <div className="Programs" id="programs">
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Services</span>
            <span className='stroke-text'>For better something</span>
        </div>
        <div className="program-categories">
            <div className="category"><img src={tax}></img>
                <span>Financial services</span>
                <span>We offer </span>
                <div className="contact-us"><span>Contact us</span><img src={tax} alt="" /></div>
            </div>

            <div className="category"><img src={tax}></img>
                <span>Tax services</span>
                <span>We offer personal and corporate tax return services.</span>
                <div className="contact-us"><span>Contact us</span><img src={tax} alt="" /></div>
            </div>

            <div className="category"><img src={tax}></img>
                <span>Accounting services</span>
                <span>We assist in payroll planning and financial statement preparations. Also, we help in full cycle bookkeeping.</span>
                <div className="contact-us"><span>Contact us</span><img src={tax} alt="" /></div>
            </div>
        </div>
    </div>
    
  )
}

export default Programs
