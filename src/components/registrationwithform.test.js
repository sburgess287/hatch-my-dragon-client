import React from 'react';
import {shallow} from 'enzyme';

//no tests on redux form in curriculum?
import Registration from './registration';

describe('<Registration />', () => {
  it('Renders without crashing', () => {
    shallow(<Registration />);
  });

});
