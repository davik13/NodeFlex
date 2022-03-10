const express = require('express')
const router = express.Router()
const verify = require('../middleware/jwtTokenVerify')

const MovieController = require('../controllers/movieController')

router.get('/', verify, MovieController.findAll)
router.get('/find/:id', verify, MovieController.findOne)
router.post('/', verify, MovieController.create)
router.delete('/:id', verify, MovieController.delete)
router.put('/:id', verify, MovieController.update)
router.get('/random', verify, MovieController.randomMovie)

module.exports = router
