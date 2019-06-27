import React from 'react';
import {shallow} from 'enzyme';

import {NewGoal} from './newgoal';

describe('<NewGoal />', () => {
  it('Renders without crashing', () => {
    shallow(<NewGoal />);
  });

});
