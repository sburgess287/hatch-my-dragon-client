import React from 'react';
// import {connect} from 'react-redux';
// import {Route, withRouter} from 'react-router-dom';

import './app.css'
// const Input = {
//   "type": "text",
//   "id": "goal",
//   "className": "textfield",
//   "value" : "value",
    //  "style": "textfield" ??
//  }

// const SubmitButton = {
//   "type":"submit",
//   "className": "submit-button"
//  "style": "submit-button" ?? objects not needed

// }
 
// add programatic navigation: .push

// this may need to move into new directory, 
// wanted to see if I'm on right path 1st
export function NewGoalForm(props) {
  return (
    <form>
      <div className="input-style">
        <label htmlFor="goal">Add New Goal</label>
        <input 
          type="text" 
          id="goal"
          className="textfield"
          // value={props.value}
        >
        </input>
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

export default function NewGoal(props) {
  return (
    <div>
      <h2>Create goal!</h2>
      <p>instructions</p>
      <section className="section-class">
        <div className="goal-block">
          <NewGoalForm/>
        </div>
      </section>
    </div>
  )

}