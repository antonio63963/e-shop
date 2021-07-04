const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_RASSWORD, {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
);