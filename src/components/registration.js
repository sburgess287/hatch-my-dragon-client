import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

import './app.css'

export default class Registration extends React.Component {
 
  goToNewGoal(event) {
    console.log('goToNewGoal')
    event.preventDefault();
    this.props.history.push(`/newgoal`)
  }

  render() {
    return (
      <div>
        <h2>Signup</h2>
        <section>
          Section 1 Landing Page: welcome text
        </section>
  
        <section>
          <form 
            className="signup-form"
            onSubmit={e => this.goToNewGoal(e)}
          >
            <div className="input-style">
              <label 
                htmlFor="username" 
                className="label-style"
                
              >
                Add Username
              </label>
              <input 
                id="username" 
                type="text" 
                className="textfield"
                aria-required="true"
                required
                >
              </input>
            </div>
            <div className="input-style">
              <label 
                htmlFor="password>"
                className="label-style"
              >
                Add Password
              </label>
              <input 
                id="password"
                type="text" 
                className="textfield"
                aria-required="true"
                required
                >
              </input>
            </div>
            <div className="input-style">
              <label 
                htmlFor="password-confirm>"
                className="label-style"
              >
                Confirm Password
              </label>
              <input 
                id="password-confirm"
                type="text" 
                className="textfield"
                aria-required="true" 
                required 
              >
              </input>
            </div>
            <div className="error-style">
              <p>Username already taken, please try again.</p>
              <p>Passwords don't match, please try again.</p>
              <p>Username is required to register.</p>
            </div>
            <input
              type="submit" 
              value="Submit" 
              className="submit-button">
            </input>
          </form>
        </section>
  
        <section>
          <div> 
            <Link to='/login'>
              <button className="login-button">
                Go to Login Page
              </button>    
            </Link>
          </div>
        </section>
      </div>
    )
  }
}