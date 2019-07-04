import {hatchmydragonReducer} from './index'

import {ADD_GOAL, DELETE_SINGLE_GOAL, 
  INCREMENT_SINGLE_GOAL, SET_GOALS, 
  SET_SINGLE_GOAL} 
      from '../actions/index'

describe('hatchmydragonReducer', () => {

  const setStateGoals = ["run", "swim", "hike"]

  it('Should set initial state when nothing is passed in', () => {
    const state = hatchmydragonReducer(undefined, {type: '__UNKNOWN'})
    expect(state).toEqual({
      goals: [],
      goalToEdit: {}
    })
  })

  it('Should return the current state on an unknown action', () => {
    let currentState = {}
    const state = hatchmydragonReducer(currentState, {type: '__UNKNOWN'})
    expect(state).toBe(currentState);
  })
   
  describe('addGoal', () => {
    it('Should add a goal to the list of goals', () => {
      let currentState = {
        goals: []
      };

      const goal = "meditate"
      let action = {type: ADD_GOAL, goal}
      let state = hatchmydragonReducer(currentState, action)
      expect(state.goals.toString()).toEqual(goal)
    })
  })

  describe('setGoals', () => {
    it('should set list of goals', () => {
      let state = {
        goals: setStateGoals
      }
      const newState = hatchmydragonReducer(state, {type: SET_GOALS}) 
      expect(newState.goals).toEqual(setStateGoals.goals)
    })
  })

  describe('setSingleGoal', () => {
    it('should set a single goal', () => {
    const oldstate = {
      goals: ["one", "two"],
      goalToEdit: {}
    }
    const goal =  "swim"
    const action = {type: SET_SINGLE_GOAL, goal}
    let state = hatchmydragonReducer(oldstate, action)

    expect(state.goalToEdit).toEqual(goal)
    expect(state.goals).toEqual(oldstate.goals)
    })
  })

  describe('incrementSingleGoal', () => {
    it('should add progress to a single goal', () => {
      const oldstate = {
        goals: ["one", "two"],
        goalToEdit: {}
      }
      const goal = "run"
      const action = {type: INCREMENT_SINGLE_GOAL, goal}
      const state = hatchmydragonReducer(oldstate, action)

      expect(state.goalToEdit).toEqual(goal)
      expect(state.goals).toEqual(oldstate.goals)
    })
  })

  describe('deleteSingleGoal', () => {
    it('should delete a single goal', () => {
      let oldState = {
        goals: [ {id: 'jump'}, { id: 'meditate' }, { id: 'swim'}],
        goalToEdit: {}
      }
      let goal = {id: "swim"}
      let action = {type: DELETE_SINGLE_GOAL, goal}
      let state = hatchmydragonReducer(oldState, action)
     
      expect(state.goals).toEqual([{id: 'jump'}, {id: 'meditate'}])
      expect(state.goalToEdit).toEqual(oldState.goalToEdit)
    })
  })
})

