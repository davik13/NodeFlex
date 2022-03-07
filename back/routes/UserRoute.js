const express = require('express');
const router = express.Router();
const verify = require('../middleware/jwtTokenVerify')

const userController = require('../controllers/UserController');


router.get('/id:', userController.FindById);
router.get('/',verify, userController.FindAll);
router.get('/stats', userController.FindUserStats);
router.delete('/:id',verify, userController.Delete);
router.put('/:id',verify, userController.Update);

module.exports = router;