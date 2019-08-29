const express = require('express');
const router = express.Router();
const pictoCtrl = require('../controllers/picto');

//loads page to make new picto
router.get('/new', pictoCtrl.newPicto);
//submits user created picto to profile
router.post('/', pictoCtrl.create);
//gets form to show specific picto
router.get('/:id', pictoCtrl.show);

module.exports = router;