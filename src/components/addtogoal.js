import React from 'react';

import './app.css'

import AddToGoalForm from './addtogoalform'

// TODO: connect components using redux mapstatetoprops: addtogoalform, line 33 component only
// add logic for different pictures based on value when state is added

export default function AddToGoal(props){

  const goal = 
    {
      name: 'Running',
      id: 'id',
      val: 4
    }
  
  return (
    <div>
      <h2>Track your goal!</h2>
      <p>Once you've achieved your goal, click "add to progress" button to get 
        one step closer to Hatching!
      </p>
      <section className="section-class">
        <AddToGoalForm goals={goal} />
      </section>
    </div>
  )

}