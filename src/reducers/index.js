
import * as actions from '../actions';

const initialState = {
  goals : [], 
  goalToEdit : {}
};


export const hatchmydragonReducer = (state=initialState, action) => {

  if(action.type === actions.ADD_GOAL){
    // action === {goal{goal, id, count, user_id}} 
    // state === {goals[]}
    // put goal from action into the goals array state
    let newGoals = [...state.goals, action.goal]
    let newState = {
      ...state,
      goals: newGoals
    }
    return newState;
  }
  if(action.type === actions.SET_GOALS){
    return Object.assign({}, state, {
      goals: action.goals
    })
  }

  if(action.type === actions.SET_SINGLE_GOAL){
    // action === {goal{goal, id, count, user_id}}
    // state === {goals[]},goalToEdit 
   // return New state with goalToEdit
    let newState = {
      ...state, 
      goalToEdit: action.goal
    }
    return newState; 
  }

  if(action.type === actions.INCREMENT_SINGLE_GOAL) {
    return {
      ...state,
      goalToEdit: action.goal
    };
  }

  if(action.type === actions.DELETE_SINGLE_GOAL) {
    // data: state: {[goals]}, action.goal{id}
    // data needed: {[goals]} filtered without goal matching action.goal{id}
    let newGoals = state.goals.filter(goal => goal.id !== action.goal.id )
    let newState = {
      ...state,
      goals: newGoals   
    }
    return newState
  }

  return state;
}