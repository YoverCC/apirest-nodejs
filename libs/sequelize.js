const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('../db/models');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log,
});

setupModels(sequelize);

// sync() no se aconseja para correr en produccion. leer la documentacion
//sequelize.sync(); // va a coger los modelos y va a crear la estructura

module.exports = sequelize;
