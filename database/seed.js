const Chance = require('chance');
const NearbyAttractions = require('./nearbyattractions.js');

const chance = new Chance();

const seedData = [];

const attractionIds = [];

for (let i = 1; i <= 100; i += 1) {
  attractionIds.push(String(i).padStart(3, 0));
}

// const nationalities = ['en', 'it', 'nl', 'uk', 'de', 'jp', 'es', 'fr'];
const restaurantBldgs = ['Noodle House', 'House', 'Eatery', 'Kitchen', 'Buffet', 'Soup House', 'Pancake House'];
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
for (let i = 1; i < 15; i += 1) {
  imageThumbs.push(`${imageThumbBase}FEC${i}.jpg`);
}

const makeNearbyRestaurant = function (idx, ParentLocation) {
  const lat = ParentLocation.lat + chance.floating({ min: -0.1, max: 0.1, fixed: 3 });
  const lng = ParentLocation.lng + chance.floating({ min: -0.1, max: 0.1, fixed: 3 });
  const name = getRandomName();
  const image = imageThumbs[chance.integer({ min: 0, max: restaurantTypes.length - 1 })];
  const liked = false;
  const reviewCount = chance.integer({ min: 1, max: 1000 });
  const reviewRating = chance.integer({ min: 0, max: 10 });
  const kind = restaurantTypes[chance.integer({ min: 0, max: restaurantTypes.length - 1 })];
  const price = priceIcons[chance.integer({ min: 0, max: priceIcons.length - 1 })];

  const newRestaurant = {
    id: idx,
    location: {
      lat,
      lng,
    },
    image,
    name,
    liked,
    reviewCount,
    reviewRating,
    kind,
    price,
  };
  return newRestaurant;
};

const barSuffixes = ['Lounge', 'Hideaway', 'Cantina', 'Club', 'Pub', 'Hangout'];

const makeNearbyAttraction = function (idx, ParentLocation) {
  const lat = ParentLocation.lat + chance.floating({ min: -0.1, max: 0.1, fixed: 3 });
  const lng = ParentLocation.lng + chance.floating({ min: -0.1, max: 0.1, fixed: 3 });
  const name = `The ${chance.animal()} ${barSuffixes[chance.integer({ min: 0, max: barSuffixes.length - 1 })]}`;
  const image = imageThumbs[chance.integer({ min: 0, max: restaurantTypes.length - 1 })];
  // false because no user data is collected in this scope
  const liked = false;
  const reviewCount = chance.integer({ min: 1, max: 1000 });
  const reviewRating = chance.integer({ min: 0, max: 10 });
  const kind = 'bars & clubs';

  const newAttraction = {
    id: idx,
    location: {
      lat,
      lng,
    },
    image,
    name,
    liked,
    reviewCount,
    reviewRating,
    kind,
  };
  return newAttraction;
};

const experienceTypes = ['Charter Tour', 'Day Trips'];

const languages = ['English', 'French', 'Spanish'];

const makeNearbyExperience = function () {
  const name = chance.company();
  const image = imageThumbs[chance.integer({ min: 0, max: restaurantTypes.length - 1 })];
  const kind = experienceTypes[chance.integer({ min: 0, max: experienceTypes.length - 1 })];
  const reviewCount = chance.integer({ min: 1, max: 1000 });
  const reviewRating = chance.integer({ min: 0, max: 10 });
  const priceUnit = 'per adult';
  const priceType = '$';
  const language = languages[chance.integer({ min: 0, max: languages.length - 1 })];
  const priceNumber = chance.integer({ min: 50, max: 500 });
  const description = chance.paragraph({ sentences: 3 });

  const newNearbyExperience = {
    name,
    image,
    kind,
    reviewCount,
    reviewRating,
    priceUnit,
    priceNumber,
    priceType,
    language,
    description,
  };
  return newNearbyExperience;
};

attractionIds.forEach((attractionId) => {
  const lat = chance.latitude({ fixed: 3 });
  const lng = chance.longitude({ fixed: 3 });
  const location = {
    lat,
    lng,
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
  const nearByExperience = makeNearbyExperience();
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
    nearByExperience,
  };

  seedData.push(newAttraction);
  
});

// console.log(seedData[0])

NearbyAttractions.NearbyAttraction.create(seedData)
  .then(() => console.log('created seed data'))
  .catch((err) => console.log(err));
