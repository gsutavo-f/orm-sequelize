const database = require('../models');

class Services {
   constructor(modelName) {
      this.modelName = modelName;
   }

   async getAllRegisters() {
      return database[this.modelName].findAll();
   }

   async getOneRegister(id) {
      return database[this.modelName]
         .findOne({where: {id: id}});
   }

   async createRegister(data) {
      return database[this.modelName]
         .create(data);
   }

   async updateRegister(id, data, transaction = {}) {
      return database[this.modelName]
         .update(data, {where: {id: id}}, transaction);
   }

   async updateRegisters(where, data, transaction = {}) {
      return database[this.modelName]
         .update(data, {where: {...where}}, transaction);
   }

   async deleteRegister(id) {
      return database[this.modelName]
         .destroy({where: {id: id}});
   }
}

module.exports = Services;