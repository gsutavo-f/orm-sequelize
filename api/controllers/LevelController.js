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

   static async getLevelById(req, res) {
      const {id} = req.params;

      try {
         const level = await database.Level.findOne({
            where: {
               id: Number(id)
            }
         });
         return res.status(200).json(level);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async createLevel(req, res) {
      const level = req.body;
      try {
         await database.Level.create(level);
         return res.status(200).json({message: "Level created!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async updateLevel(req, res) {
      const {id} = req.params;
      const newLevel = req.body;
      try {
         await database.Level.update(newLevel, {
            where: {
               id: Number(id)
            }
         });
         return res.status(200).json({message: "Level updated!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async deleteLevel(req, res) {
      const {id} = req.params;
      try {
         await database.Level.destroy({
            where: {
               id: Number(id)
            }
         });
         return res.status(200).json({message: "Level deleted!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async restoreLevel(req, res) {
      const {id} = req.params;
      try {
         await database.Level.restore({
            where: {
               id: Number(id)
            }
         });
         return res.status(200).json({message: "Level restored!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

}

module.exports = LevelController;