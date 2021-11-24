const Sequelize = require('sequelize');

// for fast local testing
// const sequelizeInstance = new Sequelize("sqlite::memory:"); 

// for real development
const sequelizeInstance = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
  },
);

module.exports = sequelizeInstance;