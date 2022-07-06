const { Router } = require('express');
const LevelController = require('../controllers/LevelController.js');

const router = Router();

router
   .get('/level', LevelController.getLevels);

module.exports = router;