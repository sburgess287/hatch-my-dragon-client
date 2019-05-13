import React from 'react';

import './app.css'

export default function Registration(props) {
  return (
    <div>
      <h2>Signup</h2>
      <section>
        Section 1 Landing Page: welcome text
      </section>

      <section>
        <form className="signup-form">
          <div className="input-style">
            <label htmlFor="username">Add Username</label>
            <input 
              id="username" 
              type="text" 
              name="textfield" 
              className="textfield">
            </input>
          </div>
          <div className="input-style">
            <label htmlFor="password>">Add Password</label>
            <input 
              id="password"
              type="text" 
              className="textfield" 
              >
            </input>
          </div>
          <div className="input-style">
            <label htmlFor="password>">Confirm Password</label>
            <input 
              id="password"
              type="text" 
              className="textfield">
            </input>
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
          <button 
            className="login-button">Go to Login Page</button>
        </div>
      </section>
    </div>
  )
}