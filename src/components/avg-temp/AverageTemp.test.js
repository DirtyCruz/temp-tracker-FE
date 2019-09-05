import React from 'react';
import { shallow } from 'enzyme';
import AverageTemp from './AverageTemp';

describe('AverageTemp component', () => {
  it('renders AverageTemp', () => {
    const wrapper = shallow(<AverageTemp avgTemp={55}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
