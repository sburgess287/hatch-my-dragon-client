import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import {Link} from 'react-router-dom'

import './app.css'


export class Login extends React.Component {
  onSubmit(values) {
    // console.log(values.username);Todo : remove this
    // console.log(values.password);Todo : remove this
    // console.log(this.props)// Todo : remove this
    return this.props
    .dispatch(login(values.username, values.password))
    .then(() => this.props.history.push(`/goals-list`)) // works!

  }

  // TODO: remove this? is it needed?
  // Props: onSubmit={e => this.goToNewGoal(e)}
  // goToNewGoal(event) {
  //   console.log('goToNewGoal')
  //   event.preventDefault();
  //   this.props.history.push(`/goal-list`)
  // }
  
  render() {

    let error;
    if (this.props.error) {
      error = (
        <div
          className="error-style"
          aria-live="polite"
        >
          {this.props.error}
        </div>
      );
    }
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
          <form 
            className="login-form"
            onSubmit={this.props.handleSubmit(values => 
              this.onSubmit(values) 
            )}
          >
            {error}
            <div className="input-style">
            
              <Field
                component={Input} 
                label="Username"
                name="username"
                id="login" 
                type="text" 
                className="textfield"
                validate={[required, nonEmpty]}
              />
              
            </div>
            <div className="input-style">
              
              <Field 
                component={Input}
                label="Password"
                id="password" 
                type="password" 
                name="password" 
                className="textfield"
                required
                validate={[required, nonEmpty]}
              /> 
              
            </div>
            
            <button 
              type="submit" 
              value="Submit" 
              className="submit-button"
            >
              Log in
            </button>
          </form>
        </section>

        <section>
        <div>
          <Link 
            to='/'
            className="nav-link"
          >
            Go To Registration Page
          </Link>
        </div>
      </section>
    </div>
      
    )
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => 
    dispatch(focus('login', 'username'))
})(Login);