const { Router } = require('express');
const LevelController = require('../controllers/LevelController.js');

const router = Router();

router
   .get('/level', LevelController.getLevels)
   .get('/level/:id', LevelController.getLevelById)
   .post('/level', LevelController.createLevel)
   .put('/level/:id', LevelController.updateLevel)
   .delete('/level/:id', LevelController.deleteLevel);

module.exports = router;