// ACTIONS
import {API_BASE_URL} from '../config';
import { normalizeResponseErrors } from './utils';

export const ADD_GOAL = 'ADD_GOAL';
export const addGoal = (goal) => ({
  type: ADD_GOAL, 
  goal, 
  

})

export const SET_GOALS = 'SET_GOALS';
export const setGoals = (goals) => ({
  type: SET_GOALS,
  goals
})
// REQUEST
// SUCCESS
// ERROR

export const SET_SINGLE_GOAL = 'SET_SINGLE_GOAL'
export const setSingleGoal = (goal) => ({
  type: SET_SINGLE_GOAL,
  goal
})

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
    .then(res => res.json()) // returns array
    .then((goals) => {
      dispatch(setGoals(goals))
    })
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    })
}

export const createGoal = (goal) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/goal`, {
    method: `POST`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      goal, 
      count: "0"
    })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((goal) => {
      dispatch(addGoal(goal))
      return goal;
    })
    .catch(err => {
      dispatch(FETCH_PROTECTED_DATA_ERROR(err))
    })
}

export const getSpecificGoal = (goalId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log(goalId)
  console.log('getSpecificGoalRan before GET by ID API call')
  return fetch(`${API_BASE_URL}/goal/${goalId}`, {
    method: `GET`, 
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
      }

    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((goal) => {
      dispatch(setSingleGoal(goal))
      console.log(goal)
    })
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    })

  
}