import React from 'react'; 
import { getDistance } from 'geolib';


const getReviewBubbles = (rating) => {
  //will need to return 5 cirlces with which cirlces empty or filled based on rating
    //rating runs from 0-10, an increase of 1 represents a half circle
}
const getWalkingDistance = (parentLoc, attLoc) => {
  // distance measured in degree decimals
  const distance = Math.abs(parentLoc.lat - attLoc.lat);
  // approx. 5 miles 
  if (distance > 0.07) {
    return '45 min';
  // approx. 3.5 miles
  } else if (distance > 0.05) {
    return '30 min';
  // approx. 2 miles
  } else if (distance > 0.03) {
    return '15 min';
  // approx. 1 mile
  } else if (distance > 0.01) {
    return '10 min';
  // less than a mile
  } else {
    return '5 min';
  }
};

const BestNearbyRestaurants = (props) => (
  <div className="bestnearbyrestaurants-container">
    {props.restaurants.map((restaurant, idx) => (
      <a className="bestnearbyrest-details" key={restaurant+idx}>
        <div id="bestnearbyrest-thumb">
          <div id="bestnearbyrest-thumb-icon"></div>
          <div className="bestnearbyrest-thumb-image-container" >
            <img className="bestnearbyrest-thumb-image" src={restaurant.image}/>
          </div>
        </div>
        <div className="bestnearbyrest-info">
          <div id="bestnearbyrest-name">{restaurant.name}</div>
          <div id="bestnearbyrest-review">
            <div id="bestnearbyrest-review-container">
              <span id="bestnearbyrest-review-bubbles">0 0 0 0 0</span>
              <span id="bestnearbyrest-review-count">({restaurant.reviewCount})</span>
            </div>
          </div>
          <div className="bestnearbyrest-details">
            <div id="bestbearbyrest-details-distance">
              <span id="bestbearbyrest-distance-icon">walking person icon</span>
              <span id="bestbearbyrest-distance-info">{getWalkingDistance(props.parentLocation, restaurant.location)}</span>
            </div>
            <div id="bestbearbyrest-details-price-type">
              <span id="bestbearbyrest-details-price"> {restaurant.price} </span>
              <span id="bestbearbyrest-details-type"> {restaurant.kind} </span>
            </div>
          </div>
        </div>
      </a>
    ))}
  </div>
);

export default BestNearbyRestaurants;
