const mongoose = require('mongoose');

const db = require('./index.js');

mongoose.Promise = global.Promise;

const nearByAttractionsSchema = new mongoose.Schema({
  attractionId: String,
  location: {
    lat: Number,
    long: Number,
  },
  contact: {
    address: String,
    website: String,
    phoneNumber: String,
    Email: String,
  },
  nearByRestaurants: [
    {
      Id: Number,
      location: {
        lat: Number,
        long: Number,
      },
      Name: String,
      Image: String,
      Liked: Boolean,
      reviewCount: Number,
      reviewRating: Number,
      Type: String,
      Price: String,
    },
  ],
  nearByAttractions: [
    {
      Id: Number,
      location: {
        lat: Number,
        long: Number,
      },
      Name: String,
      Image: String,
      Liked: Boolean,
      reviewCount: Number,
      reviewRating: Number,
      Type: String,
    },
  ],
  NearByExperience: {
    Name: String,
    Image: String,
    Type: String,
    reviewCount: Number,
    reviewRating: Number,
    PriceUnit: String,
    PriceNumber: Number,
    PriceType: String,
    Language: String,
    Description: String,
  },
});

const NearbyAttraction = mongoose.model('NearByAttraction', nearByAttractionsSchema);

// if the attraction Id is not found, null is returned

const findAttraction = function (id) {
  return NearbyAttraction.findOne({ attractionId: id });
};

module.exports.NearbyAttraction = NearbyAttraction;
module.exports.findAttraction = findAttraction;
