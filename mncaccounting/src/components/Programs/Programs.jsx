import React from 'react'
import './Programs.css'
import tax from '../../assets/img/financial.svg'

function Programs() {
    return (
        <div className="Programs" id="programs" data-aos='fade-down-up'>
            <div className='programs-main-header' >
                <span data-aos='fade-down-left'>Looking for top-notch accounting services in town?</span>
                <span data-aos='fade-down-right'>Look no further than our award-winning accounting firm - consistently recognized for excellence in the industry.</span>
            </div>
            <div className="programs-header" >
                <span className='stroke-text' data-aos='fade-down'>Explore Our Services</span>
                {/* <span>Services</span> */}
                {/* <span className='stroke-text'>For better money planning</span> */}
            </div>
            <div className="program-categories" >
                <div className="category" data-aos="flip-left"><img src={tax}></img>
                    <span>Compilation Engagements</span>
                    <span>We prepare financial statements, including balance sheets, income statements, and cash
                        flow statements, to help businesses understand their financial performance. </span>

                </div>
                <div className="category" data-aos="flip-left"><img src={tax}></img>
                    <span>Financial services</span>
                    <span>We provide wide range of financial services to individuals, businesses, and organizations such as
                        tax preparation and planning to ensure compliance with tax laws and to minimize tax liabilities. </span>

                </div>
                <div className="category" data-aos="flip-left"><img src={tax}></img>
                    <span>Personal Tax Returns</span>
                    <span>We provide tax return services depending on the needs of the client ensuring that clients
                        comply with all relevant tax laws and regulations, identify available deductions and credits,
                        and minimize tax liabilities </span>

                </div>
            </div>
            <div className="program-categories">
                <div className="category" data-aos="flip-left"><img src={tax}></img>
                    <span>Corporate Tax Returns</span>
                    <span>We prepare and file federal, state, and local corporate tax returns for businesses of all sizes.
                        We assist with tax registration, filing requirements, and compliance issues and advise on tax-efficient business structures,
                        and help clients implement tax-saving strategies. </span>

                </div>

                <div className="category" data-aos="flip-left"><img src={tax}></img>
                    <span>Tax services</span>
                    <span>We offer personal and corporate tax return services. We help individuals and businesses minimize their tax liabilities
                        by developing tax planning strategies, preparing tax returns, identify available tax credits and deductions and providing guidance on tax-related issues.</span>

                </div>

                <div className="category" data-aos="flip-left"><img src={tax}></img>
                    <span>Accounting services</span>
                    <span>We assist in payroll planning and financial statement preparations. Also, we help in full cycle bookkeeping, perform audits and other assurance services to help businesses and organizations ensure the accuracy of their financial statements.</span>

                </div>
            </div>
        </div>

    )
}

export default Programs
