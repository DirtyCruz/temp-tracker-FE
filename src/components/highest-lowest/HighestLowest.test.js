import React from 'react';
import { shallow } from 'enzyme';
import HighestLowest from './HighestLowest';

describe('HighestLowest component', () => {
  it('renders HighestLowest', () => {
    const wrapper = shallow(<HighestLowest />);
    expect(wrapper).toMatchSnapshot();
  });
});
