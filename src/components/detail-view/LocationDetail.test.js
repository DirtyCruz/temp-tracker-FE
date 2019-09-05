import React from 'react';
import { shallow } from 'enzyme';
import LocationDetail from './LocationDetail';

describe('LocationDetail component', () => {
  it('renders LocationDetail', () => {
    const wrapper = shallow(<LocationDetail temp={6} />);
    expect(wrapper).toMatchSnapshot();
  });
});
