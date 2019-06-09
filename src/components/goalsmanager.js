import React from 'react';
import {BrowserRouter as Link, Redirect} from 'react-router-dom';

import './app.css';
import { connect } from 'react-redux';
// import { GoalsManagerPageZero } from './goalsmanagerpagezero';

export class GoalsManager extends React.Component {

  goToProgressPage(event) {
    console.log('goToProgressPage')
    event.preventDefault();
    this.props.history.push(`/goal/:goalId/progress`)
  }

   

  render() {
    // if no goals, Redirect to goalsmanagerpagezero component
  //  let goalsLength = this.props.goals.length;
  //  console.log(goalsLength);
  //  if (goalsLength === 0) {
  //    return <Redirect to="/goals/zero"/>
  //  }
  //  console.log(this.props.goals.length)
  //  console.log(this.props.goals.goal)
     
    console.log(this.props.goals);
    const goals = this.props.goals.map((goal, index) => (
      <li key={index}>
        <section>
          <div className="goal-block">
            <p className="tracking-goal">{goal.goal}</p>
            <div className="button-spacing">
              <Link to={`/goal/${goal.id}/progress`}>
                <button
                  // onClick={e => this.goToProgressPage(e)}
                  className="manage-button"
                >
                  Go to Goal
                </button>
              </Link>
            </div>
            <div className="button-spacing">
              <Link 
                to={`/goal/${goal.id}/progress`}
                className="manage-button"
              >
                Go to Goal
              </Link>

                
            
            </div>
            <div className="button-spacing">
              <Link to={`/goal/${goal.id}`}>
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
    console.log(this.props.goals.length);
  
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