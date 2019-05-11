import React from 'react';

import './app.css'
import EggImage from "../EggPurpleESmall.png"

export default function AddToGoal(){
  return (
    <div>
      <h2>Track your goal!</h2>
      <p>Once you've achieved your goal, click "add to progress" button to get 
        one step closer to Hatching!
      </p>
      <section class="section-class">
        
        <div class="goal-block">
          <p class="tracking-goal">Running</p>
          <button class="tracking-button">Add to Progress</button>
          <img src={EggImage} class="image-css" alt="Purple Dragon Egg" />
        </div>
      </section>
    </div>
  )

}