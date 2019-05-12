import React from 'react';
// import {connect} from 'react-redux'

import GoalsManager from './goalsmanager';
// import {addGoal} from  '../actions'

const goals = [
  {
    name: 'Running',
    id: 'id'
  }, 
  {
    name: 'Play Violin',
    id: 'id'
  }, 
  {
    name: 'Code Capstone',
    id: 'id'
  }

]

export default function GoalsManagerPage() {
  return (
    <div>
      <GoalsManager goals={goals} />
    </div>
  )
}

// export class GoalsManagerPage extends React.Component() {
//   addGoal(name){
//     this.props.dispatch(addGoal(name))
//   }
//   render() {
//     return (
//       <div>
//         <GoalsManager  />
//       </div>
//     )
//   }
// }
// // error state is undefined, so pausing this because app is supposed to be stateless currently
// const mapStateToProps = (state, props => {

// })

// export default connect(mapStateToProps)(GoalsManagerPage)