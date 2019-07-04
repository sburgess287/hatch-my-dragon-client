import React from 'react';
import {shallow} from 'enzyme';

import {AddToGoal} from './addtogoal';

describe('<AddToGoal />', () => {
  it('Renders without crashing', () => {
    shallow(<AddToGoal/>);
  });
});
