var express = require('express');
var router = express.Router();
var homeCtrl = require('../controllers/home');

//loads index log in page
router.get('/', homeCtrl.index);
//loads page to make new picto
router.get('/new', homeCtrl.newPicto);
//submits user created picto to profile
router.post('/', homeCtrl.create)

module.exports = router;