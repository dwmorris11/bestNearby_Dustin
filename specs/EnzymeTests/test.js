import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../client/src/components/App.jsx';
import CurrentAttInfo from '../../client/src/components/CurrentAttInfo.jsx';
import BestNearByContainer from '../../client/src/components/BestNearByContainer.jsx';
import BestNearbyAttractions from '../../client/src/components/BestNearByAtt.jsx';
import BestNearbyRestaurants from '../../client/src/components/BestNearByRestaurants.jsx'
import { data } from '../../__mocks__/dataMock.js';

Enzyme.configure({ adapter: new Adapter() })
const shallow = Enzyme.shallow;
const mount = Enzyme.mount;

  test('Client App renders without crashing', () => {
    shallow(<App />);
  });

  describe('<CurrentAttInfo />', () => {
    test('should have a address element', () => {
      const wrapper = shallow(<CurrentAttInfo contact={{
        address: "1297 Kokfe Pike",
        website: "ruufe@ucekagow.nc",
        phonenumber: "(526) 770-3178",
        email: "tac@dis.am"
      }}/>);
      
      expect(wrapper.contains(<div id="current-attraction-location-header">Location</div>)).toEqual(true)
    })

    describe('<BestNearByContainer />', () => {
      const wrapper = shallow(<BestNearByContainer />);
      test('should have a random number of restaurant reviews less than 20', () => {
        const text = wrapper.find('#bestnearby-summarybar-rest-val').text();
        expect(Number(text)).toBeLessThanOrEqual(20);
      })

      test('should have a random number of attraction reviews less than 10', () => {
        const text = wrapper.find('#bestnearby-summarybar-att-val').text();
        expect(Number(text)).toBeLessThanOrEqual(10);
      })
      
      test('should have a random number of attraction reviews less than 10', () => {
        const text = wrapper.find('#bestnearby-summarybar-rest-text-dist').text().slice(7, 8);
        expect(Number(text)).toBeLessThanOrEqual(10);
      })
    })
    
    describe('<BestNearbyRestaurants />', () => {
      const restaurants = data.nearByRestaurants;
      const parentLoc = data.location;
      
      const wrapper = mount(<BestNearbyRestaurants restaurants={restaurants} parentLocation={parentLoc}/>);
      test('Container should exist', () => {
        const container = wrapper.find(".bestnearbyrestaurants-container");
        expect(container.exists()).toEqual(true);
      });
      
      test('Should have three restaurants listed', () => {
        const nodes = wrapper.find('.bestnearbyrest-details');
        expect(nodes).toHaveLength(3);
      });
      
      test('Should return walking distance times', () => {
        const walkingDist = wrapper.find('#bestnearbyrest-distance-info').forEach((node) => {
          const values = node.text().split(' ')
          expect(Number(values[0])).toBeLessThanOrEqual(45);
          expect(values[1]).toEqual('min');
        })
      });
    })

    describe('<BestNearbyAttractions />', () => {
      const attractions = data.nearByAttractions;
      const parentLoc = data.location;
      
      const wrapper = mount(<BestNearbyAttractions attractions={attractions} parentLocation={parentLoc}/>);
      test('Container should exist', () => {
        const container = wrapper.find(".bestnearbyattractions-container");
        expect(container.exists()).toEqual(true);
      });
      
      test('Should have three attractions listed', () => {
        const nodes = wrapper.find('.bestnearbyattraction-details');
        expect(nodes).toHaveLength(3);
      });
      
      test('Should return walking distance times', () => {
        const walkingDist = wrapper.find('#bestbearbyattraction-distance-info').forEach((node) => {
          const values = node.text().split(' ')
          expect(Number(values[0])).toBeLessThanOrEqual(45);
          expect(values[1]).toEqual('min');
        })
      });

      test('Should have a rating value', () => {
        const walkingDist = wrapper.find('#bestnearbyattraction-review-bubbles').forEach((node) => {
          const values = node.text()
          expect(Number(values)).toBeLessThanOrEqual(10);
        })
      });
    })
    
  });
