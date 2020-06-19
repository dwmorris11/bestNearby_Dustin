const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/nearbyattractions';

const connection = mongoose.connect(mongoUri, (err) => {
  if (err) {
    console.log('Databse connection failed: ', err)
  } else {
    console.log('Database connection successful')
  }
});

module.exports = connection