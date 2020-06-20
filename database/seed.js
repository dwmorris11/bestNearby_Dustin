const NearNearbyAttractions = require('./nearbyattractions.js');
const Chance = require('chance');

const getPaddedAttractionId = (num) =>  String(num).padStart(3, '0');

const chance = new Chance();

const seedData = [];

const attractionIds = [];

for (let i = 1; i <= 100; i += 1) {
   attractionIds.push(String(i).padStart(3, 0));
}

attractionIds.forEach(attractionId => {
  let lat = chance.lat
    /*
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