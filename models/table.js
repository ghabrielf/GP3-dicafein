'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.booking, {foreignKey: "table_id"})
      // define association here
    }
  };
  Table.init({
    chalk_board: DataTypes.INTEGER,
    status: DataTypes.ENUM(['fill' , 'empty'])
  }, {
    sequelize,
    modelName: 'Table',
    tableName: 'cafe_tables',
  });
  return Table;
};