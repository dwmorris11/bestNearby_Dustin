const Chance = require('chance');
const fs = require('fs');
const { Readable, pipeline } = require('stream');
let startTime = Date.now();
let nearFile = fs.createWriteStream('nearby.txt', {flags: 'a'})
    .on('error', (err) => console.error(err.message));
let experienceFile = fs.createWriteStream('experience.txt', {flags: 'a'})
    .on('error', (err) => console.error(err.message));
let restFile = fs.createWriteStream('rest.txt', {flags: 'a'})
    .on('error', (err) => console.error(err.message));
let attractionFile = fs.createWriteStream('attraction.txt', {flags: 'a'})
    .on('error', (err) => console.error(err.message));

const chance = new Chance();

const seedData = [];

const attractionIds = [];

let locations = [];

const d = '|'; //delimiter

const qty = 10000000; //quantity of records

for (let i = 1; i <= qty; i += 1) {
  attractionIds.push(String(i).padStart(8, 0));
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

const imageThumbBase = 'https://images-trip.s3.us-east-2.amazonaws.com/';
const imageThumbs = [];
for (let i = 1; i < 1000; i += 1) {
  imageThumbs.push(`${imageThumbBase}FEC${i}.jpg`);
}

const makeNearbyRestaurant = function (idx, ParentLocation, attractionId) {
  const lat = ParentLocation.lat + chance.floating({ min: -0.1, max: 0.1, fixed: 3 });
  const lng = ParentLocation.lng + chance.floating({ min: -0.1, max: 0.1, fixed: 3 });
  const name = getRandomName();
  const image = imageThumbs[chance.integer({ min: 0, max: restaurantTypes.length - 1 })];
  const liked = false;
  const reviewCount = chance.integer({ min: 1, max: 1000 });
  const reviewRating = chance.integer({ min: 0, max: 10 });
  const kind = restaurantTypes[chance.integer({ min: 0, max: restaurantTypes.length - 1 })];
  const price = priceIcons[chance.integer({ min: 0, max: priceIcons.length - 1 })];
  const newRestaurant = idx + d + lat + d + lng + d + image + d + name + d + liked
    + d + reviewCount + d + reviewRating + d + kind + d + price + d + attractionId + '\n';
  return newRestaurant;
};

const barSuffixes = ['Lounge', 'Hideaway', 'Cantina', 'Club', 'Pub', 'Hangout'];

const makeNearbyAttraction = function (idx, ParentLocation, attractionId) {
  const lat = ParentLocation.lat + chance.floating({ min: -0.1, max: 0.1, fixed: 3 });
  const lng = ParentLocation.lng + chance.floating({ min: -0.1, max: 0.1, fixed: 3 });
  const name = `The ${chance.animal()} ${barSuffixes[chance.integer({ min: 0, max: barSuffixes.length - 1 })]}`;
  const image = imageThumbs[chance.integer({ min: 0, max: restaurantTypes.length - 1 })];
  // false because no user data is collected in this scope
  const liked = false;
  const reviewCount = chance.integer({ min: 1, max: 1000 });
  const reviewRating = chance.integer({ min: 0, max: 10 });
  const kind = 'bars & clubs';
  const newAttraction = idx + d + lat + d + lng + d + image + d + name + d
    + liked + d + reviewCount + d + reviewRating + d + kind + d + attractionId + '\n';
  return newAttraction;
};

const experienceTypes = ['Charter Tour', 'Day Trips'];

const languages = ['English', 'French', 'Spanish'];

const makeNearbyExperience = function (attractionId) {
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
  const newNearbyExperience = name + d + image + d + kind + d + reviewCount + d
    + reviewRating + d + priceUnit + d + priceNumber + d + priceType + d + language
    + d + description + d + attractionId + '\n';
  return newNearbyExperience;
};

async function * generate() {
  for (let i = 0; i < attractionIds.length; i++) {
    const lat = chance.latitude({ fixed: 3 });
    const lng = chance.longitude({ fixed: 3 });
    const location = {
      lat,
      lng
    };
    locations.push(location);
    const address = String(chance.address({ short_suffix: true }));
    const website = chance.email();
    const phonenumber = chance.phone();
    const email = chance.email();
    const newAttraction = attractionIds[i] + d + lat + d + lng + d + address + d + website
      + d + phonenumber + d + email + '\n';
    yield newAttraction;
  }
}

async function * generate1() {
  for( let j = 0; j < attractionIds.length; j++){
    for (let i = 0; i < 3; i+= 1) {
      yield makeNearbyRestaurant(i, locations[j], attractionIds[j]);
    }
  }
}

async function * generate2() {
  for( let j = 0; j < attractionIds.length; j++){
    for (let i = 0; i < 3; i+= 1) {
      yield makeNearbyAttraction(i, locations[j], attractionIds[j]);
    }
  }
}

async function * generate3() {
  for( let j = 0; j < attractionIds.length; j++){
      yield makeNearbyExperience(attractionIds[j]);
  }
}

pipeline(
  nearRead = Readable.from(generate()),
  nearFile,
  (err) => {
    if(err) {
      console.error('Nearby Pipeline failed', err);
    } else {
      console.log('Nearby Pipeline succeeded');
      const finishNear = -1 * (startTime - Date.now())/1000;
      console.log('Finished Nearby in ', finishNear, ' seconds')
      startTime = Date.now();
      generateRestaurant();
    }
  }
);

function generateRestaurant() {
  pipeline(
    nearRest = Readable.from(generate1()),
    restFile,
    (err) => {
      if(err) {
        console.error('Restaurant Pipeline failed', err);
      } else {
        console.log('Restaurant Pipeline succeeded');
        const finishRest = -1 * (startTime - Date.now())/1000;
        console.log('Finished Restaurant in ', finishRest, ' seconds')
        startTime = Date.now();
        generateAttraction();
      }
    }
  );
}

function generateAttraction () {
  pipeline(
    nearAttraction = Readable.from(generate2()),
    attractionFile,
    (err) => {
      if(err) {
        console.error('Attraction Pipeline failed', err);
      } else {
        console.log('Attraction Pipeline succeeded');
        const finishAttraction = -1 * (startTime - Date.now())/1000;
        console.log('Finished Attractions in ', finishAttraction, ' seconds')
        startTime = Date.now();
        generateExperience();
      }
    }
  );
}

function generateExperience () {
  pipeline(
    nearAttraction = Readable.from(generate3()),
    experienceFile,
    (err) => {
      if(err) {
        console.error('Experience Pipeline failed', err);
      } else {
        console.log('Experience Pipeline succeeded');
        const finishExperience = -1 * (startTime - Date.now())/1000;
        console.log('Finished Experience in ', finishExperience, ' seconds')
      }
    }
  );
}