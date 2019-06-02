import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './navbar.css';
import {clearAuth, removeAuthInfo} from '../actions/auth';
import {clearAuthToken} from '../local-storage';


export class Header extends React.Component {

  // Clears the token, but only the header is rerendered
  logOut() {
    console.log(this.props);
    this.props.dispatch(clearAuth());
    clearAuthToken();
    
    
    // .then(() => this.props.history.push(`/login`)) //not working, handled elsewhere?
    
  }

  render() {

    // Only render Header links if user is logged in
    // Currently clearing the auth token but not rendering login page (need to force)

    let logOutButton;
    let createGoalLink;
    let goalsManagerLink;
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
          to="/goals-list"
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
            
            <NavLink 
              to="/goal"
              className="nav-button"
            >
              Create Goal
            </NavLink>
            <NavLink 
              to="/goals-list"
              className="nav-button"
            >
              Goals Manager
            </NavLink>
            <NavLink 
              to="/login"
              className="nav-button"
            >
              Logout
            </NavLink>
            {createGoalLink}
            {goalsManagerLink}
            {logOutButton}
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