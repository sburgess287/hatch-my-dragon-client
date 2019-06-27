import React from 'react';
import {shallow, mount} from 'enzyme';

import {AddToGoal} from './addtogoal';

describe('<AddToGoal />', () => {
  it('Renders without crashing', () => {
    shallow(<AddToGoal />);
  });

});
