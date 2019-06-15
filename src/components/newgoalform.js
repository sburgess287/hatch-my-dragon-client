import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty } from '../validators';
import {createGoal} from '../actions/index'

import './app.css'
 
// showing error and props are undefined, will come back to this
// not sure how to make this work without importing actions to get the value of submit form
// should this component be getting the value of the submit form rather than pushing a new route?
{/* <label htmlFor="goal">Add New Goal</label> */}
{/* <input 
            type="text" 
            id="goal"
            className="textfield"
            aria-required="true"
            required
            name="addgoal"
          >
          </input> */}


export class NewGoalForm extends React.Component {

  onSubmit(values) {
    // console.log(values);
    // console.log(this.props);
    
    return this.props
    
    // dispatch action: POST to goals endpoint
    .dispatch(createGoal(values.goal))
    // then push to /goal/goalID
    .then((goal) => this.props.onSubmit(goal))
    
      
  }


  render() {
    return (
      <form 
        onSubmit={this.props.handleSubmit(values => 
          this.onSubmit(values)
        )}
      >
      
        <div className="input-style">
          
          <Field 
            component={Input}
            label="Add New Goal"
            name="goal"
            type="text" 
            id="goal"
            className="textfield"
            aria-required="true"
            
            validate={[required, nonEmpty]}
            
          />
          
        </div>
        <div className="error-style">
          <p>Please enter new goal name, field cannot be blank.</p>
        </div>
        <div className="input-style">
          <button
            type="submit"
            className="submit-button"
          >
            Submit
          </button>
        </div>
      </form>
    )
  } 

}


export default reduxForm({
  form: 'goal',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('goal'))
})(NewGoalForm);
