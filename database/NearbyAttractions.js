const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

let nearByAttractionsSchema = new mongoose.Schema({
    attractionId: Number,
    lat: Number,
    Long: Number,
    contact: {
      address: String,
      website: String,
      phoneNumber: String,
      Email: String
      },
    nearByAttractions: [
      {
        Id: Number,
        Lat: Number,  
        Long: Number,
        Name: String,
        Image: String,
        Liked: Boolean,
        Review_count: Number,
        Review_rating: Number,
        Type: String,
        Price: String,
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
      Language: String
    }
})

let NearbyAttraction = mongoose.model('NearByAttraction', nearByAttractionsSchema);

module.exports = NearbyAttraction;


