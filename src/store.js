import {createStore, combineReducers} from 'redux'

import {hatchmydragonReducer} from './reducers';
import {authReducer} from './reducers/auth';
import {reducer as formReducer} from 'redux-form'

export default createStore(
  combineReducers({
      form: formReducer,
      auth: authReducer,
      hatchmydragonReducer
  })
);
