const Sequelize = require('sequelize');
const db = require('../util/database');

const Visit = db.define('todos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: {
        args: [1,140],
        msg: "text must be between 1-140 characters in length"
      }
    }
  }
})

module.exports = Visit;