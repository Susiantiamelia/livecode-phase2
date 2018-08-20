var express = require('express');
var router = express.Router();
const Users = require('../controller/user.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', Users.register)

router.post('/request_token', Users.request_token)
module.exports = router;
