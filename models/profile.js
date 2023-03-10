'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.hasMany(models.Listing, {
        foreignKey: 'profileId',
        as: 'Listings'
      })
      Profile.belongsToMany(models.Listing, {
        as: 'listings',
        through: models.Order,
        foreignKey: 'profileId'
      })
    }
  }
  Profile.init({
    name: DataTypes.STRING,
    aboutMe: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};