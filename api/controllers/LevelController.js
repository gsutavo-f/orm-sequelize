const database = require('../models');

class LevelController {

   static async getLevels(req, res) {
      try {
         const levels = await database.Level.findAll();
         return res.status(200).json(levels);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

}

module.exports = LevelController;