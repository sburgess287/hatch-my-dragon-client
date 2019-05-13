import React from 'react';
// import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './app.css'
import Header from './header'
import NewGoal from './newgoal';
import AddToGoal from './addtogoal';
import AchievedGoal from './achievedgoalpage';
import UpdateGoal from './updategoal';
import GoalsManagerPage from './goalsmanagerpage';
import { GoalsManagerPageZero } from './goalsmanagerpagezero';
import Login from './login';
import Registration from './registration';

export default function App(props) {
  return (
    <Router>
      <div>
        <Header />
        <main aria-live="polite">
          <Route exact path="/" component={NewGoal} />
          <Route path="/goal/:goalId" component={AddToGoal} />
          <AddToGoal />
          <AchievedGoal />
          <UpdateGoal />
          <GoalsManagerPageZero />
          <GoalsManagerPage />
          <Login />
          <Registration />



        </main>
      </div>
    </Router>
  )
}