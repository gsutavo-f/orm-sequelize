const { Router } = require('express');
const PersonController = require('../controllers/PersonController');
const RegistrationController = require('../controllers/RegistrationController');

const router = Router();

router
   .get('/person', PersonController.getAllPeople)
   .get('/person/active', PersonController.getActivePeople)
   .get('/person/:id', PersonController.getPersonById)
   .get('/person/:studentId/registration', PersonController.getStudentsRegistrations)
   .get('/person/:studentId/registration/:registrationId', RegistrationController.getRegistrationByStudent)
   .get('/person/registration/class/:classId/active', RegistrationController.getRegistrationsByClass)
   .post('/person', PersonController.createPerson)
   .post('/person/:id/restore', PersonController.restorePerson)
   .post('/person/:studentId/registration', RegistrationController.createRegistration)
   .post('/person/:studentId/registration/:registrationId/restore', RegistrationController.restoreRegistration)
   .put('/person/:id', PersonController.updatePerson)
   .put('/person/:studentId/registration/:registrationId', RegistrationController.updateRegistration)
   .patch('/person/:studentId/registration/cancel', PersonController.cancelStudentRegistration)
   .delete('/person/:id', PersonController.deletePerson)
   .delete('/person/:studentId/registration/:registrationId', RegistrationController.deleteRegistration);

module.exports = router;