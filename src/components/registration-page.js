// import React from 'react';
// import {connect} from 'react-redux';
// import {Link, Redirect} from 'react-router-dom'
// import { Field, reduxForm, focus } from 'redux-form';
// import './app.css'
// import RegistrationForm from './registration-form';


// export function Registration(props) {

//   // if we are logged in, redirect to NewGoal page
//   // 
//   if (props.loggedIn) {
//     return <Redirect to="/goal" />
//   }

//   return (
//     <div>
//       <h2>Signup</h2>
//       <section>
//         Section 1 Landing Page: welcome text; Register here
//       </section>

//       <section>
//         <RegistrationForm/>
//       </section>

//       <section>
//         <div>
//           <Link
//             to='/login'
//             className="nav-link"
//           >
//             Go to Login Page
//           </Link> 
//         </div>
//       </section>
//     </div>
//   )
  
// }


// const mapStateToProps = state => ({
//   loggedIn: state.auth.currentUser !== null
// });

// export default connect(mapStateToProps)(Registration);