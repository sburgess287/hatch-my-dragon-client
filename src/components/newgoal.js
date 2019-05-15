import React from 'react';
import {connect} from 'react-redux';

// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
 
import NewGoalForm from './newgoalform';


export class NewGoal extends React.Component {
  // this is an action that changes state
  // addGoal(goal){
  //   this.props.dispatch(addGoal(goal, this.props.match.params.goalId))
  // }

  goToNewGoalPage(event) {
    console.log('goToNewGoalPage ran')
    console.log(event)
    event.preventDefault();
    this.props.history.push(`/goal/:goalId`)
  }
  
  render() {
    return (
      <div>
        <h2>Create goal!</h2>
        <p>instructions</p>
        <section className="section-class">
          <div className="goal-block">
            <NewGoalForm onSubmit={e => this.goToNewGoalPage(e)}
              // onAdd={goal => this.addGoal(goal)}
            />
          </div>
        </section>
      </div>
    )

  }
  

}

export default connect()(NewGoal)