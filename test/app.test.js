import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App.jsx';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});