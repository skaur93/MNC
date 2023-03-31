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
          <span>Follow us on </span>
          <span><a href='https://www.instagram.com/mncaccountingcpa'><i class="fa-brands fa-instagram fa-2x"></i></a></span>
        </div>
        <div className='footer-info'>
          <span>Copyright &#169; 2023 MNC Accounting </span>
          <span>Designed with &#9829; by <a href="https://www.linkedin.com/in/sandeep-kaur-75240790">Sandeep Kaur</a></span>
        </div>
      </div>


    </div>
  )
}

export default Footer
