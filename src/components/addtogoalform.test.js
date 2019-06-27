import React from 'react';
import {shallow} from 'enzyme';

import {AddToGoalForm} from './addtogoalform.js';

describe('<AddToGoalForm />', () => {
  it('Renders without crashing', () => {
    shallow(<AddToGoalForm />);
  });

});
