import React from 'react';
import {shallow} from 'enzyme';

import {GoalsManagerPageZero} from './goalsmanagerpagezero'

describe('<GoalsManagerPageZero />', () => {
  it('Renders without crashing', () => {
    shallow(<GoalsManagerPageZero />);
  });

});