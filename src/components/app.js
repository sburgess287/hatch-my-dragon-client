import React from 'react';
// import {connect} from 'react-redux';
// import {Route, withRouter} from 'react-router-dom';

import './app.css'
import Header from './header'
import NewGoal from './newgoal';
import AddToGoal from './addtogoal';

export default function App() {
  return (
    <div>
      <Header />
      <main aria-live="polite">
        <NewGoal />
        <AddToGoal />

      </main>
    </div>
  )
}