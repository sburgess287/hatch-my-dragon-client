import React from 'react';
import {connect} from 'react-redux';
import './app.css'
import EggImage from "../EggPurpleESmall.png"


// Todo: add onclick to add to the props.goals.value number
// then show the Achieved goal page

export function AddToGoalForm(props) {
  // console.log('inside AddToGoalForm component')
  // console.log(props)
  // console.log(props.goal.count)
  
  return (
    <div className="goal-block">
      <p className="tracking-goal">{props.goal.goal}</p>
      <button 
        className="tracking-button"
        
        onClick={props.triggerUpdatedCount}
      >
        Add to Progress
      </button>
      <img 
        src={EggImage} 
        className="image-css" 
        alt="Purple Dragon Egg" 
      />
    </div>
  )

}


AddToGoalForm.defaultProps = {
  count: 0
}


export const mapStateToProps = state => ({
  count: state.count
})

export default connect(mapStateToProps)(AddToGoalForm)