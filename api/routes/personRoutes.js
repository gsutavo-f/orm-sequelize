const { Router } = require('express');
const PersonController = require('../controllers/PersonController');

const router = Router();

router
   .get('/person', PersonController.getPeople)
   .get('/person/:id', PersonController.getPersonById)
   .get('/person/:studentId/registration', PersonController.getAllRegistrationsByStudent)
   .get('/person/:studentId/registration/:registrationId', PersonController.getRegistrationByStudent)
   .post('/person', PersonController.createPerson)
   .post('/person/:studentId/registration', PersonController.createRegistration)
   .put('/person/:id', PersonController.updatePerson)
   .put('/person/:studentId/registration/:registrationId', PersonController.updateRegistration)
   .delete('/person/:id', PersonController.deletePerson)
   .delete('/person/:studentId/registration/:registrationId', PersonController.deleteRegistration);

module.exports = router;