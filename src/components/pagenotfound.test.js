import React from 'react';
import {shallow} from 'enzyme';

import {PageNotFound} from './pagenotfound';

describe('<PageNotFound />', () => {
  it('Renders without crashing', () => {
    shallow(<PageNotFound />);
  });
});
