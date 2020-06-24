import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../client/src/components/App';
import CurrentAttInfo from '../../client/src/components/CurrentAttinfo';

Enzyme.configure({ adapter: new Adapter() })
const shallow = Enzyme.shallow;
const mount = Enzyme.mount;

  test('Client App renders without crashing', () => {
    shallow(<App />);
  });

  describe('<CurrentAttInfo />', () => {
    it('should have a address element', () => {
      const wrapper = shallow(<CurrentAttInfo contact={{
        address: "1297 Kokfe Pike",
        website: "ruufe@ucekagow.nc",
        phonenumber: "(526) 770-3178",
        email: "tac@dis.am"
      }}/>);
      
      expect(wrapper.contains(<div id="current-attraction-location-header">Location</div>)).toEqual(true)
    })
  });
