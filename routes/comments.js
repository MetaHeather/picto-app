const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

//loads index log in page
router.get('/:id/comments/new', commentsCtrl.newComment);

module.exports = router;