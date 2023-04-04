import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/img/logo.png'
import { Link } from "react-router-dom";

export default function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (

    <nav className='header-menu fixed-top'>
      <div className="logo-header" data-aos='zoom-in-right'>
        <span>MNC</span>
        <span>Accounting CPA Inc.</span>
      </div>

      {
        menuOpened === false && mobile === true ? (
          <div style={{ padding: '0.5rem', borderRadius: '5px', marginRight: '-15px' }}
            onClick={() => setMenuOpened(true)}>
            <span><i class="fa-solid fa-bars" style={{ color: 'white' }}></i></span>
          </div>
        ) : (
          <div className='list-menu navbar-nav ml-auto'>
            <ul>
              <li><Link onClick={() => setMenuOpened(false)} to="/"><i class="fa-solid fa-house fa-icon"></i>Welcome</Link></li>
              <li><Link onClick={() => setMenuOpened(false)} to="/about"><i class="fa-solid fa-user fa-icon"></i>About Us</Link></li>
              <li><Link onClick={() => setMenuOpened(false)} to="/contact"><i class="fa-solid fa-address-book fa-icon"></i>Contact Us</Link></li>
            </ul>
          </div>
        )
      }


    </nav >
  )
}
