'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Listing.belongsTo(models.Profile, {
        foreignKey: 'profileId'
      })
    }
  }
  Listing.init({
    item: DataTypes.STRING,
    price: DataTypes.INTEGER,
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id'
      }
    },
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Listing',
  });
  return Listing;
};