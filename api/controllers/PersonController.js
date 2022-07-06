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

   static async getAllRegistrationsByStudent(req, res) {
      const {studentId} = req.params;
      try {
         const registration = await database.Registration.findAll({
            where: {
               studentId: Number(studentId)
            }
         });
         return res.status(200).json(registration);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async getRegistrationByStudent(req, res) {
      const {studentId, registrationId} = req.params;
      try {
         const registration = await database.Registration.findOne({
            where: {
               id: Number(registrationId),
               studentId: Number(studentId)
            }
         });
         return res.status(200).json(registration);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async createRegistration(req, res) {
      const {studentId} = req.params;
      const registration = {
         ...req.body,
         studentId: Number(studentId)
      };
      try {
         await database.Registration.create(registration);
         return res.status(200).json({message: "Registration created!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async updateRegistration(req, res) {
      const {studentId, registrationId} = req.params;
      const newRegistration = req.body;
      try {
         await database.Registration.update(newRegistration, {
            where: {
               id: Number(registrationId),
               studentId: Number(studentId)
            }
         });
         return res.status(200).json({message: "Registration updated!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async deleteRegistration(req, res) {
      const {studentId, registrationId} = req.params;
      try {
         await database.Registration.destroy({
            where: {
               id: Number(registrationId),
               studentId: Number(studentId)
            }
         });
         return res.status(200).json({message: "Registration deleted!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

}

module.exports = PersonController;