import {createStore, combineReducers} from 'redux'

import {hatchmydragonReducer} from './reducers';
import {reducer as formReducer} from 'redux-form'

export default createStore(
  combineReducers({
      form: formReducer,
      hatchmydragonReducer
  })
);
