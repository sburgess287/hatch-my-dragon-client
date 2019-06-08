import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './app.css';

export class GoalsManagerPageZero extends React.Component {
  goToCreateGoalsPage(event) {
    console.log('goToCreateGoalsPage')
    event.preventDefault();
    this.props.history.push(`/goal`)
  }

  render() {
    // if(!this.props.loggedIn) {
    //   return <Redirect to="/login" />
    // }
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

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(GoalsManagerPageZero)