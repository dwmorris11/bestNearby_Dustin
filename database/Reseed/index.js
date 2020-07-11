const { Sequelize } = require('sequelize');
require('./sequelize_model');
const { username, password } = require('./postgres_config');

async function transfer () {
  const sequelize = await new Sequelize ("bestNearby", username, password, {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    pool: {
      "max": 3,
      "min": 0,
      "idle": 1000,
      "evict": 1000
    }
  });
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  try {
  const rowsInsertedNearBy = await sequelize.query('COPY nearBy FROM "nearBy.txt" WITH (DELIMITER "|")');
    // const rowsInsertedNearByExperiences = await sequelize.query('COPY nearByExperiences FROM "experience.txt" WITH (DELIMITER "|")');
    // const rowsInsertedNearByRestaurants = await sequelize.query('COPY nearByRestaurants FROM "restaurant.txt" WITH (DELIMITER "|")');
    // const rowsInsertedNearByAttractions = await sequelize.query('COPY nearByAttractions FROM "attractions.txt" WITH (DELIMITER "|")');
  } catch (error) {
    console.error('Unable to add data from: ', error);
  }
  console.log('Rows Inserted into nearBy: ', rowsInsertedNearBy);
  // console.log('Rows Inserted into nearByExperiences: ', rowsInsertedNearByExperiences);
  // console.log('Rows Inserted into nearByRestaurants: ', rowsInsertedNearByRestaurants);
  // console.log('Rows Inserted into nearByAttractions: ', rowsInsertedNearByAttractions);
  sequelize.close();
};

transfer();



