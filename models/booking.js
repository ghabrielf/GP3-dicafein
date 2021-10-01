'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo (models.User, {foreignKey: "user_id"})
      this.belongsTo(models.Table, {foreignKey: "table_id"}) 
    }
  };
  booking.init({
    user_id: DataTypes.INTEGER,
    table_id: DataTypes.INTEGER,
    status: DataTypes.ENUM(["on site", "waiting", "cancel", "done"])
  }, {
    sequelize,
    modelName: 'booking',
  });
  return booking;
};