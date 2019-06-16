import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getSpecificGoal} from '../actions/index.js'

import './app.css'

import AddToGoalForm from './addtogoalform'

// TODO: connect components using redux mapstatetoprops: addtogoalform, line 33 component only
// add logic for different pictures based on value when state is added


export class AddToGoal extends React.Component {

  componentDidMount(){
    this.props.dispatch(getSpecificGoal(this.props.match.params.id));
  }
  
  addToGoalTotal(event) {
    console.log('addToGoalTotal ran')
  }

  render(){

    if(!this.props.loggedIn) {
      return <Redirect to="/login" />
    }

    // inputs : 
    // this.props.goals (array of objects)
    // this.props.match.params.id (string)
    
    // what we need:
    // current goal that matches id (object)

    // find [array -> element]
    // for loop [use break]    

    // const goal = this.props.goals.find((goal) => {
    //   return this.props.match.params.id === goal.id;
    // })


    return (
      <div>
        <h2>Track your goal!</h2>
        <p>Once you've achieved your goal, click "add to progress" button to get 
          one step closer to Hatching!
        </p>
        <section className="section-class">
          <AddToGoalForm 
            goal={this.props.goal}
            onClick={(event) => this.addToGoalTotal(event)}/>
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
  goals: state.hmd.goals,
  goal: state.hmd.goalToEdit

});

export default connect (mapStateToProps)(AddToGoal);