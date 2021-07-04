const sequelize = require('./db');
const { DataType } = require('sequelize');

const User = sequelize.define('user', {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    authoIncrement: true    
  },
  email: {
    type: DataType.STRING,
    unique: true,
    password: DataType.STRING
  },
  role: {
    type: DataType.STRING,
    default: 'user'
  }
});

const Basket = sequelize.define('basket', {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    authoIncrement: true
  }
});

const BasketDevice = sequelize.define('basket_device', {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    authoIncrement: true
  }
});

const Device = sequelize.define('device', {
  id: {
    type: DataType.INTEGER, primaryKey: true, autoIncrement: true
  },
  name: {
    type: DataType.STRING, unique: true, allowNull: false
  },
  price: {
    type: DataType.INTEGER, allowNull: false
  },
  rating: {
    type: DataType.INTEGER, defaultValue: 0
  },
  img: {
    type: DataType.STRING, allowNull: false
  }
});

const Type = sequelize.define('type', {
  id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataType.STRING, unique: true, allowNull: false}
});

const Brand = sequelize.define('brand', {
  id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataType.INTEGER, allowNull: false}
});

const Rating = sequelize.define('rating', {
  id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
  rate: {type: DataType.STRING, unique: true, allowNull: false}
});

const DeveceInfo = sequelize.define('devece-info', {
  id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataType.STRING, allowNull: false},
  description: {type: DataType.STRING, allowNull: false}
});
