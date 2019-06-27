import React from 'react';
import {shallow} from 'enzyme';

import {AchievedGoal} from './achievedgoalpage';

describe('<AchievedGoal />', () => {
  it('Renders without crashing', () => {
    shallow(<AchievedGoal />);
  });

});
