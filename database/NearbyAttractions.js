const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

let nearByAttractionsSchema = new mongoose.Schema({
    attractionId: String,
    location: {
      lat: Number,
      Lng: Number,
    },
    contact: {
      address: String,
      website: String,
      phoneNumber: String,
      Email: String
      },
    nearByRestaurants: [
      {
        Id: Number,
        location: {
          lat: Number,
          Lng: Number,
        },
        Name: String,
        Image: String,
        Liked: Boolean,
        Review_count: Number,
        Review_rating: Number,
        Type: String,
        Price: String,
      }  
    ],
    nearByAttractions: [
      {
        Id: Number,
        location: {
          lat: Number,
          Lng: Number,
        },
        Name: String,
        Image: String,
        Liked: Boolean,
        Review_count: Number,
        Review_rating: Number,
        Type: String
      }
    ],
    NearByExperience: {
      Name: String,
      Image: String,
      Type: String,
      Review_count: Number,
      Review_rating: Number,
      PriceUnit: String,
      PriceNumber: Number,
      PriceType: String, 
      Language: String,
      Description: String
    }
})

let NearbyAttraction = mongoose.model('NearByAttraction', nearByAttractionsSchema);

//if the attraction Id is not found, null is returned
let findAttraction = function(id) {
  return NearbyAttraction.findOne({attractionId: id})
}

module.exports.NearbyAttraction = NearbyAttraction;
module.exports.findAttraction = findAttraction;



