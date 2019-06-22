import React from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';
import { fetchGoals } from '../actions/index.js';
import GoalsManager from './goalsmanager';

export class GoalsManagerPage extends React.Component {
  componentDidMount() {
    // console.log(fetchGoals())
    this.props.dispatch(fetchGoals());
  }

  render() {
    if(!this.props.loggedIn) {
      return <Redirect to="/login" />
    }
      
    return (
      <div>
        <GoalsManager />
      </div>
    )
  } 
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(GoalsManagerPage);