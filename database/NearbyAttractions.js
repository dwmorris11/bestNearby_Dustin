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
    phonenumber: String,
    email: String,
  },
  nearByRestaurants: [
    {
      id: Number,
      location: {
        lat: Number,
        long: Number,
      },
      image: String,
      name: String,
      liked: Boolean,
      reviewCount: Number,
      reviewRating: Number,
      kind: String,
      price: String,
    },
  ],
  nearByAttractions: [
    {
      id: Number,
      location: {
        lat: Number,
        long: Number,
      },
      image: String,
      name: String,
      liked: Boolean,
      reviewCount: Number,
      reviewRating: Number,
      kind: String,
    },
  ],
  nearbyExperience: {
    name: String,
    image: String,
    kind: String,
    reviewCount: Number,
    reviewRating: Number,
    priceUnit: String,
    pricenumber: Number,
    priceType: String,
    language: String,
    description: String,
  },
});

const NearbyAttraction = mongoose.model('NearByAttraction', nearByAttractionsSchema);

// if the attraction Id is not found, null is returned

const findAttraction = function (id) {
  return NearbyAttraction.findOne({ attractionId: id });
};

module.exports.NearbyAttraction = NearbyAttraction;
module.exports.findAttraction = findAttraction;
