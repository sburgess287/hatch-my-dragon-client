import React from 'react';
import {connect} from 'react-redux'

import './app.css'

// see fixes for NewGoal create a goal to fix this form too
// export function UpdateGoalForm(props) {
//   return (
//     <div>
//       <form>
//         <div className="input-style">
//           <label 
//             htmlFor="goal">Update {props.name} to</label>
//           <input 
//             type="text" 
//             id="goal" 
//             className="textfield"
//             aria-required="true"
//             required
//           >
//           </input> 
//         </div>
//         <div className="error-style">
//           <p>Please enter new goal name, field cannot be blank.</p>
//         </div>
//         <div className="input-style">
//           <input
//             type="submit" 
//             className="submit-button">
//           </input>
//         </div>
//       </form>
//     </div>
//   )
// }


// this is not the correct url, going to http://localhost:3000/newgoal/addtogoal/goalId
export default class UpdateGoal extends React.Component {

  newGoalName(event) {
    event.preventDefault();
    this.props.history.push(`addtogoal/:goalId`)
  }

  render() {
    return (
      <div>
        <h2>Update your goal!</h2>
        <p>Change name of the goal and submit it</p>
        <section className="section-class">
        
          <div className="goal-block">
            {/* <UpdateGoalForm name="Running"/> */}
            <form onSubmit={e => this.newGoalName(e)}>
              <div className="input-style">
                <label 
                  htmlFor="goal">Update to</label>
                <input 
                  type="text" 
                  id="goal" 
                  className="textfield"
                  aria-required="true"
                  required
                  
                >
                </input> 
              </div>
              <div className="error-style">
                <p>Please enter new goal name, field cannot be blank.</p>
              </div>
              <div className="input-style">
                <input
                  type="submit" 
                  className="submit-button">
                </input>
              </div>
          </form>
            </div>
        </section>
      </div>
    )

  }
  
}