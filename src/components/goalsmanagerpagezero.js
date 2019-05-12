import React from 'react';

import './app.css';

// TODO: update button with Link to Create Goals page
// import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
// add Link component, mapStateToProps, export default connect
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