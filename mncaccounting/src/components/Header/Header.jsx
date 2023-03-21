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
        <Link to="/">Welcome</Link>
        <Link to="about">About Us</Link>
        <Link to="contact">Contact</Link>
      </ul>
    </header>
  )
}
