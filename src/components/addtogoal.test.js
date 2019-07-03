import React from 'react';
import {shallow} from 'enzyme';

import {AddToGoal} from './addtogoal';

describe('<AddToGoal />', () => {
  it('Renders without crashing', () => {
    // stubs out props
    // let match = { 
    //   params: {}
    // }
    // let getSpecificGoal = () => {}
    
    shallow(<AddToGoal 
      // match={match}
      // getSpecificGoal={getSpecificGoal}
      />);
  });

});
