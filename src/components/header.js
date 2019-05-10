import React from 'react';
// import {connect} from 'react-redux';
// import {Route, withRouter} from 'react-router-dom';
import Navbar from './navbar';

export default function Header(){
  return (
    <div>
      <header>
        <h1>Hatch My Dragon</h1>
        <Navbar />
      </header>
    </div>
  )

}