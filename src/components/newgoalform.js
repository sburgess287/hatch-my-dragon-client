import React from 'react';

import './app.css'
 
// showing error and props are undefined, will come back to this
// not sure how to make this work without importing actions to get the value of submit form
// should this component be getting the value of the submit form rather than pushing a new route?

export default class NewGoalForm extends React.Component {

   


  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="input-style">
          <label htmlFor="goal">Add New Goal</label>
          <input 
            type="text" 
            id="goal"
            className="textfield"
            aria-required="true"
            required
            name="addgoal"
          >
          </input>
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



