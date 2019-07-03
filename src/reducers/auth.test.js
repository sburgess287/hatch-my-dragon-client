import {authReducer} from './auth';

import { AUTH_REQUEST, SET_AUTH_TOKEN, 
  AUTH_SUCCESS, CLEAR_AUTH, AUTH_ERROR } 
  from '../actions/auth';


describe('authReducer', () => {

  it('Should return current state on an unknown action', () => {
    let currentState = {};
    const state = authReducer(currentState, {type: '__UNKNOWN'})
    expect(state).toBe(currentState);
  })

  describe('setAuthToken', () => {
    it('Should set an auth token', () => {
      const newAuthToken = "12345678"
      let NewState = {
        authToken: newAuthToken
      }
      const action = {type: SET_AUTH_TOKEN, authToken: newAuthToken}
      let state = authReducer(NewState, action);
      expect(state.authToken).toEqual(newAuthToken)
    })
  })

  describe('clearAuth', () => {
    it('Should clear an auth token', () => {
      let currentState = {
        authToken: '1234556656',
        currentUser: "John Smith", 
      }

      const action = {
        type: CLEAR_AUTH
      }
  
      const state = authReducer(currentState, action)
      expect(state.authToken).toEqual(null)
      expect(state.currentUser).toEqual(null)
    })
  })

  describe('authRequest', () => {
    it('should show an auth request', () => {
      let currentState = {
        authToken: null, 
        currentUser: null, 
        loading: false,
        error: null
      }

      const action = {type: AUTH_REQUEST }
      const state = authReducer(currentState, action)
      expect(state.loading).toBe(true)
      expect(state.error).toBe(null)
    })
  })

  describe('authSuccess', () => {
    it('should show auth success', () => {
      let currentState = {
        authToken: null, 
        currentUser: null, 
        loading: false,
        error: null
      }
      const action = {type: AUTH_SUCCESS}
      const state = authReducer(currentState, action)
      expect(state.loading).toBe(false)
      expect(state.currentUser).toBe(action.currentUser)
      expect(state.error).toBe(null)
    })
  })

  describe('authError', () => {
    it('should show an auth error', () => {
      let currentState = {
        authToken: null, 
        currentUser: null, 
        loading: false,
        error: null
      }
      const action = {type: AUTH_ERROR}
      const state = authReducer(currentState, action)
      expect(state.loading).toBe(false)
      expect(state.error).toBe(action.error)
    })
  })
})