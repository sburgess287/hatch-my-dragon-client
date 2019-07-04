import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty } from '../validators';
import {createGoal} from '../actions/index'
 
export class NewGoalForm extends React.Component {

  static defaultProps = {
    handleSubmit : () => {}
  }

  onSubmit(values) {
    return this.props
    .dispatch(createGoal(values.goal))
    .then((goal) => this.props.onSubmit(goal)) 
  }

  render() {
    return (
      <form 
        onSubmit={this.props.handleSubmit(values => 
          this.onSubmit(values)
        )}
      >
        <div className="input-style">
          <Field 
            component={Input}
            label="Add New Goal"
            name="goal"
            type="text" 
            id="goal"
            className="textfield"
            aria-required="true"
            validate={[required, nonEmpty]}
          />
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

export default reduxForm({
  form: 'goal',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('goal'))
})(NewGoalForm);
