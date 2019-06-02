import {createStore, combineReducers, applyMiddleware} from 'redux'

import {hatchmydragonReducer} from './reducers';
import {authReducer} from './reducers/auth';
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadAuthToken } from './local-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth';



// compiles, no connectRouter passed in
const store = createStore(
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
const authToken = loadAuthToken();
if(authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;


// Todo: delete later
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


