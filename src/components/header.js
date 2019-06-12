import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './navbar.css';

import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';


export class Header extends React.Component {

  logOut() {
    // console.log(this.props);
    // console.log(this.props.loggedIn + `this.props.loggedIn value`)
    this.props.dispatch(clearAuth());
    clearAuthToken();
    this.props.history.push(`/login`);
    
  }

  
  render() {

    // Only render Header links if user is logged in
    // Currently clearing the auth token but not rendering login page (need to force)
    // https://reacttraining.com/react-router/web/guides/server-rendering
    
    let logOutButton;
    let createGoalLink;
    let goalsManagerLink;
    let notLoggedInTest;
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
          className="nav-button"
        >
          Goals Manager
        </NavLink>

      )
    } 
    
    return (
      <div>
        <header>
          <h1>Hatch My Dragon</h1>
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