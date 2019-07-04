import React from 'react';
import {shallow} from 'enzyme';

import {GoalsManager} from './goalsmanager';

describe('<GoalsManager />', () => {
  it('Renders without crashing', () => {
    shallow(<GoalsManager />);
  });
});
