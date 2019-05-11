import React from 'react';

import './app.css'
import EggImage from "../EggPurpleESmall.png"



// add logic for different pictures based on value when state is added
export function AddToGoalForm(props) {
  return (
    <div className="goal-block">
      <p className="tracking-goal">{props.name}</p>
      <button 
        className="tracking-button"
        val={props.val}
      >
        Add to Progress
      </button>
      <img src={EggImage} className="image-css" alt="Purple Dragon Egg" />
    </div>
  )

}

export default function AddToGoal(props){
  return (
    <div>
      <h2>Track your goal!</h2>
      <p>Once you've achieved your goal, click "add to progress" button to get 
        one step closer to Hatching!
      </p>
      <section className="section-class">
        <AddToGoalForm name="Running" val="8" />
      </section>
    </div>
  )

}