import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getSpecificGoal, addProgressToGoal} from '../actions/index.js'

// import './app.css'

import AddToGoalForm from './addtogoalform'

// TODO: connect components using redux mapstatetoprops: addtogoalform, line 33 component only
// add logic for different pictures based on value when state is added

export class AddToGoal extends React.Component {

  static defaultProps = {
    goal: [], 
    match : { 
      params: {}
    },
    getSpecificGoal : () => {},

  }

  

  componentDidMount(){
    // console.log('componentDidMount here')
    // console.log(this.props)
    this.props.getSpecificGoal(this.props.match.params.id);
  }
  
  addToGoalTotal = () => {  // this binds the function
    this.props.dispatch(addProgressToGoal(this.props.goal));
  }

  render(){

    if(!this.props.loggedIn) {
      return <Redirect to="/login" />
    }
    
    // console.log(this.props.goal.count)

    // once tracking # of clicks and adding to total,
    // add logic for 0-5 clicks show 1 image
    // 6-10 clicks show second image
    // 11th click show achieved goal page
   
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
        {/* <p>Once you've achieved your goal, click "add to progress" button to get 
          one step closer to Hatching!
        </p> */}
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

// AddToGoal.defaultProps = {
//   goals: []
// }

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  goals: state.hmd.goals,
  goal: state.hmd.goalToEdit, 
  count: state.hmd.goalToAddProgress
});
// binds getSpecificGoal to dispatch
export default connect(mapStateToProps, {getSpecificGoal})(AddToGoal);