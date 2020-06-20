const NearNearbyAttractions = require('./nearbyattractions.js');
const Chance = require('chance');

const getPaddedAttractionId = (num) =>  String(num).padStart(3, '0');

const chance = new Chance();

const seedData = [];

const attractionIds = [];

for (let i = 1; i <= 100; i += 1) {
   attractionIds.push(String(i).padStart(3, 0));
}

const nationalities = ['en', 'it', 'nl', 'uk', 'de', 'jp', 'es', 'fr'];
const restaurantBuildings = ['Palace', 'House', 'Shack', 'Jungle', 'Buffet', 'Experience'];
const restaurantTypes = ['Italian', 'Mediterranean', 'Indian', 'Thai', 'Vietnamese', 'Seafood', 'American', 'Barbecue'];
const priceIcons = ['$', '$$-$$$', '$$$$'];

const getRandomName = function() {
  let randomNationality = nationalities[chance.integer({min: 0, max: nationalities.length - 1})];
  let building = restaurantBuildings[chance.integer({min: 0, max: restaurantBuildings.length - 1})];
  let name = chance.first({nationality: randomNationality})
  return `${name}'s ${building}`;
}

const makeNearbyRestaurant = function(idx, ParentAttraction) {
  let lat = ParentAttraction.lat + chance.floating({min: -1, max: 1, fixed: 2});
  let lng = ParentAttraction.lng + chance.floating({min: -1, max: 1, fixed: 2});
  let name = getRandomName();
  //let image = random image
  //false because no user data is collected in this scope
  let liked = false;
  let reviewCount = chance.integer({min: 1, max: 1000});
  let reviewRating = chance.integer({min: 0, max: 10});
  let type = restaurantTypes[chance.integer({min: 0, max: restaurantTypes.length - 1})];
  let price = priceIcons[chance.integer({min: 0, max: priceIcons.length - 1})];

  let newRestaurant = {
    Id: idx,
    location: { 
        lat: lat,
        lng: lng
    },
    name: name,
    liked: liked,
    Review_count: reviewCount,
    Review_rating: reviewRating,
    Type: type,
    price: price
  };  
  return newRestaurant;
}

const barSuffixes = ['Lounge', 'Hideaway', 'Cantina', 'Club', 'Pub', 'Hangout'];

const makeNearbyAttraction = function(idx, ParentAttraction) {
  let lat = ParentAttraction.lat + chance.floating({min: -1, max: 1, fixed: 2});
  let lng = ParentAttraction.lng + chance.floating({min: -1, max: 1, fixed: 2});
  let name = `The ${chance.animal()} ${barSuffixes[chance.integer({min: 0, max: barSuffixes.length - 1})]}`;
  //let image = random image
  //false because no user data is collected in this scope
  let liked = false;
  let reviewCount = chance.integer({min: 1, max: 1000});
  let reviewRating = chance.integer({min: 0, max: 10});
  let type = 'bars & clubs';

  let newAttraction = {
    Id: idx,
    location: { 
        lat: lat,
        lng: lng
    },
    name: name,
    liked: liked,
    Review_count: reviewCount,
    Review_rating: reviewRating,
    Type: type
  };  
  return newAttraction;
}

let testLatlong = { lat: chance.latitude({fixed: 2}),
    lng: chance.latitude({fixed: 2})
};

console.log(makeNearbyRestaurant(1, testLatlong))

// attractionIds.forEach(attractionId => {
//   let randLocation = { 
//     lat: chance.latitude({fixed: 2}),
//     lng: chance.latitude({fixed: 2})
//   };
//   let randaddress = chance.address({short_suffix: true});
//   let randWebsite = chance.email();
//   let randPhoneNumber = chance.phone()
//   let randEmail = chance.email();
//   let nearByRestaurants = [];
//   let nearByAttractions = [];
// })