import React from 'react';
import PropTypes from 'prop-types';

const CurrentAttInfo = ({ contact }) => {
  return (
    <div id="current-attraction-info">
      <div id="current-attraction-location-header">Location</div>
      <div id="current-attraction-location-container">
        <div id="current-attraction-contact-header"> Contact </div>
        <div id="current-attraction-contact-card">
          <div id="current-attraction-contact-address">
            <span id="current-attraction-contact-address-icon"></span>
            <span id="current-attraction-contact-address-loc">{contact.address}</span>
          </div>
          <div id="current-attraction-contact-email">
            <span id="current-attraction-contact-email-icon"></span>
            <span id="current-attraction-contact-email-loc">{contact.email}</span>
          </div>
          <div id="current-attraction-contact-phonenumber">
            <span id="current-attraction-contact-phonenumber-icon"></span>
            <span id="current-attraction-contact-phonenumber-loc">{contact.phonenumber}</span>
          </div>
          <div id="current-attraction-contact-website">
            <span id="current-attraction-contact-website-icon"></span>
            <span id="current-attraction-contact-website-loc">{contact.website}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

CurrentAttInfo.propTypes = {
  contact: PropTypes.shape({
    address: PropTypes.string,
    email: PropTypes.string,
    phonenumber: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
};

export default CurrentAttInfo;
