import React from 'react';
// import {connect} from 'react-redux';
// import {Route, withRouter} from 'react-router-dom';

import './app.css'

export default function App() {
  return (
    <div>
      <header>
      <h1>Hatch My Dragon</h1>
      </header>
      <main aria-live="polite">
        <nav class="nav-bar">
          <button class="nav-button">Create Goal</button>
          <button class="nav-button">Goals Manager</button>
          <button class="nav-button">Logout</button>
        </nav>
        <h2>Create goal!</h2>
        <p>instructions</p>

        <section class="section-class">
          <div class="goal-block">
            <form>
              <div class="input-style">
                <label for="goal">Add New Goal</label>
                <input type="text" id="goal" class="textfield"></input>
              </div>
              <div class="input-style">
                <input type="submit" class="submit-button"></input>
              </div>
            </form>
          </div>
        </section>

      </main>
      <footer>
        <p>Footer Text</p>
      </footer>
      <script src="script.js"></script>
      

    </div>
    
    
    
  );

}