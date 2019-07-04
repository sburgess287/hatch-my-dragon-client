import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './navbar.css';

import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import Eggheader from "../eggheader.png"


export class Header extends React.Component {

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
    this.props.history.push(`/`);
    
  }

  
  render() {
    
    let logOutButton;
    let createGoalLink;
    let goalsManagerLink;
    let notLoggedInTest;

    let eggImage = (
      <img
      src={Eggheader}
      className="header-image"
      alt="Small Dragon Egg"
      
      />
    )
    if(this.props.loggedIn) {
      logOutButton = (
        <button 
          onClick={() => 
            this.logOut()
          }
          className="nav-button"
        >
          Log Out
        </button>
      )

      createGoalLink = (
        <NavLink 
          to="/goal"
          className="nav-button"
        >
          Create Goal
        </NavLink>
      )

      goalsManagerLink = (
        <NavLink 
          to="/goals"
          className="nav-button-link"
        >
          Goals Manager
        </NavLink>
      )
    } 
    
    return (
      <div>
        <header>
          
          <div>
          <h1 className="image-css">Hatch My Dragon</h1>
            {eggImage}
          </div>
          {/* <Navbar links={links} /> */}
          <nav className="nav-bar">
            {createGoalLink}
            {goalsManagerLink}
            {logOutButton}
            {notLoggedInTest}
          </nav>
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);