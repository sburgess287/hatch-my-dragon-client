import React from 'react';

import './app.css';

// TODO: update button with href of Create Goals page
export function GoalsManagerPageZero() {
  return (
    <div>
      <h2>Goals Manager</h2>
      <p>Oh no!  You need to create a goal first!</p>
      <section className="section-class">
        <div className="goal-block">
          <button className="manage-button">Go to Create Goals Page</button>
        </div>
      </section>

    </div>
  )
}