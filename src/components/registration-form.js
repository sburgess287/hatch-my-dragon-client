import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth'; 
import Input from './input' 
// import {BrowserRouter as Router} from 'react-router-dom';

import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 6, max: 72});
const matchesPassword = matches('password');

// add field components, are attributes correct?
export class RegistrationForm extends React.Component {

  onSubmit(values) {
    const {username, password} = values;
    const user = {username, password};
    // console.log(username)
    // console.log(password)
    return this.props 
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)))
      .then(() => this.props.history.push(`/newgoal`)); // update to go to list/recent goal
      

  }
 
  // TODO: onSubmit:  may remove or add to login?
  goToNewGoal(event) {
    console.log('goToNewGoal')
    event.preventDefault();
    this.props.history.push(`/newgoal`)
  }

  // PROPS: onSubmit={e => this.goToNewGoal(e)}
  render() {
    return (
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

    )
  }


}

export default reduxForm({
  form: 'registration',
  // onSubmitFail: (errors, dispatch) =>
  //     dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);