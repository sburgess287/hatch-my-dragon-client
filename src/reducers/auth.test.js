import {authReducer} from './auth';

import {setAuthToken, clearAuth, 
  authRequest, authSuccess, authError} from '../actions'

describe('authReducer', () => {
  // const newAuthToken = 'abcd1234';
  // const currentUser = "Leslie Smith";
  // const loading = false;
  // const error = "serverError"

  it('Should return current state on an unknown action', () => {
    let currentState = {};
    const state = authReducer(currentState, {type: '__UNKNOWN'})
    expect(state).toBe(currentState);
  })

  // fails because received null, expected12345
  describe('setAuthToken', () => {
    it('Should set an auth token', () => {
      let state = {
        authToken : null,
        // currentUser: "Leslie Jones",
        // loading: true,
        // error: null
  
      }
  
      const newAuthToken = "12345678" // how do I set this?
      state = authReducer(state, {type: setAuthToken, newAuthToken});
      // state = authReducer(state, setAuthToken(authToken))
      console.log('this is in setAuthToken')
      console.log(state)
      console.log(state.authToken) // obvs not being set
      // console.log(newAuthToken) 
      expect(state.authToken).toEqual(newAuthToken)

    })
  })

  // Fails: expect(received).toBe(expected) // Object.is equality
    // Expected: null
    // Received: "1234556656"
  // current error:  TypeError: (0 , _actions.clearAuth) is not a function
  describe('clearAuth', () => {
    it('Should clear an auth token',() => {
      let currentState = {
        authToken: '1234556656',
        currentUser: "John Smith",
       
      }
      
      // how to define the action?  says action is undefined
      // const state = authReducer(currentState, {type: clearAuth})
      const state = authReducer(currentState, clearAuth())
      console.log('this is state of clearAuth')
      console.log(state)
      console.log(state.authToken)
      expect(state.authToken).toBe(null)
    })
    
  })

  // Error:   TypeError: (0 , _actions.authRequest) is not a function
  describe('authRequest', () => {
    it('should show an auth request', () => {
      let currentState = {
        authToken: "34567",
        currentUser: "Bill Jones",
        loading: false,
        error: null
      }

      let loadingBoolean = true
      const state = authReducer(currentState, authRequest(loadingBoolean))
      console.log('This is authRequest')
      console.log(state)
      expect(state.loading).toBe(true)

    })
  })


  describe('authSuccess', () => {
    it('should show auth success', () => {
      
    })
  })

  describe('authError', () => {
    it('should show an auth error', () => {

    })
  })



})