import React from 'react';
import {Link, Redirect} from 'react-router-dom';

import '../index.css';
import { connect } from 'react-redux';

export class GoalsManager extends React.Component {

  render() {
    // if no goals, Redirect to goalsmanagerpagezero component
   let goalsLength = this.props.goals.length;
  //  console.log(goalsLength);
   if (goalsLength === 0) {
     return <Redirect to="/goals/zero"/>
   }
  //  console.log(this.props.goals.length)
  //  console.log(this.props.goals.goal)
     
    // console.log(this.props.goals);
    const goals = this.props.goals.map((goal, index) => (
      <li key={index}>
        <section>
          <div className="goal-block">
            <p className="tracking-goal">{goal.goal}</p>
            <div className="manage-link">
              <Link 
                to={`/goal/${goal.id}`} 
                className="goal-progress-link"
              >
                Go to Goal Progress
              </Link>
            </div>
            
            <div className="button-spacing">
              <button className="manage-button">Delete</button>
            </div>       
          </div>
        </section>
      </li>
    ))
    // console.log(this.props.goals.length);
  
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