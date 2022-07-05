const database = require('../models');

class PersonController {

   static async getPeople(req, res) {
      try {
         const people = await database.Person.findAll();
         return res.status(200).json(people);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async getPersonById(req, res) {
      const {id} = req.params;

      try {
         const person = await database.Person.findOne({
            where: {
               id: Number(id)
            }
         });
         return res.status(200).json(person);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async createPerson(req, res) {
      const person = req.body;
      try {
         await database.Person.create(person);
         return res.status(200).json({message: "Person created!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async updatePerson(req, res) {
      const {id} = req.params;
      const newPerson = req.body;
      try {
         await database.Person.update(newPerson, {
            where: {
               id: Number(id)
            }
         });
         return res.status(200).json({message: "Person updated!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async deletePerson(req, res) {
      const {id} = req.params;
      try {
         await database.Person.destroy({
            where: {
               id: Number(id)
            }
         });
         return res.status(200).json({message: "Person deleted!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

}

module.exports = PersonController;