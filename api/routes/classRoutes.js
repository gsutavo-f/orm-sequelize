const { Router } = require('express');
const ClassController = require('../controllers/ClassController.js');

const router = Router();

router
   .get('/class', ClassController.getClasses)
   .get('/class/:id', ClassController.getClassById)
   .post('/class', ClassController.createClass)
   .put('/class/:id', ClassController.updateClass)
   .delete('/class/:id', ClassController.deleteClass);

module.exports = router;