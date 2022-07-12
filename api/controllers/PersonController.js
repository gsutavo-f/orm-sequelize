const {PersonServices} = require('../services');
const personServices = new PersonServices();

class PersonController {

   static async getActivePeople(req, res) {
      try {
         const people = await personServices.getActiveRegisters();
         return res.status(200).json(people);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async getAllPeople(req, res) {
      try {
         const people = await personServices.getAllRegisters();
         return res.status(200).json(people);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async getPersonById(req, res) {
      const {id} = req.params;
      try {
         const person = await personServices.getOneRegister(id);
         return res.status(200).json(person);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async createPerson(req, res) {
      const person = req.body;
      try {
         await personServices.createRegister(person);
         return res.status(200).json({message: "Person created!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async updatePerson(req, res) {
      const {id} = req.params;
      const newPerson = req.body;
      try {
         await personServices.updateRegister(id, newPerson);
         return res.status(200).json({message: "Person updated!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async deletePerson(req, res) {
      const {id} = req.params;
      try {
         await personServices.deleteRegister(id);
         return res.status(200).json({message: "Person deleted!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async restorePerson(req, res) {
      const {id} = req.params;
      try {
         await personServices.restoreRegister(id);
         return res.status(200).json({message: "Person restored!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async getStudentsRegistrations(req, res) {
      const {studentId} = req.params;
      try {
         const person = await personServices.getOneRegister(studentId);
         const registrations = await person.getRegisteredClasses();
         return res.status(200).json(registrations);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async cancelStudentRegistration(req, res) {
      const {studentId} = req.params;
      try {
         await personServices.cancelStudentRegistration(studentId);
         return res.status(200).json({message: "Registrations canceled!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

}

module.exports = PersonController;