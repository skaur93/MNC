import React from 'react'
import './Footer.css'
import instagram from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook.png'
import linkedin from '../../assets/img/linkedin.png'

const Footer = () => {
  return (
    <div className="footerContainer">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <div className='footer-info'>
          <span>Designed by Sandeep</span>
        </div>
      </div>


    </div>
  )
}

export default Footer
