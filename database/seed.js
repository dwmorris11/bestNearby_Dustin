const NearNearbyAttractions = require('./nearbyattractions.js');
const Chance = require('chance');

const getPaddedAttractionId = (num) =>  String(num).padStart(3, '0');

const chance = new Chance();

const seedData = [];

const attractionIds = [];

for (let i = 1; i <= 1; i += 1) {
   attractionIds.push(String(i).padStart(3, 0));
}

const nationalities = ['en', 'it', 'nl', 'uk', 'de', 'jp', 'es', 'fr'];
const restaurantBuildings = ['Palace', 'House', 'Shack', 'Jungle', 'Buffet', 'Experience'];
const restaurantTypes = ['Italian', 'Mediterranean', 'Indian', 'Thai', 'Vietnamese', 'Seafood', 'American', 'Barbecue'];
const priceIcons = ['$', '$$-$$$', '$$$$'];

const getRandomName = function() {
  //not currently attached because of undetermined bug
  let idx = chance.integer({min: 0, max: nationalities.length - 1})
  let randomNationality = nationalities[idx];

  let building = restaurantBuildings[chance.integer({min: 0, max: restaurantBuildings.length - 1})];
 
  //{nationality: randomNationality} - removed options from name
  let name = chance.first()

  return `${name}'s ${building}`;
}

const makeNearbyRestaurant = function(idx, ParentLocation) {
  let lat = ParentLocation.lat + chance.floating({min: -1, max: 1, fixed: 2});
  let lng = ParentLocation.lng + chance.floating({min: -1, max: 1, fixed: 2});
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

const makeNearbyAttraction = function(idx, ParentLocation) {
  let lat = ParentLocation.lat + chance.floating({min: -1, max: 1, fixed: 2});
  let lng = ParentLocation.lng + chance.floating({min: -1, max: 1, fixed: 2});
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

let experienceTypes = ['Charter Tour', 'Day Trips']

let languages = ['English', 'French', 'Spanish']

const makeNearbyExperience = function() {
  let name = chance.company();
   //let image = image;
  let type = experienceTypes[chance.integer({min: 0, max: experienceTypes.length -1})];
  let reviewCount = chance.integer({min: 1, max: 1000});
  let reviewRating = chance.integer({min: 0, max: 10});
  let priceUnit = 'per adult';
  let priceNumber = chance.integer({min: 50, max: 500});
  let pricetype = '$';
  let language = languages[chance.integer({min: 0, max: languages.length -1})];
  let description = chance.paragraph({sentences: 3});

  let newNearbyExperience = {
    Name: name,
    // Image: image,
    Type: type,
    Review_count: reviewCount,
    Review_rating: reviewRating,
    PriceUnit: priceUnit,
    PriceNumber: priceNumber,
    PriceType: pricetype, 
    Language: language,
    Description:  description
  }
  return newNearbyExperience;
}


attractionIds.forEach(attractionId => {
  let randLocation = { 
    lat: chance.latitude({fixed: 2}),
    lng: chance.latitude({fixed: 2})
  };
  let randAddress = chance.address({short_suffix: true});
  let randWebsite = chance.email();
  let randPhoneNumber = chance.phone()
  let randEmail = chance.email();
  let nearByRestaurants = [];
  let nearByAttractions = [];
  
  for (let i = 0; i < 3; i += 1) {
      nearByRestaurants.push(makeNearbyRestaurant(i, randLocation));
      nearByAttractions.push(makeNearbyAttraction(i, randLocation));
  }
  let nearbyExperience = makeNearbyExperience();
  
  let newAttraction = {
    attractionId: attractionId,
    location: randLocation,
    contact: {
        address: randAddress,
        website: randWebsite,
        phoneNumber: randPhoneNumber,
        Email: randEmail
    },
    nearByRestaurants: nearByRestaurants,
    nearByAttractions: nearByAttractions,
    NearByExperience: nearbyExperience
  }

  seedData.push(newAttraction);
})