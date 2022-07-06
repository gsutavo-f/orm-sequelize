'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registration extends Model {
    static associate(models) {
      Registration.belongsTo(models.Person, {
        foreignKey: "studentId"
      });
      Registration.belongsTo(models.Class, {
        foreignKey: "classId"
      });
    }
  }
  Registration.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Registration',
  });
  return Registration;
};