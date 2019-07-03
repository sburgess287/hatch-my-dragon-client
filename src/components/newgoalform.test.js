import React from 'react';
import {shallow} from 'enzyme';

import {NewGoalForm} from './newgoalform';

describe('<NewGoalForm />', () => {
  it('Renders without crashing', () => {
    shallow(<NewGoalForm />);
  });
});
