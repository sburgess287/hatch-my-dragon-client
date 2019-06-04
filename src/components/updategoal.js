import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import './app.css'

export class UpdateGoal extends React.Component {

  // update goal name and then go to the add to goal page to add progress
  updateGoalName(event) {
    event.preventDefault();
    this.props.history.push(`goal/:goalId`)
  }

  render() {
    if(!this.props.loggedIn) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <h2>Update your goal!</h2>
        <p>Change name of the goal and submit it</p>
        <section className="section-class">
        
          <div className="goal-block">
            {/* <UpdateGoalForm name="Running"/> */}
            <form onSubmit={e => this.updateGoalName(e)}>
              <div className="input-style">
                <label 
                  htmlFor="goal">Update to</label>
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
                <input
                  type="submit" 
                  className="submit-button">
                </input>
              </div>
          </form>
            </div>
        </section>
      </div>
    )

  }
  
}

export default connect()(UpdateGoal)