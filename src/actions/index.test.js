import {ADD_GOAL, addGoal, SET_GOALS, setGoals, 
    SET_SINGLE_GOAL, setSingleGoal, FETCH_PROTECTED_DATA_ERROR, 
    fetchProtectedDataError, INCREMENT_SINGLE_GOAL, incrementSingleGoal,
    DELETE_SINGLE_GOAL, deleteSingleGoal} from "./index"

describe('AddGoal', () => {
  it(`Should return the action`, () => {
    const goal = "run a mile";
    const action = addGoal(goal);
    expect(action.type).toEqual(ADD_GOAL);
    expect(action.goal).toEqual(goal);
  }) 
})

describe('setGoals', () => {
  it(`Should return the action`, () => {
    const goals = ["1", "2", "3"];
    const action = setGoals(goals)
    expect(action.type).toEqual(SET_GOALS);
    expect(action.goals).toEqual(goals);
  })
})

describe('setSingleGoal', () => {
  it(`Should return the action`, () => {
    const goal = "swim";
    const action = setSingleGoal(goal);
    expect(action.type).toEqual(SET_SINGLE_GOAL);
    expect(action.goal).toEqual(goal);
  })
})

describe('fetchProtectedDataError', () => {
  it(`Should return the action`, () => {
    const error = "notFound";
    const action = fetchProtectedDataError(error);
    expect(action.type).toEqual(FETCH_PROTECTED_DATA_ERROR);
    expect(action.error).toEqual(error);
  })
})

describe('incrementSingleGoal', () => {
  it(`Should return the action`, () => {
    const goal = "practice violin"
    const action = incrementSingleGoal(goal);
    expect(action.type).toEqual(INCREMENT_SINGLE_GOAL);
    expect(action.goal).toEqual(goal);
  })
})

describe('deleteSingleGoal', () => {
  it(`Should return the action`, () => {
    const goal = "deleteGoal";
    const action = deleteSingleGoal(goal);
    expect(action.type).toEqual(DELETE_SINGLE_GOAL);
    expect(action.goal).toEqual(goal);
  })
})