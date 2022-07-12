const database = require('../models');

class Services {
   constructor(modelName) {
      this.modelName = modelName;
   }

   async getAllRegisters() {
      return database[this.modelName].findAll();
   }

   async getOneRegister(id) {
      return database[this.modelName].findOne({
         where: {
            id: Number(id)
         }
      });
   }

   async createRegister(data) {

   }

   async updateRegister(id, data) {

   }

   async deleteRegister(id) {

   }
}

module.exports = Services;