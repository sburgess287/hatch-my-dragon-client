import React from 'react';
// import {connect} from 'react-redux';
// import {Route, withRouter} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav class="nav-bar">
          <button class="nav-button">Create Goal</button>
          <button class="nav-button">Goals Manager</button>
          <button class="nav-button">Logout</button>
        </nav>
    </div>
  )
}