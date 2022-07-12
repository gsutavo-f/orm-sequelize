const {RegistrationServices} = require('../services');
const registrationServices = new RegistrationServices();

class RegistrationController {

   static async getRegistrationsByClass(req, res) {
      const {classId} = req.params;
      try {
         const registrations = await registrationServices
            .getAndCountRegisters(
               {classId: Number(classId), status: 'Active'},
               {limit: 4, order: [['studentId', 'ASC']]}
            );
         return res.status(200).json(registrations);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async getRegistrationByStudent(req, res) {
      const {studentId, registrationId} = req.params;
      try {
         const registration = await registrationServices.getOneRegister({
            id: Number(registrationId),
            studentId: Number(studentId)
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
         await registrationServices.createRegister(registration);
         return res.status(200).json({message: "Registration created!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async updateRegistration(req, res) {
      const {studentId, registrationId} = req.params;
      const newRegistration = req.body;
      try {
         await registrationServices.updateRegisters({
            id: Number(registrationId),
            studentId: Number(studentId)
         }, newRegistration);
         return res.status(200).json({message: "Registration updated!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async deleteRegistration(req, res) {
      const {studentId, registrationId} = req.params;
      try {
         await registrationServices.deleteRegisters({
            id: Number(registrationId),
            studentId: Number(studentId)
         });
         return res.status(200).json({message: "Registration deleted!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async restoreRegistration(req, res) {
      const {studentId, registrationId} = req.params;
      try {
         await registrationServices.restoreRegisters({
            id: Number(registrationId),
            studentId: Number(studentId)
         });
         return res.status(200).json({message: "Registration restored!"});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

}

module.exports = RegistrationController;