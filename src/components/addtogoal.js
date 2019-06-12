import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getSpecificGoal} from '../actions/index.js'

import './app.css'

import AddToGoalForm from './addtogoalform'

// TODO: connect components using redux mapstatetoprops: addtogoalform, line 33 component only
// add logic for different pictures based on value when state is added

{/* <AddToGoalForm goals={goal} /> */}
export class AddToGoal extends React.Component {

  componentDidMount(){
    // this.props.dispatch(getSpecificGoal()); // error
  }
  
  
  addToGoalTotal(event) {
    console.log('addToGoalTotal ran')
  }

  render(){

    if(!this.props.loggedIn) {
      return <Redirect to="/login" />
    }
    
    
    return (
      <div>
        <h2>Track your goal!</h2>
        <p>Once you've achieved your goal, click "add to progress" button to get 
          one step closer to Hatching!
        </p>
        <section className="section-class">
          <AddToGoalForm onClick={e => this.addToGoalTotal(e)}/>
        </section>
      </div>
    )
  }
}

AddToGoal.defaultProps = {
  goals: []
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  goals: state.hmd.goals
});

export default connect (mapStateToProps)(AddToGoal);