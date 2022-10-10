const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const stateSchema = sequelize.define("State", {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  stateName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  CountryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdBy: {
    type: DataTypes.INTEGER,
  },
  updatedBy: {
    type: DataTypes.INTEGER,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
  },
});
module.exports = stateSchema;
