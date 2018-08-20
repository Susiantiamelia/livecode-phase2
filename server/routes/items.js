var express = require('express');
var router = express.Router();
const itemController = require('../controller/item')

/* GET home page. */
router.post('/', itemController.items);

router.get('/', itemController.list_all)

module.exports = router;
