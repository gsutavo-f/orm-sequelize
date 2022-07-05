'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Class.hasMany(models.Registration);
      Class.belongsTo(models.Person, {
        foreignKey: "professorId"
      });
      Class.belongsTo(models.Level);
    }
  }
  Class.init({
    startDate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};