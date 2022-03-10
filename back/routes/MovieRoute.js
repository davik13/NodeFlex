const express = require('express')
const router = express.Router();
const verify = require('../middleware/jwtTokenVerify')

const MovieController = require('../controllers/movieController');

router.get('/',verify, MovieController.findAll);
router.get('/:id',verify, MovieController.findOne);
router.post('/create',verify, MovieController.create);
router.delete('/:id',verify, MovieController.delete);
router.put('/:id',verify, MovieController.update);
router.get('/randomMovie', verify, MovieController.randomMovie);

module.exports = router;