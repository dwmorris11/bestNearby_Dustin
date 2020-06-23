const app = require('../server/routehandlers.js/index.js');
const NearbyAttractions = require('../database/NearbyAttractions')
const mongoose = require('mongoose');

//enzyme is recommended framefork for integration testing
//jest is recommended unit testing

//test if database find recieves the attraction id
//test if database find return the database object
//test if api returns data when found
//test if api returns error when not found

// **** below not woring
// describe("FindAttractionbyId interacts with database", () => {
//   beforeAll(() => {
//     const testData = {
//         attractionId: 200,
//         location: {
//           lat: 45,
//           long: 45,
//         },
//         contact: {
//           address: '111 Street',
//           website: 'email.com',
//           phonenumber: "(526) 770-3178",
//           email: "email@email.com",
//         },
//         nearByRestaurants: [
//           {
//             id: 1,
//             location: {
//               lat: 46,
//               long: 46,
//             },
//             image: "https://jwkfec2020.s3-us-west-2.amazonaws.com/FEC_images/FEC0.jpg",
//             name: 'mr bills',
//             liked: false,
//             reviewCount: 1,
//             reviewRating: 1,
//             kind: 'american',
//             price: '$',
//           },
//         ],
//         nearByAttractions: [
//           {
//             id: 1,
//             location: {
//               lat: 46,
//               long: 47,
//             },
//             image: "https://jwkfec2020.s3-us-west-2.amazonaws.com/FEC_images/FEC0.jpg",
//             name: 'mr bobs',
//             liked: false,
//             reviewCount: 1,
//             reviewRating: 1,
//             kind: 'bars and club',
//           },
//         ],
//         nearbyExperience: {
//           name: "Eco tours",
//           image: "https://jwkfec2020.s3-us-west-2.amazonaws.com/FEC_images/FEC0.jpg",
//           kind: "tour",
//           reviewCount: 1,
//           reviewRating: 1,
//           priceUnit: "per adult",
//           pricenumber: 200,
//           priceType: "$",
//           language: 'french',
//           description: 'test p aragraph',
//         },
//       }
//       return NearbyAttractions.NearbyAttraction.create(testData)
//     });
    
// });

// afterAll(() => {
//     NearbyAttractions.NearbyAttraction.deleteMany({ attractionId: 200 })
//       .then(() => {
//         mongoose.connection.close();
//       });
//   });

//   test("findAttraction should return attraction document at the provided id", () => {
//     expect(NearbyAttractions.findAttraction(200).location.lat).toBe(45)
//   })
