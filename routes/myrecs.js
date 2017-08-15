var express = require('express');
var router = express.Router();
var myrecsController = require('../controllers/myrecs');

router.get('/', myrecsController.index);
router.get('/new', myrecsController.new);
router.get('/edit', myrecsController.edit);
router.post('/add', myrecsController.search);

module.exports = router;
