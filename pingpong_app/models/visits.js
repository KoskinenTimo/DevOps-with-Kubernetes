const Sequelize = require('sequelize');
const db = require('../util/database');

const Visit = db.define('visits', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    unique: true,
  }
})

module.exports = Visit;