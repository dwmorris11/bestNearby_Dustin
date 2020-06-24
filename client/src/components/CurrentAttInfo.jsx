import React from 'react';

const CurrentAttInfo = (props) => {
  return (
    <div id="current-attraction-info">
      <div id="current-attraction-location-header">Location</div>
      <div id="current-attraction-location-container">
        <div id="current-attraction-contact-header"> Contact </div>
        <div id="current-attraction-contact-card">
          <div id="current-attraction-contact-address">
            <span id="current-attraction-contact-address-icon"></span>
            <span id="current-attraction-contact-address-loc">{props.contact.address}</span>
          </div>
          <div id="current-attraction-contact-email">
            <span id="current-attraction-contact-email-icon"></span>
            <span id="current-attraction-contact-email-loc">{props.contact.email}</span>
          </div>
          <div id="current-attraction-contact-phonenumber">
            <span id="current-attraction-contact-phonenumber-icon"></span>
            <span id="current-attraction-contact-phonenumber-loc">{props.contact.phonenumber}</span>
          </div>
          <div id="current-attraction-contact-website">
            <span id="current-attraction-contact-website-icon"></span>
            <span id="current-attraction-contact-website-loc">{props.contact.website}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentAttInfo;
