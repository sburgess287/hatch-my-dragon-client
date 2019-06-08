import React from 'react';
import {BrowserRouter as Link, Route, Redirect} from 'react-router-dom';

import './app.css';
import { connect } from 'react-redux';
import { GoalsManagerPageZero } from './goalsmanagerpagezero';

export class GoalsManager extends React.Component {

  goToProgressPage(event) {
    console.log('goToProgressPage')
    event.preventDefault();
    this.props.history.push(`/goal/:goalId/progress`)
  }

   

  render() {
    // if no goals, display goalsmanagerpagezero component
   let goalsLength = this.props.goals.length;
   console.log(goalsLength);
   if (goalsLength === 0) {
     return <Redirect to="/goals/zero"/>
   }
     

    const goals = this.props.goals.map((goal, index) => (
      <li key={index}>
        <section>
          <div className="goal-block">
            <p className="tracking-goal">{goal.name}</p>
            <div className="button-spacing">
              <Link to={`/goal/${1}/progress`}>
                <button
                  // onClick={e => this.goToProgressPage(e)}
                  className="manage-button"
                >
                  Go to Goal
                </button>
              </Link>
            </div>
            <div className="button-spacing">
              <Link to={`/goal/${2}`}>
                Edit
              </Link>
            </div>
            <div className="button-spacing">
              <button className="manage-button">Delete</button>
            </div>       
          </div>
        </section>
  
      </li>
    ))
    console.log(this.props);
  
    return ( 
        <div>
          <h2>Goals Manager</h2>
          <p>A complete list of your dragons and eggs</p>
          <ul>
            {goals}
          </ul>
        </div>
    )
  }
}


GoalsManager.defaultProps = {
  goals : []

}

const mapStateToProps = state => ({
  goals: state.hmd.goals
})

export default connect(mapStateToProps)(GoalsManager)