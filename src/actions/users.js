import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';

import {normalizeResponseErrors} from './utils';

// missing redux thunk, missing the action creators
// also figure how to redirect (inside handles)

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }, 
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
        // Convert validationErrors into SubmissionErrors for Redux-form
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        )
      }
    });
};