import React from 'react';
// import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
// TODO: change a href to Link component, mapStateToProps, export default connect

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
        </ul>
        
      </nav>
    </div>
  )
}