import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
 
import NewGoalForm from './newgoalform';


export class NewGoal extends React.Component {
  // this is an action that changes state
  // addGoal(goal){
  //   this.props.dispatch(addGoal(goal, this.props.match.params.goalId))
  // }

  goToNewGoalPage(goal) {
    console.log('goToNewGoalPage ran')
    console.log(goal)
    console.log(goal.id)
    // console.dir(event.target.addgoal.value);
    
    // user redux action creator
    // this.props.onAddItem(event.target.addgoal.value);
    // event.preventDefault();
    this.props.history.push(`/goal/${goal.id}`)
  }
  
  render() {
    if(!this.props.loggedIn) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <h2>Create goal!</h2>
        <p>instructions</p>
        <section className="section-class">
          <div className="goal-block">
            <NewGoalForm onSubmit={goal => this.goToNewGoalPage(goal)}
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

export default connect(mapStateToProps)(NewGoal)