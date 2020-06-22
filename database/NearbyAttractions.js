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
    email: String,
  },
  nearByRestaurants: [
    {
      id: Number,
      location: {
        lat: Number,
        long: Number,
      },
      name: String,
      image: String,
      liked: Boolean,
      reviewCount: Number,
      reviewRating: Number,
      type: String,
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
      name: String,
      image: String,
      liked: Boolean,
      reviewCount: Number,
      reviewRating: Number,
      type: String,
    },
  ],
  nearByExperience: {
    name: String,
    image: String,
    type: String,
    reviewCount: Number,
    reviewRating: Number,
    priceUnit: String,
    priceNumber: Number,
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