const {LevelServices} = require('../services');
const levelServices = new LevelServices();

class LevelController {

   static async getLevels(req, res) {
      try {
         const levels = await levelServices.getAllRegisters();
         return res.status(200).json(levels);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async getLevelById(req, res) {
      const {id} = req.params;
      try {
         const level = await levelServices.getOneRegister(id);
         return res.status(200).json(level);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async createLevel(req, res) {
      const level = req.body;
      try {
         await levelServices.createRegister(level);
         return res.status(200).json({message: "Level created!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async updateLevel(req, res) {
      const {id} = req.params;
      const newLevel = req.body;
      try {
         await levelServices.updateRegister(id, newLevel);
         return res.status(200).json({message: "Level updated!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async deleteLevel(req, res) {
      const {id} = req.params;
      try {
         await levelServices.deleteRegister(id);
         return res.status(200).json({message: "Level deleted!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async restoreLevel(req, res) {
      const {id} = req.params;
      try {
         await levelServices.restoreRegister(id);
         return res.status(200).json({message: "Level restored!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

}

module.exports = LevelController;