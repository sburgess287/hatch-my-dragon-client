// ACTIONS

export const ADD_GOAL = 'ADD_GOAL';

export const addGoal = (name, listIndex) => ({
  type: ADD_GOAL, 
  name, 
  listIndex
})