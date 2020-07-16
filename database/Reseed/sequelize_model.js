const { Sequelize, DataTypes } = require('sequelize');
const { username, password } = require('./postgres_config');
const pgtools = require("pgtools");
const config = {
  user: username,
  host: "localhost",
  password: password,
  port: 5432
};

pgtools.dropdb(config, "bestNearby")
  .then(() => pgtools.createdb(config, "bestNearby"))
  .catch(() => {
    pgtools.createdb(config, "bestNearby");
  })
  .finally( () => {
    const sequelize = new Sequelize ("bestNearby", username, password, {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
      });

    const nearBy = sequelize.define('nearby', {
      attractionid: DataTypes.STRING,
      lat: DataTypes.DECIMAL, //location
      lng: DataTypes.DECIMAL, //location
      address: DataTypes.TEXT, //contact
      website: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
      email: DataTypes.STRING //contact
    }, { tableName: 'nearby',
         createdAt: false,
         updatedAt: false
        });

    const nearByRestaurant = sequelize.define('nearbyrestaurant', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      lat: DataTypes.DECIMAL,
      lng: DataTypes.DECIMAL,
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      liked: DataTypes.BOOLEAN,
      reviewcount: DataTypes.INTEGER,
      reviewrating: DataTypes.INTEGER,
      kind: DataTypes.STRING,
      price: DataTypes.STRING,
      attractionid: DataTypes.STRING
    }, {
      createdAt: false,
      updatedAt: false
    });
    const nearByAttraction = sequelize.define('nearbyattraction', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      lat: DataTypes.DECIMAL,
      lng: DataTypes.DECIMAL,
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      liked: DataTypes.BOOLEAN,
      reviewcount: DataTypes.INTEGER,
      reviewrating: DataTypes.INTEGER,
      kind: DataTypes.STRING,
      attractionid: DataTypes.STRING
    }, {
      createdAt: false,
      updatedAt: false
    });
    const nearByExperience = sequelize.define('nearbyexperience', {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      kind: DataTypes.STRING,
      reviewcount: DataTypes.INTEGER,
      reviewrating: DataTypes.INTEGER,
      priceunit: DataTypes.STRING,
      pricenumber: DataTypes.INTEGER,
      pricetype: DataTypes.STRING,
      language: DataTypes.STRING,
      description: DataTypes.TEXT,
      attractionid: DataTypes.STRING
    }, {
      createdAt: false,
      updatedAt: false
    });

    (async () => {
      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      try {
       await nearBy.sync({ force: true });
       await nearByRestaurant.sync({ force: true });
       await nearByAttraction.sync({ force: true });
       await nearByExperience.sync({ force: true });
      } catch (error) {
        console.error('Unable to add tables', error);
      }
    })();


});
