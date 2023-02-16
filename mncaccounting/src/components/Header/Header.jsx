import React from 'react';
import './Header.css';
import logo from '../../assets/img/logo.png'

export default function Header() {
  return (
    <div className="header">
        {/* <img src={logo} alt="" className='logo'/> */}
        <div className="logo-header">
          <span>MNC</span>
          <span>Accounting CPA Inc.</span>
        </div>
        <ul className='header-menu'>
            <li>Welcome</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}
