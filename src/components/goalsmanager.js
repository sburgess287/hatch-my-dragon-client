import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';


import './app.css';
import { connect } from 'react-redux';

// Links are not rendering, not sure the urls are correct (Goal Progress/Edit)
// tried changing to a click event and there's errors there also 
// Now the urls update but the page doesn't re-render unless I refresh page

export class GoalsManager extends React.Component {

  goToProgressPage(event) {
    console.log('goToProgressPage')
    event.preventDefault();
    this.props.history.push(`/goal/:goalId/progress`)
  }

  render() {
    const goals = this.props.goals.map((goal, index) => (
      <li key={index}>
        <section>
          <div className="goal-block">
            <p className="tracking-goal">{goal.name}</p>
            <div className="button-spacing">
              <Link to="/goal/:goalId/progress">
                <button
                  // onClick={e => this.goToProgressPage(e)}
                  className="manage-button"
                >
                  Go to Goal
                </button>
              </Link>
            </div>
            <div className="button-spacing">
              <Link to="/goal/:goalId">
                <button 
                  className="manage-button"
                >
                  Edit
                </button>
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
      <Router>
        <div>
          <h2>Goals Manager</h2>
          <p>A complete list of your dragons and eggs</p>
          <ul>
            {goals}
          </ul>
  
        </div>

      </Router>
      
    )

  }
  
}

// not sure if I need this
GoalsManager.defaultProps = {
  goal : {
    name: 'Running',
    id: 'id'
  }, 

}

const mapStateToProps = state => ({
  goals: state.goals
})

export default connect(mapStateToProps)(GoalsManager)