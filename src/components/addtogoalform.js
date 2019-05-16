import React from 'react';

import './app.css'
import EggImage from "../EggPurpleESmall.png"

// Todo: add onclick to add to the props.goals.value number
// then show the Achieved goal page

export default function AddToGoalForm(props) {
  console.log(props.goals.name)
  console.log(props.goals.val)
  
  return (
    <div className="goal-block">
      <p className="tracking-goal">{props.goals.name}</p>
      <button 
        className="tracking-button"
        val={props.goals.val}
      >
        Add to Progress
      </button>
      <img src={EggImage} className="image-css" alt="Purple Dragon Egg" />
    </div>
  )

}