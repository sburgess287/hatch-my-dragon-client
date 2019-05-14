import React from 'react';

import './app.css'

export default function Login() {
  return (
    <div>
      <h2>Login</h2>
      <section>
        Section 1 Landing Page: welcome text
      </section>

      <section>
        Section 2 Landing Page: more text
      </section>

       <section>
        <form className="login-form">
          <div className="input-style">
            <label htmlFor="login">Username</label>
            <input 
              id="login" 
              type="text" 
              className="textfield" 
              >
            </input>
          </div>
          <div className="input-style">
            <label htmlFor="password>">Password</label>
            <input id="password" 
              type="text" 
              name="textfield" 
              className="textfield">
            </input>
          </div>
          <div className="error-style">
            <p>Incorrect username or password, please try again.</p>
            <p>Username is required to login.</p>
            <p>Password is required to login.</p>
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
            className="register-button">Go to Registration Page</button>
        </div>
      </section>

    </div>
  )
}