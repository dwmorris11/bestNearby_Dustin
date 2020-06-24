import React from 'react';
import BestNearByRestaurantDetails from './BestNearByRestaurantsDetail.jsx';
import BestNearbyRestaurants from './BestNearByRestaurantsDetail.jsx';

const getRandomNumRestaurants = () => Math.floor(Math.random()*20);
const getRandomNumAttractions = () => Math.floor(Math.random()*10);
const getRandomNearbyDist = () => Math.floor(Math.random() * (100 - 10)) / 10;

const BestNearByContainer = (props) => {
    console.log(props)
  return (
    <div>
      <div className="bestnearby-container">
        <div className="bestnearby-header">Best nearby
          <span id="bestnearby-header-icon-container">
          <span id="bestnearby-header-icon"></span>
          </span>
        </div>
      </div>
      <div className="bestnearby-summarybar">
        <div id="bestnearby-summarybar-rest">
          <span id="bestnearby-summarybar-rest-val">{getRandomNumRestaurants()}</span>
          <span id="bestnearby-summarybar-rest-text">
            <span id="bestnearby-summarybar-rest-text-1">Restaurants</span>
            <span id="bestnearby-summarybar-rest-text-dist">{`within ${getRandomNearbyDist()} miles`}</span>
          </span>
        </div>
          <div id="bestnearby-summarybar-att">
            <span id="bestnearby-summarybar-att-val">{getRandomNumAttractions()}</span>
            <span id="bestnearby-summarybar-att-text">
              <span id="bestnearby-summarybar-att-text-1">Other Attractions</span>
              <span id="bestnearby-summarybar-att-text-dist">{`within ${getRandomNearbyDist()} miles`}</span>
            </span>
          </div>
      </div>
      <BestNearbyRestaurants parentLocation={props.location} restaurants={props.restaurants}/>
    </div>
  )
}

export default BestNearByContainer;