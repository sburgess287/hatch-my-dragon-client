import React from 'react';

import './app.css'

// see fixes for NewGoal create a goal to fix this form too
export function UpdateGoalForm(props) {
  return (
    <div>
      <form>
        <div className="input-style">
          <label 
            htmlFor="goal">Update {props.name} to</label>
          <input 
            type="text" 
            id="goal" 
            className="textfield"
            value="New Better Goal"
          >

          </input> 
        </div>
        <div className="input-style">
          <input 
            type="submit" 
            className="submit-button">
          </input>
        </div>
      </form>
    </div>
  )
}

export default function UpdateGoal(props) {
  return (
    <div>
      <h2>Update your goal!</h2>
      <p>Change name of the goal and submit it</p>
      <section className="section-class">
      
        <div className="goal-block">
          <UpdateGoalForm name="Running"/>
        </div>
      </section>
    </div>
  )
}