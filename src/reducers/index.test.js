import {hatchmydragonReducer} from './index'

import { 
  addGoal, setGoals, 
  setSingleGoal, incrementSingleGoal

} from '../actions/auth';
import { deleteSingleGoal } from '../actions';




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
   
  // Failing:    TypeError: (0 , _auth.addGoal) is not a function
  describe('addGoal', () => {
    it('Should add a goal to the list of goals', () => {
      let state = {
        goals: ["eat kale", "write poem", "study Spanish"],
        goalToEdit: {}
      };

      const goal = "meditate"
  
      state = hatchmydragonReducer(state, addGoal(goal))
      console.log(state)
      expect(state).toEqual({
        goals: ["eat kale", "write poem", "study Spanish"],
        goal
      })
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

  // Failing:  TypeError: (0 , _auth.setSingleGoal) is not a function
  describe('setSingleGoal', () => {
    it('should set a single goal', () => {
    let state = {
      goals: [],
      goalToEdit: {}
    }
    
    const goalToEdit =  "swim laps"
    state = hatchmydragonReducer(state, setSingleGoal(goalToEdit))
    expect(state).toEqual(goalToEdit)
    })

  })

  // Fails:i(0 , _auth.incrementSingleGoal) is not a function
  describe('incrementSingleGoal', () => {
    it('should add progress to a single goal', () => {
      let state = {
        goal: "feed cat"
      }

      state = hatchmydragonReducer(state, incrementSingleGoal(state.goal))
      console.log("incrementSingleGoal below")
      console.log(state)
      expect(state).toEqual(state.goal)



    })

  })

  // Fails because received not equal to expected
  describe('deleteSingleGoal', () => {
    it('should delete a single goal', () => {
      let state = {
        goals: ["meditate", "swim"],
        goalToEdit: "swim"
      }

      let updatedState = {
        goals: "meditate",
        goalToEdit: null

      }
      console.log(state.goalToEdit)
      state = hatchmydragonReducer(state, deleteSingleGoal(state.goalToEdit))
      console.log('this is delete single goal test')
      console.log(state)
      expect(state).toEqual(updatedState)

    })

  })

})

