const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/nearbyattractions';

const db = mongoose.connect(mongoUri, (err) => {
  if (err) {
    console.log('Databse connection failed: ', err)
  } else {
    console.log('Database connection successful')
  }
});

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log('database is connected');
// });

module.exports = db