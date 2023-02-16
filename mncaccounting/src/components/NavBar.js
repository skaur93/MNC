import React from 'react'
import "./NavBarStyles.css"

export default function NavBar() {
  return (
    <div className="header">
      
        <h1>MNC Acccounting</h1>
      
      <ul className='nav-menu'>
        <li> Home
          {/* <Link to="/">Home</Link> */}
        </li>
        <li> About
          {/* <Link to="/">About us</Link> */}
        </li>
        <li> Contact
          {/* <Link to="/">Contact us</Link> */}
        </li>
      </ul>
    </div>
  )
}
