import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWalking } from "@fortawesome/free-solid-svg-icons"
import getWalkingDistance from './getWalkingDistance';

const getReviewBubbles = (rating) => {
  // will need to return 5 cirlces with which cirlces empty or filled based on rating
  // rating runs from 0-10, an increase of 1 represents a half circle
};

const BestNearbyRestaurants = ({ restaurants, parentLocation }) => (
  <div className="bestnearbyrestaurants-container">
    {restaurants.map((restaurant) => (
      <div className="bestnearbyrest" key={restaurant + Math.random()}>
        <div id="bestnearbyrest-thumb">
          <div id="bestnearbyrest-thumb-icon" />
          <div className="bestnearbyrest-thumb-image-container">
            <img alt="" className="bestnearbyrest-thumb-image" src={restaurant.image} />
          </div>
        </div>
        <div className="bestnearbyrest-info">
          <div id="bestnearbyrest-name">{restaurant.name}</div>
          <div id="bestnearbyrest-review">
            <div id="bestnearbyrest-review-container">
              <span id="bestnearbyrest-review-bubbles">
                {restaurant.reviewRating}
              </span>
              <span id="bestnearbyrest-review-count">
                (
                {restaurant.reviewCount}
                )
              </span>
            </div>
          </div>
          <div className="bestnearbyrest-details">
            <div id="bestnearbyrest-details-distance">
              <FontAwesomeIcon id="bestnearbyrest-distance-icon" icon={faWalking} />
              <span id="bestnearbyrest-distance-info">{getWalkingDistance(parentLocation, restaurant.location)}</span>
            </div>
            <div id="bestnearbyrest-details-price-type">
              <span id="bestnearbyrest-details-price">
                {restaurant.price}
              </span>
              <span id="bestnearbyrest-details-type">
                {restaurant.kind}
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

BestNearbyRestaurants.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
  parentLocation: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
};

export default BestNearbyRestaurants;
