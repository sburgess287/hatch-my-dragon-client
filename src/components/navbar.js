import React from 'react';
// import {connect} from 'react-redux';
// import {Route, withRouter} from 'react-router-dom';

import './navbar.css'

export default function Navbar(props) {
  const links = props.links.map((link, index) => (
    <li key={index}>
      <a href={link.href} class="nav-button">
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