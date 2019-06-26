import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

// import './app.css';

import YellowEggImage from "../EggYellowSmall.png"

export class PageNotFound extends React.Component {
  

  render(){
    if(!this.props.loggedIn) {
      return <Redirect to="/login" />
    }
    
    return (
      <div>
        <h2>Page Not Found</h2>
          <p>Oh no!  This page is not found.</p>
          <section className="section-class">
            <h4>Please click on links above to find your dragon.</h4>
            <img 
              src={YellowEggImage} 
              className="image-css" 
              alt="Yellow Dragon Egg" 
            />
          </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(PageNotFound)