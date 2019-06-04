import React from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';



import GoalsManager from './goalsmanager';
// import GoalsManagerPageZero from './goalsmanagerpagezero';

// import {addGoal} from  '../actions'

// const goals = [
//   {
//     name: 'Running',
//     id: 'id'
//   }, 
//   {
//     name: 'Play Violin',
//     id: 'id'
//   }, 
//   {
//     name: 'Code Capstone',
//     id: 'id'
//   }

// ]

export class GoalsManagerPage extends React.Component {

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



export default connect(mapStateToProps)(GoalsManagerPage)