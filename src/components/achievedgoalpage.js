import React from 'react';

import './app.css'

import YellowEggImage from "../EggYellowSmall.png"


export default function AchievedGoal(){
  return (
    <div>
      <h2>You hatched your Dragon!</h2>
      <p>Congratulatory text</p>
      <section className="section-class">
        <div className="goal-block">
          <h3>Congratulations! You have achieved your goal!</h3>
          <h4>Still need to draw a dragon for this page</h4>
          {/* <!-- <img src="dragonegg.jpg"> --> */}
          <img src={YellowEggImage} className="image-css" alt="Yellow Dragon Egg" />
        </div>
      </section>
    </div>
  )
}