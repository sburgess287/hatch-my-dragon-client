import React from 'react';
// import {connect} from 'react-redux';

// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
 
import NewGoalForm from './newgoalform';


export default class NewGoal extends React.Component {
  // this is an action that changes state
  // addGoal(goal){
  //   this.props.dispatch(addGoal(goal, this.props.match.params.goalId))
  // }
  
  render() {
    return (
      <div>
        <h2>Create goal!</h2>
        <p>instructions</p>
        <section className="section-class">
          <div className="goal-block">
            <NewGoalForm 
              // onAdd={goal => this.addGoal(goal)}
            />
          </div>
        </section>
      </div>
    )

  }
  

}