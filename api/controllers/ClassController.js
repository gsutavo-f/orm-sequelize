const database = require('../models');

class ClassController {

   static async getClasses(req, res) {
      try {
         const classes = await database.Class.findAll();
         return res.status(200).json(classes);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

}

module.exports = ClassController;