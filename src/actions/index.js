// ACTIONS
import {API_BASE_URL} from '../config';
import { normalizeResponseErrors } from './utils';

export const ADD_GOAL = 'ADD_GOAL';
export const addGoal = (name, listIndex) => ({
  type: ADD_GOAL, 
  name, 
  listIndex
})

// REQUEST
// SUCCESS
// ERROR

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
  type: FETCH_PROTECTED_DATA_ERROR,
  error
})

export const fetchGoals = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/goals`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({name}) => dispatch(addGoal(name)))
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    })
}