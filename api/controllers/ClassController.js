const {ClassServices} = require('../services');
const classServices = new ClassServices();

class ClassController {

   static async getClasses(req, res) {
      const {initialDate, finalDate} = req.query;
      try {
         const classes = await classServices.getAllRegisters(initialDate, finalDate);
         return res.status(200).json(classes);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async getClassById(req, res) {
      const {id} = req.params;
      try {
         const foundClass = await classServices.getOneRegister(id);
         return res.status(200).json(foundClass);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async getFullClasses(req, res) {
      try {
         const fullClasses = await classServices.getFullRegisters();
         return res.status(200).json(fullClasses.count);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async createClass(req, res) {
      const newClass = req.body;
      try {
         await classServices.createRegister(newClass);
         return res.status(200).json({message: "Class created!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async updateClass(req, res) {
      const {id} = req.params;
      const newClass = req.body;
      try {
         await classServices.updateRegister(id, newClass);
         return res.status(200).json({message: "Class updated!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async deleteClass(req, res) {
      const {id} = req.params;
      try {
         await classServices.deleteRegister(id);
         return res.status(200).json({message: "Class deleted!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async restoreClass(req, res) {
      const {id} = req.params;
      try {
         await classServices.restoreRegister(id);
         return res.status(200).json({message: "Class restored!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

}

module.exports = ClassController;