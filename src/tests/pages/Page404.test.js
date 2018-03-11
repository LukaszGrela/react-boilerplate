import React from 'react';
import {shallow} from 'enzyme';
import Page404 from '../../pages/Page404';

test('should render correctly', () => {
    const wrapper = shallow(<Page404 />);

    expect(wrapper).toMatchSnapshot();
})