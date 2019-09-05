import React from 'react';
import { shallow } from 'enzyme';
import Locations from './Locations';

describe('Locations component', () => {
  it('renders Locations', () => {
    const wrapper = shallow(<Locations locationsAndTemps={[{ location: 'Portland', temp: 1000 }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
