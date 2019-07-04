import React from 'react';
import {shallow} from 'enzyme';
import '../index.css';
import Footer from './footer.js';

describe('<Footer />', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
});
