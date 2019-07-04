import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getSpecificGoal, addProgressToGoal} from '../actions/index.js'
import AddToGoalForm from './addtogoalform'

export class AddToGoal extends React.Component {

  static defaultProps = {
    goal: [], 
    match : { 
      params: {}
    },
    getSpecificGoal : () => {},
    addProgressToGoal: () => {}
  }

  componentDidMount(){
    this.props.getSpecificGoal(this.props.match.params.id);
  }
  
  addToGoalTotal = () => {
    this.props.addProgressToGoal(this.props.goal)
  }

  render(){

    if(!this.props.loggedIn) {
      return <Redirect to="/login" />
    }
    
    return (
      <div>
        <h2>Track your goal!</h2>
        <section className="section-class">
          <AddToGoalForm 
            goal={this.props.goal}
            count={this.props.goal.count}  
            triggerUpdatedCount={this.addToGoalTotal}
          />
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  goals: state.hmd.goals,
  goal: state.hmd.goalToEdit, 
  count: state.hmd.goalToAddProgress
});

export default connect(
  mapStateToProps, 
  {getSpecificGoal, 
    addProgressToGoal})(AddToGoal);