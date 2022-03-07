const express = require('express')
const router = express.Router();

const MovieController = require('../controllers/MovieController');

router.get('/', MovieController.findAll);
router.get('/:id', MovieController.findOne);
router.post('/', MovieController.create);
router.delete('/:id', MovieController.delete);
router.put('/:id', MovieController.update);

module.exports = router;