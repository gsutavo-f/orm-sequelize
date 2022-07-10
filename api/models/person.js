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
      name: {
         type: DataTypes.STRING,
         validate: {
            isName: function (value) {
               if (value.length < 3) throw new Error('Name is to short');
            }
         }
      },
      active: DataTypes.BOOLEAN,
      email: {
         type: DataTypes.STRING,
         validate: {
            isEmail: {
               args: true,
               msg: 'invalid email'
            }
         }
      },
      role: DataTypes.STRING
   }, {
      sequelize,
      modelName: 'Person',
      paranoid: true,
      defaultScope: {
         where: {
            active: true
         }
      },
      scopes: {
         all: {
            where: {}
         }
      }
   });
   return Person;
};