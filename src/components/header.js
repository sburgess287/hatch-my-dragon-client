import React from 'react';
// import {connect} from 'react-redux';
// import {Route, withRouter} from 'react-router-dom';
import Navbar from './navbar';

const links = [
  {
    text: 'Create Goal', 
    href: 'http://localhost:3000'
  }, 
  {
    text: 'Goals Manager', 
    href: 'http://localhost:3000'
  }, 
  {
    text: 'Logout', 
    href: 'http://localhost:3000'
  }, 

]

export default function Header(){
  return (
    <div>
      <header>
        <h1>Hatch My Dragon</h1>
        <Navbar links={links} />
      </header>
    </div>
  )

}