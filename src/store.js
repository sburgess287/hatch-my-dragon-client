import {createStore, combineReducers, applyMiddleware} from 'redux'

import {hatchmydragonReducer} from './reducers';
import {authReducer} from './reducers/auth';
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


// compiles, no connectRouter passed in
export default createStore(
  combineReducers({
      form: formReducer,
      auth: authReducer,
      hmd: hatchmydragonReducer,
      
  }),
  composeWithDevTools(applyMiddleware(thunk)),
  
);

// localstorage ; react needs to run render functions again
// update state so react rerenders that displays logged out
// do somet


// https://github.com/supasate/connected-react-router
// export default (history) => createStore(
//   combineReducers({
//     form: formReducer,
//     auth: authReducer,
//     hatchmydragonReducer,
//     router: connectRouter(history),
    
//   }),
//   composeWithDevTools(applyMiddleware(thunk))
// ) 
