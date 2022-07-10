'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      Class.hasMany(models.Registration);
      Class.belongsTo(models.Person, {
        foreignKey: "professorId"
      });
      Class.belongsTo(models.Level, {
        foreignKey: "levelId"
      });
    }
  }
  Class.init({
    startDate: DataTypes.DATEONLY,
    finalDate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Class',
    paranoid: true
  });
  return Class;
};