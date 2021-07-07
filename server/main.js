require('dotenv').config();
const  express = require('express');
const PORT = process.env.PORT || 5000;
const sequelize = require('./db');
const cors = require('cors')
const models = require('./models/models');
const router = require('./routes');
const fileUpload = require('express-fileupload');


const server = express();
server.use(cors());
server.use(express.json());
server.use(fileUpload(), {});
server.use('/api', router)

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