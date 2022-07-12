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
         .findOne({where: {id: Number(id)}});
   }

   async getAndCountRegisters(where = {}, aggregators) {
      return database[this.modelName]
         .findAndCountAll(
            {
               where: {...where},
               ...aggregators
            }
         );
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

   async deleteRegisters(where = {}) {
      return database[this.modelName]
         .destroy({where: {...where}});
   }

   async restoreRegister(id) {
      return database[this.modelName]
         .restore({where: {id: id}});
   }

   async restoreRegisters(where = {}) {
      return database[this.modelName]
         .restore({where: {...where}});
   }

}

module.exports = Services;