import React from 'react';
import { shallow } from 'enzyme';
import LocationDetails from './LocationDetails';

describe('LocationDetails component', () => {
  it('renders LocationDetails', () => {
    const wrapper = shallow(<LocationDetails location='Portland' temps={[4, 5, 7]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
