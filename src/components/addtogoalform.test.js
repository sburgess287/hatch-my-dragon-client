import React from 'react';
import {shallow} from 'enzyme';

import {AddToGoalForm} from './addtogoalform.js';

// Fails: TypeError: Cannot read property 'params' of undefined
describe('<AddToGoalForm />', () => {
  it('Renders without crashing', () => {
    shallow(<AddToGoalForm 
    goal={0}
    />);
  });
});
