  'use strict';

const cloths = (sequelize, DataTypes) => sequelize.define('cloths', {
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

module.exports = cloths;
