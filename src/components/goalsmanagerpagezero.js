import React from 'react';

import './app.css';

export default class GoalsManagerPageZero extends React.Component {
  goToCreateGoalsPage(event) {
    console.log('goToCreateGoalsPage')
    event.preventDefault();
    this.props.history.push(`/goal`)
  }

  render() {
    return (
      <div>
        <h2>Goals Manager</h2>
        <p>Oh no!  You need to create a goal first!</p>
        <section className="section-class">
          <div className="goal-block">
            <button 
              onClick={e => this.goToCreateGoalsPage(e)}
              className="manage-button"
            >
              Go to Create Goals Page
            </button>
          </div>
        </section>
      </div>
    )

  }
  
}