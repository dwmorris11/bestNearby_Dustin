import React from 'react';
import PropTypes from 'prop-types';

const NearByExperience = ({ nearByExperience }) => {
  return (
    <div className="nearbyexperience-container-outer"> 
      <div className="nearbyexperience-container-inner">
        <div className="nearbyexperience-header">
            Get to know the area
        </div>
        <div className="experience-icon">
          <span className="icon-circle">
            <span className="icon-heart"></span>
          </span>
        </div>
        <img className="experience-image" src={nearByExperience.image}></img>
        <div className="experience-details-container">
          <span className="experience-kind">
            {nearByExperience.kind}
          </span>
          <a className="experience-detail-title">
            {nearByExperience.name}
          </a>
          <div className="experience-ratings-container">
            <span className="experience-rating-bubbles">
              {nearByExperience.reviewRating}
            </span>
            <span className="experience-rating-count">
              {nearByExperience.reviewCount}
            </span>
            <div className="experience-language-container">
              <img alt="google" src="https://static.tacdn.com/img2/google/powered_by_google_translate.png"></img>
            </div>
            <div className="experience-review-description">
              {nearByExperience.description}
            </div>
            <div className="experience-price-container">
              <span className="experience-price-amount">
                {nearByExperience.priceType + nearByExperience.priceNumber}
                <span className="experience-priceunit">
                  {nearByExperience.priceUnit}
                </span>
              </span>
              <div className="experience-more-info">
                More info
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

NearByExperience.propTypes = {
  nearByExperience: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    kind: PropTypes.string,
    reviewCount: PropTypes.number,
    reviewRating: PropTypes.number,
    priceUnit: PropTypes.string,
    priceType: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default NearByExperience;