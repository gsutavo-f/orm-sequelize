const database = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class ClassController {

   static async getClasses(req, res) {
      const {initialDate, finalDate} = req.query;
      const where = {};
      initialDate || finalDate ? where.startDate = {} : null;
      initialDate ? where.startDate[Op.gte] = initialDate : null;
      finalDate ? where.startDate[Op.lte] = finalDate : null;
      try {
         const classes = await database.Class.findAll({where});
         return res.status(200).json(classes);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async getClassById(req, res) {
      const {id} = req.params;
      try {
         const foundClass = await database.Class.findOne({
            where: {
               id: Number(id)
            }
         });
         return res.status(200).json(foundClass);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async createClass(req, res) {
      const bodyClass = req.body;
      try {
         await database.Class.create(bodyClass);
         return res.status(200).json({message: "Class created!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async updateClass(req, res) {
      const {id} = req.params;
      const newClass = req.body;
      try {
         await database.Class.update(newClass, {
            where: {
               id: Number(id)
            }
         });
         return res.status(200).json({message: "Class updated!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async deleteClass(req, res) {
      const {id} = req.params;
      try {
         await database.Class.destroy({
            where: {
               id: Number(id)
            }
         });
         return res.status(200).json({message: "Class deleted!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async restoreClass(req, res) {
      const {id} = req.params;
      try {
         await database.Class.restore({
            where: {
               id: Number(id)
            }
         });
         return res.status(200).json({message: "Class restored!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

}

module.exports = ClassController;