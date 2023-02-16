import React from 'react'
import './Footer.css'
import instagram from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook.png'
import linkedin from '../../assets/img/linkedin.png'

const Footer = () => {
  return (
    <div className="footerContainer">
        <hr/>
        <div className="footer">
            <div className="social-links">
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
                <img src={linkedin} alt="" />
            </div>     
        </div>
        <div className="blur blur-footer-1"></div>
        <div className="blur blur-footer-2"></div>
        <div className='footer-info'> <span>Designed by Sandeep</span>  <span>Icons by <a href="https://icons8.com/">icons8</a></span></div>
    </div>
  )
}

export default Footer
