const { Router } = require('express');
const PersonController = require('../controllers/PersonController');

const router = Router();

router
   .get('/person', PersonController.getPeople)
   .get('/person/:id', PersonController.getPersonById)
   .post('/person', PersonController.createPerson)
   .put('/person/:id', PersonController.updatePerson)
   .delete('/person/:id', PersonController.deletePerson);

module.exports = router;