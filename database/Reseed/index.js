const { Sequelize } = require('sequelize');
const { username, password } = require('./postgres_config');

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

(async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
 })();

 async findAttraction (id) => {
  await const item = sequelize.findByPk(id);

 }
