import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './header'
import NewGoal from './newgoal';
import AddToGoal from './addtogoal';
import AchievedGoal from './achievedgoalpage';
import GoalsManagerPage from './goalsmanagerpage';
import GoalsManagerPageZero from './goalsmanagerpagezero';
import Login from './login';
import PageNotFound from './pagenotfound';
import Registration from './registrationwithform';
import Footer from './footer.js';

export class App extends React.Component {

  render() {
    return ( 
      <div>
        <Route path="/" component={Header} />
        <main aria-live="polite">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/registration" component={Registration} />  
            <Route exact path="/goal" component={NewGoal}/>
            <Route path="/goal/:id/hatched" component={AchievedGoal}/>
            <Route exact path="/goal/:id" component={AddToGoal} />
            <Route path="/goals/zero" component={GoalsManagerPageZero}/>
            <Route path="/goals" component={GoalsManagerPage} />
            <Route path="/*" component={PageNotFound}/>
          </Switch>
          <Footer/>
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