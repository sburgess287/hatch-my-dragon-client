import React from 'react';

import './app.css'
 
// showing error and props are undefined, will come back to this
// not sure how to make this work without importing actions to get the value of submit form
// should this component be getting the value of the submit form rather than pushing a new route?
// changed this component to stateless
export default class NewGoalForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    console.dir(event.target.listitem.value);
    this.props.onAddItem(event.target.listitem.value);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-style">
          <label htmlFor="goal">Add New Goal</label>
          <input 
            type="text" 
            id="goal"
            className="textfield"
            aria-required="true"
            required
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



