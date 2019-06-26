import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';

// import './app.css';


export class GoalsManagerPageZero extends React.Component {

  render() {
    if(!this.props.loggedIn) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <h2>Goals Manager</h2>
        <p>Oh no!  You need to create a goal first!</p>
        <section className="section-class">
          <div className="goal-block">
            <Link
              to="/goal"
              className="manage-link-go-add-goal"
            >
              Go to Create Goals Page
            </Link>
          </div>
        </section>
      </div>
    )
  }  
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(GoalsManagerPageZero)