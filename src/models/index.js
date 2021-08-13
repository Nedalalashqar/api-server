'use strict';

require('dotenv').config();
const POSTGRES_URI = process.env.NODE_ENV="test" ?'sqlite:memory' :'postgres://localhost:5432/nedalalashqar';
const { Sequelize, DataTypes } = require('sequelize');
const Collection = require('./lip/collection');
const customerSchema = require('./customer.schema');
const foodSchema = require('./food.schema');

let sequelize = new Sequelize(POSTGRES_URI);
const customerMod = customerSchema(sequelize, DataTypes);
const foodMod = foodSchema(sequelize, DataTypes);
customerMod.hasMany(foodMod, { foreignKey: 'customerId', sourceKey: 'id'});
foodMod.belongsTo(customerMod, { foreignKey: 'customerId', targetKey: 'id'}); 
const customerCollection = new Collection(customerMod);
const foodCollection = new Collection(foodMod);

module.exports = {
  db: sequelize,
  customerCollection: customerCollection,
  foodCollection: foodCollection
}
