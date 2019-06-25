import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import './app.css'

import PurpleDragon from "../Purpledragonsmall.png"

export class AchievedGoal extends React.Component {

  render() {
    if(!this.props.loggedIn) {
      return <Redirect to="/login" />
    }

    return (
      <div>
        <h2>You hatched your Dragon!</h2>
        <section className="section-class">
          <div className="goal-block">
            <img 
              src={PurpleDragon} 
              className="image-css" 
              alt="Purple Dragon" 
            />
            <h3>Congratulations! You have achieved your goal!</h3>
            <h4>You can keep adding progress, or start a new goal!</h4>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AchievedGoal)