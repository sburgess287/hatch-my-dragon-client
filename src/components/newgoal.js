import React from 'react';
// import {connect} from 'react-redux';
// import {Route, withRouter} from 'react-router-dom';

import './app.css'

export default function NewGoal() {
  return (
    <div>
      <h2>Create goal!</h2>
      <p>instructions</p>
      <section class="section-class">
        <div class="goal-block">
          <form>
            <div class="input-style">
              <label for="goal">Add New Goal</label>
              <input 
                type="text" 
                id="goal" 
                class="textfield">
              </input>
            </div>
            <div class="input-style">
              <input 
                type="submit" 
                class="submit-button">
              </input>
            </div>
          </form>
        </div>
      </section>
    </div>
  )

}