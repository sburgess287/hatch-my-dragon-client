import React from 'react';




import './app.css'
 
// showing error and props are undefined, will come back to this
export default class NewGoalForm extends React.Component {

  goToNewGoalPage(event, input) {
    console.log('goToNewGoalPage ran')
    console.log(this.props)
    event.preventDefault();
    this.props.history.push(`/newgoal/:${input}`)
  }

  render() {
    return (
      <form onSubmit={e => this.goToNewGoalPage(e)}>
        <div className="input-style">
          <label htmlFor="goal">Add New Goal</label>
          <input 
            type="text" 
            id="goal"
            className="textfield"
            aria-required="true"
            required
            ref={input => this.textInput = input}
          >
          </input>
        </div>
        <div className="error-style">
          <p>Please enter new goal name, field cannot be blank.</p>
        </div>
        <div className="input-style">
          <button
            type="submit"
            className="submit-button"
          >
            Submit
          </button>
        </div>
      </form>
    )
    
  }
  

}

