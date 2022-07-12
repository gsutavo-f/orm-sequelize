const Services = require('./Services.js');
const database = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class ClassServices extends Services {
   constructor() {
      super('Class');
   }

   async getAllRegisters(initialDate, finalDate) {
      const where = {};
      initialDate || finalDate ? where.startDate = {} : null;
      initialDate ? where.startDate[Op.gte] = initialDate : null;
      finalDate ? where.startDate[Op.lte] = finalDate : null;
      return database[this.modelName]
         .findAll({where: {...where}});
   }

   async getFullRegisters() {
      const maxStudents = 2;
      return database[this.modelName].findAndCountAll({
         where: {
            status: 'Active'
         },
         attributes: ['classId'],
         group: ['classId'],
         having: Sequelize.literal(`count(classId) >= ${maxStudents}`)
      });
   }

}

module.exports = ClassServices;