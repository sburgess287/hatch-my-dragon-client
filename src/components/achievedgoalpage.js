import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import './app.css'

import YellowEggImage from "../EggYellowSmall.png"


export class AchievedGoal extends React.Component {

  render() {
    if(!this.props.loggedIn) {
      return <Redirect to="/login" />
    }

    return (
      <div>
        <h2>You hatched your Dragon!</h2>
        <p>Congratulatory text</p>
        <section className="section-class">
          <div className="goal-block">
            <h3>Congratulations! You have achieved your goal!</h3>
            <h4>Still need to draw a dragon for this page</h4>
            <img 
              src={YellowEggImage} 
              className="image-css" 
              alt="Yellow Dragon Egg" 
            />
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