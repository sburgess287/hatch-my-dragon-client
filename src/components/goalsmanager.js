import React from 'react';
import {Link} from 'react-router-dom';
import GoalsManagerPageZero from './goalsmanagerpagezero';

import '../index.css';
import { connect } from 'react-redux';

export class GoalsManager extends React.Component {

  render() {
    // if no goals, show Goalsmanagerpagezero component
   let goalsLength = this.props.goals.length;
   if (goalsLength === 0) {
     return <GoalsManagerPageZero/>
   }
  
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