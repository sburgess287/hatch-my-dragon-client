import React from 'react';
// import {connect} from 'react-redux';
// import {Navlink} from 'react-router-dom'; style when link is active prop!
// TODO: change a href to Link component, mapStateToProps, export default connect
// path
// navlinks 
import './navbar.css'

export default function Navbar(props) {
  const links = props.links.map((link, index) => (
    <li key={index}>
      <a href={link.href} className="nav-button">
        {link.text}
      </a>
    </li>
  ))

  return (
    <div>
      <nav className="nav-bar">
        <ul>
          {links}
          <li></li>
        </ul>
        
      </nav>
    </div>
  )
}