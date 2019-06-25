import React from 'react';
import {connect} from 'react-redux';
import './app.css'
import EggImage from "../EggPurpleESmall.png"
// import EggImage2 from "../EggYellowSmall.png"
import PurpleEggFirst from "../PurpleEggFirst.png"
import  AchievedGoal  from './achievedgoalpage';


export function AddToGoalForm(props) {
  
  let image1;
  let image2;
  let achievedDragon;
  if (props.goal.count <=5) {
     image1 = (
      <img
        src={PurpleEggFirst} 
        className="image-css" 
        alt="Purple Dragon Egg" 
      />
    ) 
  } else if (props.goal.count >= 6 && props.goal.count <= 10) {
    image2 = (
      <img
        src={EggImage} 
        className="image-css" 
        alt="Purple Dragon Egg Larger" 
      />
    )
  } else if (props.goal.count >= 11) {
     achievedDragon = (
      <div>
        <AchievedGoal />
      </div>
      
    )
  }
  
  return (
    <div className="goal-block">
      <p className="tracking-goal">{props.goal.goal}</p>
      <p>Number of times you've added to this goal: {props.goal.count}</p>
      {achievedDragon}
      <button 
        className="tracking-button"
        onClick={props.triggerUpdatedCount}
      >
        Add to Progress
      </button>
      {image1}
      {image2}
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