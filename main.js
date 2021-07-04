require('dotenv').config();
const  express = require('express');
const PORT = process.env.PORT || 5000;
const sequelize = require('./db');
const models = require('./models/models');


const server = express();
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    server.listen(PORT, () => console.log(`SERVER START PORT ${PORT}` ));
  } catch (error) {
    console.log(error);
  }
};

start();