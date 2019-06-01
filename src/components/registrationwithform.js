import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom'
import { Field, reduxForm, focus } from 'redux-form';
import './app.css'

import {registerUser} from '../actions/users';
import {login} from '../actions/auth'; 
import Input from './input' 
// import {BrowserRouter as Router} from 'react-router-dom';

import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 6, max: 72});
const matchesPassword = matches('password');


export class Registration extends React.Component {

  onSubmit(values) {
    const {username, password} = values;
    const user = {username, password};
    // console.log(username)
    // console.log(password)
    // console.log(this.props); // array with object
    // console.log(values.username) // correct username
    // console.log(values.password) // correct passord
    // console.log(user) // correct user object
    // console.log(username); // correct username
    // console.log(password) // correct password
    return this.props 
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)))
      .then(() => this.props.history.push(`/goals-list`)); // update to go to list/recent goal
      

  }

  render(){
    // if we are logged in, redirect to NewGoal page
    
    if (this.isLoggedIn) {
      return <Redirect to="/goal" />
    } else if (!(this.loggedIn)) {
      console.log('not logged in yet') // TODO: remove later
    }

    return (
      <div>
        <h2>Signup</h2>
        <section>
          Section 1 Landing Page: welcome text; Register here
        </section>
  
        <section>
        <form 
        className="signup-form"
        onSubmit={this.props.handleSubmit(values => 
          this.onSubmit(values)
        )}
      >
        <div className="input-style">
          <Field
            component={Input}
            label="Username"
            id="username" 
            name="username"
            type="text" 
            className="textfield"
            aria-required="true"
            required
            validate={[required, nonEmpty, isTrimmed]}
          />
        </div>
        <div className="input-style">
          <Field
            component={Input}
            label="Password"
            id="password"
            name="password"
            type="password" 
            className="textfield"
            aria-required="true"
            aria-labelledby="password"
            required
            validate={[required, passwordLength, isTrimmed]}
            
            />
        </div>
        <div className="input-style">
          <Field
            component={Input}
            id="password-confirm"
            label="Confirm Password"
            name="passwordconfirm"
            type="password" 
            className="textfield"
            aria-required="true" 
            required 
            validate={[required, nonEmpty, matchesPassword]}
          />
        </div>
        <div className="error-style">
          
        </div>
        <button
          type="submit" 
          value="Submit" 
          className="submit-button"
        >
          Submit
        </button>
      </form>
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
  
  
}


// const mapStateToProps = state => ({
//   loggedIn: state.auth.currentUser !== null
// });

// export default connect(mapStateToProps)(Registration);

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) => 
    dispatch(focus('login', 'username'))
})(Registration);