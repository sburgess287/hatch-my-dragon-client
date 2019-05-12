
import * as actions from '../actions';

// should this be a list of goals instead of just goals?
// Track number of clicks in the structure?
const initialState = {
  goals : [
    {
      name: 'Running',
      id: 0,

    }, 
    {
      name: 'Play Violin',
      id: 1,
    }, 
    {
      name: 'Code Capstone',
      id: 2,
    }
  
  ]

};

export const hatchmydragonReducer = (state=initialState, action) => {
  if(action.type === actions.ADD_GOAL){
    let goals = state.goals.map((goal, index) => {
      if (index !== action.listIndex) {
        return goal;
      } return Object.assign({}, goal, {
        goals: [...goals, {
          name: action.name
        }]
      })
      
    })
    return Object.assign({}, state, {
      goals
    })
  }
  return state;
}