import React from 'react';
// import {connect} from 'react-redux';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './app.css'
 
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
          aria-describedby="required-message" 
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