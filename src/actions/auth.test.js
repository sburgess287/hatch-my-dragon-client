import {
  SET_AUTH_TOKEN, setAuthToken, CLEAR_AUTH, clearAuth, 
  AUTH_REQUEST, authRequest, AUTH_SUCCESS, authSuccess,
  AUTH_ERROR, authError
} from "./auth";

describe('setAuthToken', () => {
  it(`Should return the action`, () => {
    const authToken = "newAuthToken1234";
    const action = setAuthToken(authToken);
    expect(action.type).toEqual(SET_AUTH_TOKEN);
    expect(action.authToken).toEqual(authToken);
  })
})

describe('clearAuth', () => {
  it(`Should return the action`, () => {
    const authToken = "newAuthToken1234";
    const action = clearAuth(authToken);
    expect(action.type).toEqual(CLEAR_AUTH);
    expect(action.authToken).toEqual(undefined);
  })
})

describe('authRequest', () => {
  it(`Should return the action`, () => {
    const authToken = "newAuthToken1234";
    const action = authRequest(authToken);
    expect(action.type).toEqual(AUTH_REQUEST);
  })
})

describe('authSuccess', () => {
  it(`Should return the action`, () => {
    const currentUser = "LeviJones"
    const action = authSuccess(currentUser);
    expect(action.type).toEqual(AUTH_SUCCESS)
    expect(action.currentUser).toEqual(currentUser);

  })
})

describe('authError', () => {
  it(`Should return the action`, () => {
    const error = "notFound"
    const action = authError(error);
    expect(action.type).toEqual(AUTH_ERROR);
    expect(action.error).toEqual(error);
  })
})