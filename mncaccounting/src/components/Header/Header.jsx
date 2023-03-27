import React from 'react';
import './Header.css';
import logo from '../../assets/img/logo.png'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      {/* <img src={logo} alt="" className='logo'/> */}
      <div className="logo-header" data-aos='zoom-in-right'>
        <span>MNC</span>
        <span>Accounting CPA Inc.</span>
      </div>
      <ul className='header-menu' data-aos='zoom-in-left'>
        <li><Link to="/"><i class="fa-solid fa-house fa-icon"></i>Welcome</Link></li>
        <li><Link to="/about"><i class="fa-solid fa-user fa-icon"></i>About Us</Link></li>
        <li><Link to="/contact"><i class="fa-solid fa-address-book fa-icon"></i>Contact</Link></li>
      </ul>
    </header>
  )
}
