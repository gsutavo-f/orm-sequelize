'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      Person.hasMany(models.Class, {
        foreignKey: "professorId"
      });
      Person.hasMany(models.Registration, {
        foreignKey: "studentId"
      });
    }
  }
  Person.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
    paranoid: true
  });
  return Person;
};