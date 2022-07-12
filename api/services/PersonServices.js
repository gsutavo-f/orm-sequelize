const Services = require('./Services.js');
const database = require('../models');

class PersonServices extends Services {
   constructor() {
      super('Person');
      this.registrations = new Services('Registration');
   }

   async getActiveRegisters(where = {}) {
      return database[this.modelName]
         .findAll({where: {...where}});
   }

   async getAllRegisters(where = {}) {
      return database[this.modelName]
         .scope('all')
         .findAll({where: {...where}});
   }

   async cancelStudentRegistration(studentId) {
      return database.sequelize.transaction(async transaction => {
         await super.updateRegister(
            studentId,
            {active: false},
            {transaction: transaction}
         );
         await this.registrations.updateRegisters(
            {studentId: studentId},
            {status: 'Canceled'},
            {transaction: transaction}
         );
      });
   }

}

module.exports = PersonServices;