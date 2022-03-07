const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');


router.get('/id:', userController.FindById);
router.get('/', userController.FindAll);
router.get('/stats', userController.FindUserStats);
router.delete('/:id', userController.Delete);
router.put('/:id', userController.Update);

module.exports = router;