import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './About.css'

function About() {
    return (
        <>
            <Header></Header>
            <div className='about'>

                <div className="aboutus">
                    <h1>About Us</h1>
                    <div data-aos="flip-left">MNC Accounting CPA Inc. is an accounting firm providing top-quality accounting support to businesses and
                        individuals. This includes accounting, tax and business consultancy services to individuals, self-employed,
                        owned managed small to medium size businesses.At MNC, we understand that every business has unique financial needs, and we are
                        committed to working closely with our clients to provide customized solutions that meet their specific requirements.
                        Whether you need help with bookkeeping, tax planning, financial analysis, or other accounting services, we are here to help you succeed.
                        We provide assistance in English,
                        Hindi, Urdu and Punjabi.</div>
                    <div data-aos="zoom-in-left">Meet Manny</div>
                    <div data-aos="zoom-in-right">Owner, Chartered Professional Accountant</div>
                    <div data-aos="fade-up">Manny earned her Bachelor of Business Administration in Accounting and got licensed as CPA in Vancouver, BC.
                        Manny has over 9 years of experience in compilation, personal tax, corporate tax and related areas. Manny’s
                        approach to each client is personalized – each client has a unique situation. Manny manages each of
                        these situations by having these three attributes: inquiring, listening, and understanding.</div>
                    <div data-aos="fade-up">Manny is passionate about continuous learning and staying up to date on tax legislation changes.
                        Manny works beyond the numbers and adds a real value to each of our client’s business. </div>

                    <div data-aos="fade-right">Outside of the office, Manny enjoys travelling and spending time with her family and friends.</div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default About
