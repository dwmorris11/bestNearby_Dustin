import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from '../../client/src/components/App';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  shallow(<App />);
});