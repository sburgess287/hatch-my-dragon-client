import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import './app.css'
import Header from './header'
import NewGoal from './newgoal';
import AddToGoal from './addtogoal';
import AchievedGoal from './achievedgoalpage';
// import UpdateGoal from './updategoal';
import GoalsManagerPage from './goalsmanagerpage';
import GoalsManagerPageZero from './goalsmanagerpagezero';
import Login from './login';
// import Registration from './registration-page';
import PageNotFound from './pagenotfound';
import Registration from './registrationwithform';
// import {refreshAuthToken} from '../actions/auth'
import Footer from './footer.js';

export class App extends React.Component {

  // componentDidUpdate(prevProps) {
  //   if (!prevProps.loggedIn && this.props.loggedIn) {
  //     // When we are logged in, refresh the auth token periodically
  //     this.startPeriodicRefresh();
  //   } else if (prevProps.loggedIn && !this.props.loggedIn) {
  //     // Stop refreshing when we log out
  //     this.stopPeriodicRefresh();
  //   }
  // }

  // componentWillUnmount() {
  //   this.stopPeriodicRefresh();
  // }

  // startPeriodicRefresh() {
  //   this.refreshInterval = setInterval(
  //     () => this.props.dispatch(refreshAuthToken()),
  //     60 * 60 * 1000 // One hour
  //   );
  // }

  // stopPeriodicRefresh() {
  //   if (!this.refreshInterval) {
  //     return;
  //   }
  //   clearInterval(this.refreshInterval);
  // }

  render() {
    return (
      
      <div>
        <Route path="/" component={Header} />
        <main aria-live="polite">
          <Switch>
            {/* TODO: decide what I want landing page to be; login or registration */}
            <Route exact path="/" component={Login} />
            <Route path="/registration" component={Registration} />
            {/* <Route exact path="/" component={NewGoal} /> */}
            {/* TODO: add redirect to */}
            {/* <Route path="/login" component={Login} /> */}
            <Route exact path="/goal" component={NewGoal}/>
            {/* <Route path="/goal/:id/update" component={UpdateGoal} /> */}
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