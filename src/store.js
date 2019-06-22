import {createStore, combineReducers, applyMiddleware} from 'redux'

import {hatchmydragonReducer} from './reducers';
import {authReducer} from './reducers/auth';
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadAuthToken } from './local-storage';
import { setAuthToken, authSuccess, refreshAuthToken } from './actions/auth';
import jwtDecode from 'jwt-decode';


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
  const decodedToken = jwtDecode(authToken); // import jwtDecode
  store.dispatch(setAuthToken(token));
  store.dispatch(authSuccess(decodedToken.user));
  // store.dispatch(refreshAuthToken());
}


export default store;



