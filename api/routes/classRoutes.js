const { Router } = require('express');
const ClassController = require('../controllers/ClassController.js');

const router = Router();

router
   .get('/class', ClassController.getClasses);

module.exports = router;