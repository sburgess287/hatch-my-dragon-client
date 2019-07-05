import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import '../index.css';

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
    
    let createGoalLink;
    let goalsManagerLink;
    let notLoggedInTest;
    let logOutLink;

    let eggImage = (
      <img
      src={Eggheader}
      className="header-image"
      alt="Small Dragon Egg"
      />
    )

    if(this.props.loggedIn) {
      logOutLink = (
        <NavLink 
          to="/"
          onClick={() => 
            this.logOut()
          }
          className="nav-button-link"
        >
          Log Out
        </NavLink>
      )

      createGoalLink = (
        <NavLink 
          to="/goal"
          className="nav-button-link"
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
          <div className="header-div">
          <h1 className="image-css">Hatch My Dragon</h1>
            {eggImage}
          </div>
          <nav className="nav-bar">
            {createGoalLink}
            {goalsManagerLink}
            {logOutLink}
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