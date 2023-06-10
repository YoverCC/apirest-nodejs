const { User, UserSchema } = require('./user.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
}

// este archivo tendria el setup de nuestros modelos
module.exports = setupModels;
