import React from 'react';

import './app.css';

export default function GoalsManager(props) {
  const goals = props.goals.map((goal, index) => (
    <li key={index}>
      <section>
        <div className="goal-block">
          <p className="tracking-goal">{goal.name}</p>
          <div className="button-spacing">
            <button className="manage-button">Go to Goal</button>
          </div>
          <div className="button-spacing">
            <button className="manage-button">Edit</button>
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