'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('food', {
  nameFood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  typeFood: {
    type: DataTypes.STRING,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = Food;