'use strict';
const {DataTypes } = require('sequelize');

const { CUSTOMER_TABLE } = require('../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    //la referencia ya no va por eso se pone manual
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    });
  },

  async down (queryInterface) {

    //await queryInterface.dropSchema(CUSTOMER_TABLE); Se debe tener la version anterior
  }
};
