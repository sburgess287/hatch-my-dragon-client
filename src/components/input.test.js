import React from 'react';
import {shallow} from 'enzyme';

import Input from './input.js';

describe('<Input />', () => {
  it('Renders without crashing', () => {
    shallow(<Input />);
  });

});
