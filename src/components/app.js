import React from 'react';

import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import './app.css'
import Header from './header'
import NewGoal from './newgoal';
import AddToGoal from './addtogoal';
import AchievedGoal from './achievedgoalpage';
import UpdateGoal from './updategoal';
import GoalsManagerPage from './goalsmanagerpage';
import GoalsManagerPageZero from './goalsmanagerpagezero';
import Login from './login';
// import Registration from './registration';
import PageNotFound from './pagenotfound';
import Registration from './registrationwithform'
import {storeAuthInfo} from '../actions'

export class App extends React.Component {

  componentDidUpdate(prevProps) {
    if(!prevProps.loggedIn && this.props.loggedIn){
      // storeAuthInfo();
      console.log('componentDidUpdate Ran')
    }
  }

  render() {
    return (
      <div>
        <Route path="/goals-list" component={Header} />
        <main aria-live="polite">
          <Switch>
            {/* TODO: decide what I want landing page to be; login or registration */}
            <Route exact path="/" component={Registration} />
            {/* <Route exact path="/" component={NewGoal} /> */}
            {/* TODO: add redirect to */}
            <Route path="/login" component={Login} />
            <Route exact path="/goal" component={NewGoal}/>
            <Route path="/goal/:goalId/update" component={UpdateGoal} />
            <Route path="/goal/:goalId/hatched" component={AchievedGoal}/>
            <Route exact path="/goal/:goalId" component={AddToGoal} />
            <Route path="/goals-list" component={GoalsManagerPage} />
            <Route path="/goal/:goalId/zero" component={GoalsManagerPageZero}/>
            <Route component={PageNotFound}/>
          </Switch>
        </main>
      </div>
    
    )

  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));