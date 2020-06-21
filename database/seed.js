const Chance = require('chance');
const NearbyAttractions = require('./nearbyattractions.js');

const chance = new Chance();

const seedData = [];

const attractionIds = [];

for (let i = 1; i <= 100; i += 1) {
  attractionIds.push(String(i).padStart(3, 0));
}

// const nationalities = ['en', 'it', 'nl', 'uk', 'de', 'jp', 'es', 'fr'];
const restaurantBldgs = ['Palace', 'House', 'Shack', 'Jungle', 'Buffet', 'Experience'];
const restaurantTypes = ['Italian', 'Mediterranean', 'Indian', 'Thai', 'Vietnamese', 'Seafood', 'American', 'Barbecue'];
const priceIcons = ['$', '$$-$$$', '$$$$'];

const getRandomName = function () {
  // not currently attached because of undetermined bug
  // const idx = chance.integer({ min: 0, max: nationalities.length - 1 });
  // const randomNationality = nationalities[idx];
  const building = restaurantBldgs[chance.integer({ min: 0, max: restaurantBldgs.length - 1 })];
  // {nationality: randomNationality} - removed options from name
  const name = chance.first();

  return `${name}'s ${building}`;
};

const imageThumbBase = 'https://jwkfec2020.s3-us-west-2.amazonaws.com/FEC_images/';
const imageThumbs = [];
for (let i = 0; i < 15; i += 1) {
  imageThumbs.push(`${imageThumbBase}FEC${i}.jpg`);
}

const makeNearbyRestaurant = function (idx, ParentLocation) {
  const lat = ParentLocation.lat + chance.floating({ min: -1, max: 1, fixed: 2 });
  const long = ParentLocation.long + chance.floating({ min: -1, max: 1, fixed: 2 });
  const name = getRandomName();
  const image = imageThumbs[chance.integer({ min: 0, max: restaurantTypes.length - 1 })];
  const liked = false;
  const reviewCount = chance.integer({ min: 1, max: 1000 });
  const reviewRating = chance.integer({ min: 0, max: 10 });
  const type = restaurantTypes[chance.integer({ min: 0, max: restaurantTypes.length - 1 })];
  const price = priceIcons[chance.integer({ min: 0, max: priceIcons.length - 1 })];

  const newRestaurant = {
    Id: idx,
    location: {
      lat,
      long,
    },
    image,
    name,
    liked,
    reviewCount,
    reviewRating,
    type,
    price,
  };
  return newRestaurant;
};

const barSuffixes = ['Lounge', 'Hideaway', 'Cantina', 'Club', 'Pub', 'Hangout'];

const makeNearbyAttraction = function (idx, ParentLocation) {
  const lat = ParentLocation.lat + chance.floating({ min: -1, max: 1, fixed: 2 });
  const long = ParentLocation.long + chance.floating({ min: -1, max: 1, fixed: 2 });
  const name = `The ${chance.animal()} ${barSuffixes[chance.integer({ min: 0, max: barSuffixes.length - 1 })]}`;
  const image = imageThumbs[chance.integer({ min: 0, max: restaurantTypes.length - 1 })];
  // false because no user data is collected in this scope
  const liked = false;
  const reviewCount = chance.integer({ min: 1, max: 1000 });
  const reviewRating = chance.integer({ min: 0, max: 10 });
  const type = 'bars & clubs';

  const newAttraction = {
    Id: idx,
    location: {
      lat,
      long,
    },
    image,
    name,
    liked,
    reviewCount,
    reviewRating,
    type,
  };
  return newAttraction;
};

const experienceTypes = ['Charter Tour', 'Day Trips'];

const languages = ['English', 'French', 'Spanish'];

const makeNearbyExperience = function () {
  const name = chance.company();
  const image = imageThumbs[chance.integer({ min: 0, max: restaurantTypes.length - 1 })];
  const type = experienceTypes[chance.integer({ min: 0, max: experienceTypes.length - 1 })];
  const reviewCount = chance.integer({ min: 1, max: 1000 });
  const reviewRating = chance.integer({ min: 0, max: 10 });
  const priceUnit = 'per adult';
  const pricetype = '$';
  const language = languages[chance.integer({ min: 0, max: languages.length - 1 })];
  const priceNumber = chance.integer({ min: 50, max: 500 });
  const description = chance.paragraph({ sentences: 3 });

  const newNearbyExperience = {
    name,
    image,
    type,
    reviewCount,
    reviewRating,
    priceUnit,
    priceNumber,
    pricetype,
    language,
    description,
  };
  return newNearbyExperience;
};

attractionIds.forEach((attractionId) => {
  const lat = chance.latitude({ fixed: 2 });
  const long = chance.longitude({ fixed: 2 });
  const location = {
    long,
    lat,
  };
  const address = chance.address({ short_suffix: true });
  const website = chance.email();
  const phonenumber = chance.phone();
  const email = chance.email();
  const nearByRestaurants = [];
  const nearByAttractions = [];
  for (let i = 0; i < 3; i += 1) {
    nearByRestaurants.push(makeNearbyRestaurant(i, location));
    nearByAttractions.push(makeNearbyAttraction(i, location));
  }
  const nearbyExperience = makeNearbyExperience();
  const newAttraction = {
    attractionId,
    location,
    contact: {
      address,
      website,
      phonenumber,
      email,
    },
    nearByRestaurants,
    nearByAttractions,
    nearbyExperience,
  };

  seedData.push(newAttraction);
});

NearbyAttractions.NearbyAttraction.create(seedData)
  .then(() => console.log('created seed data'))
  .catch((err) => console.log(err));
