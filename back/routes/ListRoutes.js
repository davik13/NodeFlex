const express = require('express');
const router = express.Router();
const verify = require('../middleware/jwtTokenVerify')

const ListController = require('../controllers/ListController')

router.get('/',verify, ListController.GETLIST)
router.delete('/',verify, ListController.Delete)
router.post('/',verify, ListController.Create);

module.exports = router;