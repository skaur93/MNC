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
                <span>We prepare financial statements, including balance sheets, income statements, and cash flow statements,
                     to help businesses understand their financial performance. </span>
                <div className="contact-us"><span>Contact us</span><img src={tax} alt="" /></div>
            </div>

            <div className="category"><img src={tax}></img>
                <span>Tax services</span>
                <span>We offer personal and corporate tax return services.We help individuals and businesses minimize their tax liabilities 
                    by developing tax planning strategies, preparing tax returns, and providing guidance on tax-related issues.</span>
                <div className="contact-us"><span>Contact us</span><img src={tax} alt="" /></div>
            </div>

            <div className="category"><img src={tax}></img>
                <span>Accounting services</span>
                <span>We assist in payroll planning and financial statement preparations. Also, we help in full cycle bookkeeping, perform audits and other assurance services to help businesses and organizations ensure the accuracy of their financial statements.</span>
                <div className="contact-us"><span>Contact us</span><img src={tax} alt="" /></div>
            </div>
        </div>
    </div>
    
  )
}

export default Programs
