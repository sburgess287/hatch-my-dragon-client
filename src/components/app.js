import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css'
import Header from './header'
import NewGoal from './newgoal';
import AddToGoal from './addtogoal';
import AchievedGoal from './achievedgoalpage';
import UpdateGoal from './updategoal';
import GoalsManagerPage from './goalsmanagerpage';
import GoalsManagerPageZero from './goalsmanagerpagezero';
import Login from './login';
import Registration from './registration';

export default function App(props) {
  return (
    <Router>
      <div>
        <Header />
        <main aria-live="polite">
          {/* TODO: decide what I want landing page to be; login or registration */}
          <Route exact path="/" component={Registration} />
          {/* <Route exact path="/" component={NewGoal} /> */}
          {/* TODO: add redirect for login */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/goal" component={NewGoal}/>
          <Route exact path="/goal/:goalId" component={UpdateGoal} />
          <Route path="/goal/:goalId/progress" component={AddToGoal} />
          <Route path="/goal/:goalId/hatched" component={AchievedGoal}/>
          <Route path="/goals-list" component={GoalsManagerPage} />
          <Route path="/goal/:goalId/zero" component={GoalsManagerPageZero}/>

        </main>
      </div>
    </Router>
  )
}