
import * as actions from '../actions';

// should this be a list of goals instead of just goals?
// Track number of clicks in the structure?
const initialState = {
  goals : [], 
  goalToEdit : {}

};

// const initialState = {
//   goals : [
//     {
//       name: 'Running',
//       id: 0,
//       count: 1

//     }, 
//     {
//       name: 'Play Violin',
//       id: 1,
//       count: 2
//     }, 
//     {
//       name: 'Code Capstone',
//       id: 2,
//       count: 3
//     }
  
//   ]

// };

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

    // let goals = state.goals.map((goal, index) => {
    //   if (index !== action.listIndex) {
    //     return goal;
    //   } return Object.assign({}, goal, {
    //     goals: [...goals, {
    //       name: action.name
    //     }]
    //   })
      
    // })
    // return Object.assign({}, state, {
    //   goals
    // })
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

  // increment to add progress:  not adding 1?
  if(action.type === actions.INCREMENT_SINGLE_GOAL) {
    let newState = {
      ...state,
      goalToEdit: action.goal
    }
    return newState;
  }

  // Delete goal
  if(action.type === actions.DELETE_SINGLE_GOAL) {
    let newState = {
      ...state, 
      // not sure how to filter out deleted goals
      
    }
    return newState
  }



  return state;
}