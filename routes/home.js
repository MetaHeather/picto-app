const express = require('express');
const router = express.Router();
const homeCtrl = require('../controllers/home');

//loads index log in page
router.get('/', homeCtrl.index);

module.exports = router;