import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWalking } from "@fortawesome/free-solid-svg-icons"
import getWalkingDistance from './getWalkingDistance';
import getBubbleRating from './getBubbleRating';

const BestNearbyAttractions = ({ attractions, parentLocation }) => (
  <div className="bestnearbyattractions-container">
    {attractions.map((attraction) => (
      <div className="bestnearbyattraction" key={attraction + Math.random()}>
        <div id="bestnearbyattraction-thumb">
          <div id="bestnearbyattraction-thumb-icon" />
          <div className="bestnearbyattraction-thumb-image-container">
            <img alt="" className="bestnearbyattraction-thumb-image" src={attraction.image} />
          </div>
        </div>
        <div className="bestnearbyattraction-info">
          <div id="bestnearbyattraction-name">{attraction.name}</div>
          <div id="bestnearbyattraction-review">
            <div id="bestnearbyattraction-review-container">
              <span id="bestnearbyattraction-review-bubbles">
                {getBubbleRating(attraction.reviewRating)}
              </span>
              <span id="bestnearbyattraction-review-count">
                (
                {attraction.reviewCount}
                )
              </span>
            </div>
          </div>
          <div className="bestnearbyattraction-details">
            <div id="bestbearbyattraction-details-distance">
              <FontAwesomeIcon id="bestnearbyrest-distance-icon" icon={faWalking} />
              <span id="bestbearbyattraction-distance-info">{getWalkingDistance(parentLocation, attraction.location)}</span>
            </div>
            <div id="bestbearbyattraction-details-price-type">
              <span id="bestbearbyattraction-details-price">
                {attraction.price}
              </span>
              <span id="bestbearbyattraction-details-type">
                {attraction.kind}
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

BestNearbyAttractions.propTypes = {
  attractions: PropTypes.arrayOf(PropTypes.object).isRequired,
  parentLocation: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
};

export default BestNearbyAttractions;
