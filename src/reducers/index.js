
import * as actions from '../actions';

const initialState = {
  goals : [
    {
      name: 'Running',
      id: 'id'
    }, 
    {
      name: 'Play Violin',
      id: 'id'
    }, 
    {
      name: 'Code Capstone',
      id: 'id'
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