const Services = require('./Services.js');
const database = require('../models');

class RegistrationServices extends Services {
   constructor() {
      super('Registration');
   }

   async getOneRegister(where = {}) {
      return database[this.modelName]
         .findOne({where: {...where}});
   }
}

module.exports = RegistrationServices;