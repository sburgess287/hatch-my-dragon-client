import React from 'react';
// import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './app.css'
import Header from './header'
import NewGoal from './newgoal';
import AddToGoal from './addtogoal';

export default function App(props) {
  return (
    <Router>
      <div>
        <Header />
        <main aria-live="polite">
          <Route exact path="/" component={NewGoal} />
          <Route exact path="/goal/:goalId" component={AddToGoal} />
          <AddToGoal />
          

        </main>
      </div>
    </Router>
  )
}