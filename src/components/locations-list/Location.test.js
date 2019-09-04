import React from 'react';
import { shallow } from 'enzyme';
import Location from './Location';

describe('Location component', () => {
  it('renders Location', () => {
    const wrapper = shallow(<Location location='location' temperature={6} />);
    expect(wrapper).toMatchSnapshot();
  });
});
