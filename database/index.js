const mongoose = require('mongoose');

const DB = process.env.db || 'localhost';

const mongoUri = `mongodb://${DB}/nearbyattractionsdb`;

const connection = mongoose.connect(mongoUri, (err) => {
  if (err) {
    console.log('Databse connection failed: ', err);
  } else {
    console.log('Database connection successful');
  }
});

module.exports = connection;
