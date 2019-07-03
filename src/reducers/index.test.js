import {hatchmydragonReducer} from './index'

import { 
   setGoals, 
  setSingleGoal,
  SET_SINGLE_GOAL, 

} from '../actions';

import {ADD_GOAL, DELETE_SINGLE_GOAL, 
  INCREMENT_SINGLE_GOAL} from '../actions/index'




// const initialState = {
//   goals : [],
//   goalToEdit : {}
// };

describe('hatchmydragonReducer', () => {

  const setStateGoals = ["run", "swim", "hike"]

  // const goal1 = "run";
  // const goal2 = "swim";
  // const goal3 = "practice spanish"
  // const newGoal = "skate"

  // Passes
  it('Should set initial state when nothing is passed in', () => {
    const state = hatchmydragonReducer(undefined, {type: '__UNKNOWN'})
    expect(state).toEqual({
      goals: [],
      goalToEdit: {}

    })
  })

  // Passes
  it('Should return the current state on an unknown action', () => {
    let currentState = {}
    const state = hatchmydragonReducer(currentState, {type: '__UNKNOWN'})
    expect(state).toBe(currentState);
  })
   
  // Passes: adds a goal to array of goals
  describe('addGoal', () => {
    it('Should add a goal to the list of goals', () => {
      let currentState = {
        goals: []
      };

      const goal = "meditate"
      let action = {type: ADD_GOAL, goal}
      let state = hatchmydragonReducer(currentState, action)
      // console.log(state.goals.toString())
      expect(state.goals.toString()).toEqual(goal)
    })
  })

  // This works!  Shows all goals
  describe('setGoals', () => {
    it('should set list of goals', () => {
      let state = {
        goals: setStateGoals
      }
      const newState = hatchmydragonReducer(state, {type: setGoals}) 
      expect(state).toEqual(newState)
    })
  })

  describe('setSingleGoal', () => {
    it('should set a single goal', () => {
    let oldstate = {
      goals: [],
      goalToEdit: {}
    }
    
    let newState = {
      goals: "swim"
    }
    const goal =  "swim"
    const action = {type: SET_SINGLE_GOAL, goal}
    let state = hatchmydragonReducer(oldstate, action)
    expect(state.goalToEdit).toEqual(newState.goals)
    })

  })

  describe('incrementSingleGoal', () => {
    it('should add progress to a single goal', () => {
      let Oldstate = {
        goals: [],
        goalToEdit: {}
      }

      let goal = "run"
      let action = {type: INCREMENT_SINGLE_GOAL, goal}
      let state = hatchmydragonReducer(Oldstate, action)
      expect(state.goalToEdit).toEqual(goal)
    })

  })

  // Fails because received not equal to expected
  describe('deleteSingleGoal', () => {
    it('should delete a single goal', () => {
      let oldState = {
        goals: ["meditate", "swim"],
        goalToEdit: "swim"
        
      }

      let newState = {
        goals: ["meditate"]
      }
      let goal = "swim"
      
      let action = {type: DELETE_SINGLE_GOAL, goal}
      let state = hatchmydragonReducer(oldState, action)
      console.log('this is delete single goal test')
      console.log(action.goal)
      console.log(state)
      console.log(oldState)
      console.log(newState)
      console.log(action)
      // console.log(state) // 
      // console.log(newState.goals) // ["meditate"]
      expect(state).toEqual(newState)
      expect(state.goalToEdit).toEqual(goal)
      

    })

  })

})

