import React from 'react';

import './app.css'
import EggImage from "../EggPurpleESmall.png"

export default function AddToGoal(){
  return (
    <div>
      <section class="section-class">
        <div class="goal-block">
          <p class="tracking-goal">Running</p>
          <button class="tracking-button">Hatch Dragon Progress?</button>
    
          {/* <!-- <img src="dragonegg.jpg"> --> */}
          <img src={EggImage} class="image-css" alt=" helloPurple Dragon Egg" />
        </div>
      </section>
    </div>
  )

}