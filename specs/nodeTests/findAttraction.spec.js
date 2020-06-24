const mongoose = require('mongoose');
const routes = require('../../server/routehandlers.js');
const db = require('../../database/NearbyAttractions');

// enzyme is recommended framefork for integration testing
// jest is recommended unit testing

// test if database find recieves the attraction id
// test if database find return the database object
// test if api returns data when found
// test if api returns error when not found

const mockRes = {
  status: () => {},
  json: () => {},
  send: () => {},
  sendStatus: () => {},
};
describe('FindAttractionbyId interacts with database', () => {
  beforeAll(() => {
    const testData = {
      attractionId: 200,
      location: {
        lat: 45,
        long: 45,
      },
      contact: {
        address: '111 Street',
        website: 'email.com',
        phonenumber: '(526) 770-3178',
        email: 'email@email.com',
      },
      nearByRestaurants: [
        {
          id: 1,
          location: {
            lat: 46,
            long: 46,
          },
          image: 'https://jwkfec2020.s3-us-west-2.amazonaws.com/FEC_images/FEC0.jpg',
          name: 'mr bills',
          liked: false,
          reviewCount: 1,
          reviewRating: 1,
          kind: 'american',
          price: '$',
        },
      ],
      nearByAttractions: [
        {
          id: 1,
          location: {
            lat: 46,
            long: 47,
          },
          image: 'https://jwkfec2020.s3-us-west-2.amazonaws.com/FEC_images/FEC0.jpg',
          name: 'mr bobs',
          liked: false,
          reviewCount: 1,
          reviewRating: 1,
          kind: 'bars and club',
        },
      ],
      nearbyExperience: {
        name: 'Eco tours',
        image: 'https://jwkfec2020.s3-us-west-2.amazonaws.com/FEC_images/FEC0.jpg',
        kind: 'tour',
        reviewCount: 1,
        reviewRating: 1,
        priceUnit: 'per adult',
        pricenumber: 200,
        priceType: '$',
        language: 'french',
        description: 'test p aragraph',
      },
    };
    return db.NearbyAttraction.create(testData);
  });
  afterAll(() => {
    db.NearbyAttraction.deleteMany({ attractiondId: 200 })
      .then(() => {
        mongoose.connection.close();
      });
  });
  test('findAttraction should return attraction document at the provided id', (done) => {
    return routes.findAttractionById({ params: { attractionId: 200 } }, mockRes, (err, data) => {
      expect(data).not.toBe(null);
      expect(err).toBe(null);
      expect(data.attractionId).toBe('200');
      done();
    });
  });
});
