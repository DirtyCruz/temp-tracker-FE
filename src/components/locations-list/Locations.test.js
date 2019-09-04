import React from 'react';
import { shallow } from 'enzyme';
import Locations from './Locations';

describe('Locations component', () => {
  it('renders Locations', () => {
    const wrapper = shallow(<Locations locationsAndTemps={[{ }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
