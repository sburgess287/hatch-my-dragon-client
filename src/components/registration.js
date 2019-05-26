import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom'

import './app.css'
import RegistrationForm from './registration-form';


export default function Registration(props) {


  return (
    <div>
      <h2>Signup</h2>
      <section>
        Section 1 Landing Page: welcome text
      </section>

      <section>
        <RegistrationForm />
      </section>

      <section>
        <div>
          <Link
            to='/login'
            className="nav-link"
          >
            Go to Login Page
          </Link> 
        </div>
      </section>
    </div>
  )
  
}

// shows error here, cannot read property 'currentUser' of undefined
// I don't have logged in props written yet
// const mapStateToProps = state => ({
//   loggedIn: state.auth.currentUser !== null
// });

// export default connect(mapStateToProps)(Registration);